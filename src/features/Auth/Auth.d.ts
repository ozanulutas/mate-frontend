import { Status } from "src/constants";

export interface AuthState {
  access_token: string;
  user: Record<string, any>; // @TODO: type user
  login: {
    status: Status;
    reason: Record<string, any>; // @TODO: type reason
  };
  register: {
    status: Status;
    reason: Record<string, any>; // @TODO: type reason
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
