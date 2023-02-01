import { Status } from "src/constants";
import { Error } from "src/api/api.d";
import { Post, User } from "src/types";

export interface ProfileState {
  user: {
    status: Status;
    data: User;
    reason: Error;
  };
  posts: {
    status: Status;
    data: Post[];
    reason: Error;
  };
}

export type GetUserRequestPayload = User["id"] | string;
export type GetPostsRequestPayload = User["id"] | string;
