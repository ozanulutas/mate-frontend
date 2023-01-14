import axios from "axios";
import { Env } from "src/constants";

export const request = axios.create({
  baseURL: Env.API_URL,
});

request.interceptors.request.use(
  (config) => {
    console.log("req");

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
