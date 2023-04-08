import { Status } from "src/constants";
import { Error } from "src/api/api.d";
import { Comment, Post } from "src/types";

export interface FeedState {
  posts: {
    status: Status;
    data: Post[];
    reason: Error;
  };
  createPost: {
    status: Status;
    data: any; // @TODO: type;
    reason: Error;
  };
  comments: {
    status: Status;
    data: Comment[];
    reason: Error;
  };
  createComment: {
    status: Status;
    data: any; // @TODO: type;
    reason: Error;
  };
  selectedPostId: Post["id"];
}

export type GetCommentsRequestPayload = Post["id"];
export type CreateCommentRequestPayload = { postId: Post["id"]; text: string };
export type CreatePostRequestPayload = { text: string };
export type IncreaseCommentCountPayload = {
  postId: Post["id"];
  incrementBy: number;
};
