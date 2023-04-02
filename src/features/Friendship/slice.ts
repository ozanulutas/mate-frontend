import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Error } from "src/api/api";
import {
  FriendshipState,
  RemoveFriendshipRequestPayload,
  AcceptFriendshipRequestPayload,
} from "./Friendship.d";
import { Status } from "src/constants";

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
  acceptFriendship: {
    status: Status.INIT,
    data: {} as FriendshipState["acceptFriendship"]["data"],
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

    setFriendshipRequestsCount: (state, action: PayloadAction<number>) => {
      state.friendshipRequestCount = action.payload;
    },
    increaseFriendshipRequestsCount: (state, action: PayloadAction<number>) => {
      state.friendshipRequestCount += action.payload;
    },
    decreaseFriendshipRequestsCount: (state, action: PayloadAction<number>) => {
      state.friendshipRequestCount -= action.payload;
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
    },
    requestFriendshipError: (state, action: PayloadAction<Error>) => {
      state.requestFriendship.status = Status.ERROR;
      state.requestFriendship.reason = action.payload;
    },

    acceptFriendshipRequest: (
      state,
      action: PayloadAction<AcceptFriendshipRequestPayload>
    ) => {
      state.acceptFriendship.status = Status.LOADING;
      state.acceptFriendship.reason = initialState.acceptFriendship.reason;
    },
    acceptFriendshipSuccess: (
      state,
      action: PayloadAction<FriendshipState["acceptFriendship"]["data"]>
    ) => {
      state.acceptFriendship.status = Status.LOADED;
      state.acceptFriendship.data = action.payload;
    },
    acceptFriendshipError: (state, action: PayloadAction<Error>) => {
      state.acceptFriendship.status = Status.ERROR;
      state.acceptFriendship.reason = action.payload;
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

  setFriendshipRequestsCount,
  increaseFriendshipRequestsCount,
  decreaseFriendshipRequestsCount,

  requestFriendshipError,
  requestFriendshipRequest,
  requestFriendshipSuccess,

  acceptFriendshipError,
  acceptFriendshipRequest,
  acceptFriendshipSuccess,

  removeFriendshipError,
  removeFriendshipRequest,
  removeFriendshipSuccess,
} = friendshipSlice.actions;
export default friendshipSlice.reducer;
