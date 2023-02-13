import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Error } from "src/api/api";
import {
  GetPostsRequestPayload,
  GetUserRequestPayload,
  ProfileState,
  RemoveFriendshipRequestPayload,
} from "./Profile.d";
import { FriendshipStatus, Status } from "src/constants";

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
  follow: {
    status: Status.INIT,
    data: {} as ProfileState["follow"]["data"],
    reason: {},
  },
  unfollow: {
    status: Status.INIT,
    data: {} as ProfileState["unfollow"]["data"],
    reason: {},
  },
  requestFriendship: {
    status: Status.INIT,
    data: {} as ProfileState["requestFriendship"]["data"],
    reason: {},
  },
  removeFriendship: {
    status: Status.INIT,
    data: {} as ProfileState["removeFriendship"]["data"],
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

    followRequest: (state) => {
      state.follow.status = Status.LOADING;
      state.follow.reason = initialState.follow.reason;
    },
    followSuccess: (
      state,
      action: PayloadAction<ProfileState["follow"]["data"]>
    ) => {
      state.follow.status = Status.LOADED;
      state.follow.data = action.payload;
      state.user.data.isFollowedByMe = true;
    },
    followError: (state, action: PayloadAction<Error>) => {
      state.follow.status = Status.ERROR;
      state.follow.reason = action.payload;
    },

    unfollowRequest: (state) => {
      state.unfollow.status = Status.LOADING;
      state.unfollow.reason = initialState.unfollow.reason;
    },
    unfollowSuccess: (
      state,
      action: PayloadAction<ProfileState["unfollow"]["data"]>
    ) => {
      state.unfollow.status = Status.LOADED;
      state.unfollow.data = action.payload;
      state.user.data.isFollowedByMe = false;
    },
    unfollowError: (state, action: PayloadAction<Error>) => {
      state.unfollow.status = Status.ERROR;
      state.unfollow.reason = action.payload;
    },

    requestFriendshipRequest: (state) => {
      state.requestFriendship.status = Status.LOADING;
      state.requestFriendship.reason = initialState.requestFriendship.reason;
    },
    requestFriendshipSuccess: (
      state,
      action: PayloadAction<ProfileState["requestFriendship"]["data"]>
    ) => {
      state.requestFriendship.status = Status.LOADED;
      state.requestFriendship.data = action.payload;
      state.user.data.friendshipStatusWithMe = FriendshipStatus.REQUESTED;
    },
    requestFriendshipError: (state, action: PayloadAction<Error>) => {
      state.requestFriendship.status = Status.ERROR;
      state.requestFriendship.reason = action.payload;
    },

    removeFriendshipRequest: (
      state,
      action: PayloadAction<RemoveFriendshipRequestPayload>
    ) => {
      state.removeFriendship.status = Status.LOADING;
      state.removeFriendship.reason = initialState.removeFriendship.reason;
    },
    removeFriendshipSuccess: (
      state,
      action: PayloadAction<ProfileState["removeFriendship"]["data"]>
    ) => {
      state.removeFriendship.status = Status.LOADED;
      state.removeFriendship.data = action.payload;
      state.user.data.friendshipStatusWithMe = null;
    },
    removeFriendshipError: (state, action: PayloadAction<Error>) => {
      state.removeFriendship.status = Status.ERROR;
      state.removeFriendship.reason = action.payload;
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

  followError,
  followRequest,
  followSuccess,

  unfollowError,
  unfollowRequest,
  unfollowSuccess,

  requestFriendshipError,
  requestFriendshipRequest,
  requestFriendshipSuccess,

  removeFriendshipError,
  removeFriendshipRequest,
  removeFriendshipSuccess,
} = profileSlice.actions;
export default profileSlice.reducer;
