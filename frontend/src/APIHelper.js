import axios from "axios";
import constants from "./config/constants";
axios.defaults.baseURL = constants.apiUrl;
export const createShortUrl = obj => {
  const requestUrl = "item";
  return axios.post(requestUrl, obj);
};

export const getOrigionalUrl = obj => {
  console.log(obj.originalUrl)
  let Id = obj.originalUrl.substr(12);
  const requestUrl = "item/" + Id;
  return axios.get(requestUrl, obj);
};