import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import getShortUrl from "./getShortUrl/getShortUrl";
import getOrigional from "./getOrigional/getOrigional";

import "./styles.css";
class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={getShortUrl} />
            </Switch>
            <Switch>
              <Route path="/" component={getOrigional} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
