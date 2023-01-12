import { endpoints } from "./endpoints";
import { request } from "./request";

export const login = (data: any) => request.post(endpoints.auth.login, data);
