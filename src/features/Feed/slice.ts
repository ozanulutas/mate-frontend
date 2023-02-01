import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Error } from "src/api/api";
import { FeedState, GetCommentsRequestPayload } from "./Feed.d";
import { Status } from "src/constants";

const initialState: FeedState = {
  posts: {
    status: Status.INIT,
    data: [],
    reason: {},
  },
  comments: {
    status: Status.INIT,
    data: [],
    reason: {},
  },
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
      state.comments.data = [...state.comments.data, ...action.payload];
    },
    getCommentsError: (state, action: PayloadAction<Error>) => {
      state.comments.status = Status.ERROR;
      state.comments.reason = action.payload;
    },
  },
});

export const {
  getFeedError,
  getFeedRequest,
  getFeedSuccess,
  getCommentsError,
  getCommentsRequest,
  getCommentsSuccess,
} = feedSlice.actions;
export default feedSlice.reducer;
