import axios, { AxiosRequestHeaders } from "axios";
import { Env, LocalStorageKey } from "src/constants";

export const request = axios.create({
  baseURL: Env.API_URL,
});

request.interceptors.request.use(
  (config) => {
    (
      config.headers as AxiosRequestHeaders
    ).Authorization = `Bearer ${localStorage.getItem(LocalStorageKey.TOKEN)}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
