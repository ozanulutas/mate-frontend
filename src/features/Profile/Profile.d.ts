import { Status } from "src/constants";
import { Error } from "src/api/api.d";

export interface ProfileState {
  user: {
    status: Status;
    data: any;
    reason: Error;
  };
}

export type GetUserRequestPayload = {
  userId: number | string;
};
