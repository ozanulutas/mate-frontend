import axios from "axios";
import { env } from "src/constants";

export const request = axios.create({
  baseURL: env.API_URL,
});
