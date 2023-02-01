import { Status } from "src/constants";
import { Error } from "src/api/api.d";
import { Comment, Post } from "src/types";

export interface FeedState {
  posts: {
    status: Status;
    data: Post[];
    reason: Error;
  };
  comments: {
    status: Status;
    data: Comment[];
    reason: Error;
  };
}

export type GetCommentsRequestPayload = Post["id"];
