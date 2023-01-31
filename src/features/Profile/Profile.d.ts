import { Status } from "src/constants";
import { Error } from "src/api/api.d";
import { User } from "src/types";

export interface ProfileState {
  user: {
    status: Status;
    data: User;
    reason: Error;
  };
}

export type GetUserRequestPayload = {
  userId: User["id"] | string;
};
