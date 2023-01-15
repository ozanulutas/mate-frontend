import {
  LoginRequestPayload,
  RegisterRequestPayload,
} from "src/features/Auth/Auth.d";
import { endpoints } from "./endpoints";
import { request } from "./request";

export const loginApi = (data: LoginRequestPayload) =>
  request.post(endpoints.auth.login, data);

export const registerApi = (data: RegisterRequestPayload) =>
  request.post(endpoints.auth.register, data);
