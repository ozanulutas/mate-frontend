import { Status } from "src/constants";
import { Error } from "src/api/api.d";
import { User } from "src/types";

export interface AppConfigState {
  status: Status;
  data: {
    user: Pick<User, "id" | "username">;
  };
  reason: Error;
}
