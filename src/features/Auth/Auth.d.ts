import { Status } from "src/constants";

export interface AuthState {
  access_token: string;
  user: Record<string, any>; // @TODO: type user
  login: {
    status: Status;
    result: Record<string, any>; // @TODO: type result
  };
}

export type LoginRequestPayload = {
  email: string;
  password: string;
};

export type LoginErrorPayload = {
  email: string;
  password: string;
};
