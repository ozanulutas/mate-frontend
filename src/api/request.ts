import axios from "axios";
import { Env } from "src/constants";

export const request = axios.create({
  baseURL: Env.API_URL,
});
