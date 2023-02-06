import { Status } from "src/constants";
import { Error } from "src/api/api.d";

export interface AuthState {
  login: {
    status: Status;
    reason: Error;
  };
  register: {
    status: Status;
    reason: Error;
  };
}

export type LoginRequestPayload = {
  email: string;
  password: string;
};

export type RegisterRequestPayload = {
  email: string;
  username: string;
  password: string;
};

export type LoginSuccessPayload = {
  access_token: string;
};

export type RegisterSuccessPayload = {
  access_token: string;
};
