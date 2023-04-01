import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Error } from "src/api/api";
import {
  FriendshipState,
  RemoveFriendshipRequestPayload,
  UpdateFriendshipRequestPayload,
} from "./Friendship.d";
import { FriendshipStatus, Status } from "src/constants";

const initialState: FriendshipState = {
  friendshipRequests: {
    status: Status.INIT,
    data: [],
    reason: {},
  },
  requestFriendship: {
    status: Status.INIT,
    data: {} as FriendshipState["requestFriendship"]["data"],
    reason: {},
  },
  updateFriendship: {
    status: Status.INIT,
    data: {} as FriendshipState["updateFriendship"]["data"],
    reason: {},
  },
  removeFriendship: {
    status: Status.INIT,
    data: {} as FriendshipState["removeFriendship"]["data"],
    reason: {},
  },
  friendshipRequestCount: 0,
};

export const friendshipSlice = createSlice({
  name: "friendship",
  initialState,
  reducers: {
    getFriendshipRequestsRequest: (state) => {
      state.friendshipRequests.status = Status.LOADING;
      state.friendshipRequests.reason = initialState.friendshipRequests.reason;
    },
    getFriendshipRequestsSuccess: (
      state,
      action: PayloadAction<FriendshipState["friendshipRequests"]["data"]>
    ) => {
      state.friendshipRequests.status = Status.LOADED;
      state.friendshipRequests.data = action.payload;
    },
    getFriendshipRequestsError: (state, action: PayloadAction<Error>) => {
      state.friendshipRequests.status = Status.ERROR;
      state.friendshipRequests.reason = action.payload;
    },

    setFriendshipRequestCount: (state, action: PayloadAction<number>) => {
      state.friendshipRequestCount = action.payload;
    },

    requestFriendshipRequest: (state) => {
      state.requestFriendship.status = Status.LOADING;
      state.requestFriendship.reason = initialState.requestFriendship.reason;
    },
    requestFriendshipSuccess: (
      state,
      action: PayloadAction<FriendshipState["requestFriendship"]["data"]>
    ) => {
      state.requestFriendship.status = Status.LOADED;
      state.requestFriendship.data = action.payload;
      // @TODO: move to saga
      // state.user.data.friendshipStatusWithMe = FriendshipStatus.REQUESTED;
    },
    requestFriendshipError: (state, action: PayloadAction<Error>) => {
      state.requestFriendship.status = Status.ERROR;
      state.requestFriendship.reason = action.payload;
    },

    updateFriendshipRequest: (
      state,
      action: PayloadAction<UpdateFriendshipRequestPayload>
    ) => {
      state.updateFriendship.status = Status.LOADING;
      state.updateFriendship.reason = initialState.updateFriendship.reason;
    },
    updateFriendshipSuccess: (
      state,
      action: PayloadAction<FriendshipState["updateFriendship"]["data"]>
    ) => {
      state.updateFriendship.status = Status.LOADED;
      state.updateFriendship.data = action.payload;
    },
    updateFriendshipError: (state, action: PayloadAction<Error>) => {
      state.updateFriendship.status = Status.ERROR;
      state.updateFriendship.reason = action.payload;
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
      action: PayloadAction<FriendshipState["removeFriendship"]["data"]>
    ) => {
      state.removeFriendship.status = Status.LOADED;
      state.removeFriendship.data = action.payload;
      // @TODO: move to saga
      // state.user.data.friendshipStatusWithMe = null;
    },
    removeFriendshipError: (state, action: PayloadAction<Error>) => {
      state.removeFriendship.status = Status.ERROR;
      state.removeFriendship.reason = action.payload;
    },
  },
});

export const {
  getFriendshipRequestsRequest,
  getFriendshipRequestsSuccess,
  getFriendshipRequestsError,

  setFriendshipRequestCount,

  requestFriendshipError,
  requestFriendshipRequest,
  requestFriendshipSuccess,

  updateFriendshipError,
  updateFriendshipRequest,
  updateFriendshipSuccess,

  removeFriendshipError,
  removeFriendshipRequest,
  removeFriendshipSuccess,
} = friendshipSlice.actions;
export default friendshipSlice.reducer;
