import { Status } from "src/constants";

export interface AuthState {
  login: {
    status: Status;
  };
}

export type LoginRequestPayload = {
  email: string;
  password: string;
};
