import { Status } from "src/constants";
import { Error } from "src/api/api.d";
import { User } from "src/types";

export interface AuthState {
  access_token: string;
  user: User;
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
