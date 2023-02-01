import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Error } from "src/api/api";
import {
  GetPostsRequestPayload,
  GetUserRequestPayload,
  ProfileState,
} from "./Profile.d";
import { Status } from "src/constants";

const initialState: ProfileState = {
  user: {
    status: Status.INIT,
    data: {} as ProfileState["user"]["data"],
    reason: {},
  },
  posts: {
    status: Status.INIT,
    data: [],
    reason: {},
  },
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getUserRequest: (state, action: PayloadAction<GetUserRequestPayload>) => {
      state.user.status = Status.LOADING;
      state.user.reason = initialState.user.reason;
    },
    getUserSuccess: (
      state,
      action: PayloadAction<ProfileState["user"]["data"]>
    ) => {
      state.user.status = Status.LOADED;
      state.user.data = action.payload;
    },
    getUserError: (state, action: PayloadAction<Error>) => {
      state.user.status = Status.ERROR;
      state.user.reason = action.payload;
    },

    getPostsRequest: (state, action: PayloadAction<GetPostsRequestPayload>) => {
      state.posts.status = Status.LOADING;
      state.posts.reason = initialState.posts.reason;
    },
    getPostsSuccess: (
      state,
      action: PayloadAction<ProfileState["posts"]["data"]>
    ) => {
      state.posts.status = Status.LOADED;
      state.posts.data = action.payload;
    },
    getPostsError: (state, action: PayloadAction<Error>) => {
      state.posts.status = Status.ERROR;
      state.posts.reason = action.payload;
    },
  },
});

export const {
  getUserError,
  getUserRequest,
  getUserSuccess,
  getPostsError,
  getPostsRequest,
  getPostsSuccess,
} = profileSlice.actions;
export default profileSlice.reducer;
