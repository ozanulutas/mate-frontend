import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Error } from "src/api/api";
import { GetUserRequestPayload, ProfileState } from "./Profile.d";
import { Status } from "src/constants";

const initialState: ProfileState = {
  user: {
    status: Status.INIT,
    data: {},
    reason: {},
  },
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getUserRequest: (
      state,
      action: PayloadAction<GetUserRequestPayload["userId"]>
    ) => {
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
  },
});

export const { getUserError, getUserRequest, getUserSuccess } =
  profileSlice.actions;
export default profileSlice.reducer;
