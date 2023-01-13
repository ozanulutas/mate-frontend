import { LoginRequestPayload } from "src/features/Auth/Auth";
import { endpoints } from "./endpoints";
import { request } from "./request";

export const loginApi = (data: LoginRequestPayload) =>
  request.post(endpoints.auth.login, data);
