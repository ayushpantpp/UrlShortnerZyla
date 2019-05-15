import React, { Component } from "react";
import "./Landing.css";
import { getOrigionalUrl } from "../../APIHelper";
import constants from "../../config/constants";
class getOrigional extends Component {
  constructor() {
    super();
    this.state = {
      showShortenUrl: false,
      shortenUrl: "",
      originalUrl: "",
      baseUrl: "",
      clickSubmit: true,
      showError: false,
      apiError: "",
      showApiError: false,
      showLoading: false,
      exShortUrl: constants.baseUrl
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }
  handleSubmit() {
    this.setState({ clickSubmit: true, showApiError: false });
    if (this.state.clickSubmit && this.state.originalUrl) {
      this.setState({ showLoading: true, showShortenUrl: false });
      console.log(this.state.originalUrl)
      let reqObj = {
        originalUrl: this.state.originalUrl,
        shortBaseUrl: constants.baseUrl
      };
      getOrigionalUrl(reqObj)
        .then(json => {
          setTimeout(() => {
            this.setState({
              showLoading: false,
              showShortenUrl: true,
              shortenUrl: json.data
            });
          }, 0);
        })
        .catch(error => {
          this.setState({
            showLoading: false,
            showApiError: true,
            apiError: "Server Error"
          });
        });
    } else {
      this.setState({ showError: true });
    }
  }
  renderButton() {
    if (!this.state.showLoading) {
      return (
        <button
          className="btn waves-effect waves-light submit-btn"
          name="action"
          onClick={this.handleSubmit}
        >
          Get Original URL
        </button>
      );
    } else {
      return (
        <div className="loader">
          <div className="preloader-wrapper small active">
            <div className="spinner-layer spinner-green-only">
              <div className="circle-clipper left">
                <div className="circle" />
              </div>
              <div className="gap-patch">
                <div className="circle" />
              </div>
              <div className="circle-clipper right">
                <div className="circle" />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="landing">
        <div>
          <h5>Short to origional url</h5>
        </div>
        <input
          name="originalUrl"
          field="originalUrl"
          placeholder="Paste your link.."
          value={this.state.originalUrl}
          onChange={this.handleUserInput.bind(this)}
        />

        {this.state.showError && (
          <div className="formError">Short Url is required</div>
        )}

        <input
          field="baseUrl"
          name="baseUrl"
          placeholder={this.state.exShortUrl}
          value={this.state.baseUrl}
          onChange={this.handleUserInput.bind(this)}
          disabled
          hidden
        />
        {this.renderButton()}
        {this.state.showApiError && (
          <div className="shorten-error">{this.state.apiError}</div>
        )}
        {this.state.showShortenUrl && (
          <div className="shorten-title">
            Origional Url is ->{` `}
            <a target="_blank" href={this.state.shortenUrl}>
              {this.state.shortenUrl}
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default getOrigional;
