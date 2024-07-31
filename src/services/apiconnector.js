import axios from "axios";
import { BASE_URL } from "./apis";

export const axiosInstace = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});


export const apiConnector = () => {
  return {
    fetchCategories: async ({ method, url, bodyData, headers, params }) => await axiosInstace({
      method: method,
      url: url,
      data: bodyData ? bodyData : null,
      params: params ? params : null,
    }),

    loginUser: async ({ method, url, bodyData, headers, params }) => await axiosInstace({
      method: method,
      url: url,
      data: bodyData ? bodyData : null,
      params: params ? params : null,
    }),

    sendotp: async ({ method, url, bodyData, headers, params }) => await axiosInstace({
      method: method,
      url: url,
      data: bodyData ? bodyData : null,
      params: params ? params : null,
    }),

    forgotResetPassword: async ({ method, url, bodyData, headers, params }) => await axiosInstace({
      method: method,
      url: url,
      data: bodyData ? bodyData : null,
      params: params ? params : null,
    }),

    resetnewPassword: async ({ method, url, bodyData, headers, params }) => await axiosInstace({
      method: method,
      url: url,
      data: bodyData ? bodyData : null,
      params: params ? params : null,
    }),

    verifyOtp: async ({ method, url, bodyData, headers, params }) => await axiosInstace({
      method: method,
      url: url,
      data: bodyData ? bodyData : null,
      params: params ? params : null,
    }),

    contactus: async ({ method, url, bodyData, headers, params }) => await axiosInstace({
      method: method,
      url: url,
      data: bodyData ? bodyData : null,
      params: params ? params : null,
    }),

    changePassword: async ({ method, url, bodyData, headers, params }) => await axiosInstace({
      method: method,
      url: url,
      data: bodyData ? bodyData : null,
      params: params ? params : null,
    }),

    deleteAccount: async ({ method, url, bodyData, headers, params }) => await axiosInstace({
      method: method,
      url: url,
      data: bodyData ? bodyData : null,
      params: params ? params : null,
    }),

    enrolledCourse: async ({ token, method, url, bodyData, params }) => await axios({

      method: method,
      url: url,
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: bodyData ? bodyData : null,
      params: params ? params : null,
    }),
  }
};
