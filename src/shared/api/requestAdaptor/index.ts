import axios, {
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosError,
} from "axios";

import { API_URL } from "~/shared/environment";

const API = axios.create({
  baseURL: API_URL,
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

API.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config as InternalAxiosRequestConfig<any>;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default API;
