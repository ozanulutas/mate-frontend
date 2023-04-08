import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Error } from "src/api/api";
import {
  CreateCommentRequestPayload,
  CreatePostRequestPayload,
  FeedState,
  GetCommentsRequestPayload,
  IncreaseCommentCountPayload,
} from "./Feed.d";
import { Status } from "src/constants";

const initialState: FeedState = {
  posts: {
    status: Status.INIT,
    data: [],
    reason: {},
  },
  createPost: {
    status: Status.INIT,
    data: {},
    reason: {},
  },
  comments: {
    status: Status.INIT,
    data: [],
    reason: {},
  },
  createComment: {
    status: Status.INIT,
    data: {},
    reason: {},
  },
  selectedPostId: null as unknown as FeedState["selectedPostId"],
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    getFeedRequest: (state) => {
      state.posts.status = Status.LOADING;
      state.posts.reason = initialState.posts.reason;
    },
    getFeedSuccess: (
      state,
      action: PayloadAction<FeedState["posts"]["data"]>
    ) => {
      state.posts.status = Status.LOADED;
      state.posts.data = action.payload;
    },
    getFeedError: (state, action: PayloadAction<Error>) => {
      state.posts.status = Status.ERROR;
      state.posts.reason = action.payload;
    },

    createPostRequest: (
      state,
      action: PayloadAction<CreatePostRequestPayload>
    ) => {
      state.createPost.status = Status.LOADING;
      state.createPost.reason = initialState.createPost.reason;
    },
    createPostSuccess: (
      state,
      action: PayloadAction<FeedState["createPost"]["data"]>
    ) => {
      state.createPost.status = Status.LOADED;
      state.createPost.data = action.payload;
    },
    createPostError: (state, action: PayloadAction<Error>) => {
      state.createPost.status = Status.ERROR;
      state.createPost.reason = action.payload;
    },

    getCommentsRequest: (
      state,
      action: PayloadAction<GetCommentsRequestPayload>
    ) => {
      state.comments.status = Status.LOADING;
      state.comments.reason = initialState.comments.reason;
    },
    getCommentsSuccess: (
      state,
      action: PayloadAction<FeedState["comments"]["data"]>
    ) => {
      state.comments.status = Status.LOADED;
      state.comments.data = action.payload;
    },
    getCommentsError: (state, action: PayloadAction<Error>) => {
      state.comments.status = Status.ERROR;
      state.comments.reason = action.payload;
    },

    createCommentRequest: (
      state,
      action: PayloadAction<CreateCommentRequestPayload>
    ) => {
      state.createComment.status = Status.LOADING;
      state.createComment.reason = initialState.createComment.reason;
    },
    createCommentSuccess: (
      state,
      action: PayloadAction<FeedState["createComment"]["data"]>
    ) => {
      state.createComment.status = Status.LOADED;
      state.createComment.data = action.payload;
    },
    createCommentError: (state, action: PayloadAction<Error>) => {
      state.createComment.status = Status.ERROR;
      state.createComment.reason = action.payload;
    },

    setSelectedPostId: (state, action: PayloadAction<number>) => {
      state.selectedPostId = action.payload;
    },

    increaseCommentCount: (
      state,
      action: PayloadAction<IncreaseCommentCountPayload>
    ) => {
      const { incrementBy, postId } = action.payload;
      const post = state.posts.data.find(({ id }) => id === postId);

      if (post) {
        post._count.comments += incrementBy;
      }
    },
  },
});

export const {
  getFeedError,
  getFeedRequest,
  getFeedSuccess,

  createPostError,
  createPostRequest,
  createPostSuccess,

  getCommentsError,
  getCommentsRequest,
  getCommentsSuccess,

  createCommentError,
  createCommentRequest,
  createCommentSuccess,

  setSelectedPostId,

  increaseCommentCount,
} = feedSlice.actions;
export default feedSlice.reducer;
