import { AddLocationRequestPayload } from "src/features/Account/Account.d";
import {
  LoginRequestPayload,
  RegisterRequestPayload,
} from "src/features/Auth/Auth.d";
import { SearchCategoryRequestPayload } from "src/features/Search/Search.d";
import { endpoints } from "./endpoints";
import { request } from "./request";

export const loginApi = (data: LoginRequestPayload) =>
  request.post(endpoints.auth.login, data);

export const registerApi = (data: RegisterRequestPayload) =>
  request.post(endpoints.auth.register, data);

export const categorySearchApi = ({ name }: SearchCategoryRequestPayload) =>
  request.get(endpoints.category.search, {
    params: {
      name,
    },
  });

export const addLocationApi = (data: AddLocationRequestPayload) =>
  request.post(endpoints.location.add, data);
