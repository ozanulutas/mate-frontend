import { AddLocationRequestPayload } from "src/features/Account/Account.d";
import {
  LoginRequestPayload,
  RegisterRequestPayload,
} from "src/features/Auth/Auth.d";
import {
  GetUsersRequestPayload,
  GetCategoriesRequestPayload,
} from "src/features/Explore/Explore.d";
import { GetUserRequestPayload } from "src/features/Profile/Profile.d";
import { replacePathParams } from "src/utils/replace-path-params";
import { Endpoint } from "./endpoint";
import { request } from "./request";

// Auth

export const loginApi = (data: LoginRequestPayload) =>
  request.post(Endpoint.Auth.LOGIN, data);

export const registerApi = (data: RegisterRequestPayload) =>
  request.post(Endpoint.Auth.REGISTER, data);

// Category

export const categorySearchApi = ({ name }: GetCategoriesRequestPayload) =>
  request.get(Endpoint.Category.SEARCH, {
    params: {
      name,
    },
  });

// User

export const getUserApi = (userId: GetUserRequestPayload["userId"]) =>
  request.get(replacePathParams(Endpoint.User.GET, { userId }));

export const getUsersApi = (data: GetUsersRequestPayload) =>
  request.get(Endpoint.User.SEARCH, { params: data });

export const addLocationApi = (data: AddLocationRequestPayload) =>
  request.post(Endpoint.User.ADD_LOCATION, data);

export const getLocationsApi = () => request.get(Endpoint.User.GET_LOCATIONS);
