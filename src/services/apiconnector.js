import axios from "axios";
import { BASE_URL } from "./apis";

export const axiosInstace = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});


export const apiConnector = ({ method, url, bodyData, headers, params }) => {
  return axiosInstace({
    method: method,
    url: url,
    data: bodyData ? bodyData : null,
    params: params ? params : null,
  });
};
