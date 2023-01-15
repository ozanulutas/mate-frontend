import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthState, LoginRequestPayload } from "./Auth.d";
import { Status } from "src/constants";

const initialState: AuthState = {
  access_token: "",
  user: {},
  login: {
    status: Status.INIT,
    result: {},
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state, action: PayloadAction<LoginRequestPayload>) => {
      state.login.status = Status.LOADING;
      state.login.result = initialState.login.result;
    },
    loginSuccess: (
      state,
      action: PayloadAction<Pick<AuthState, "access_token" | "user">>
    ) => {
      state.login.status = Status.LOADED;

      state.user = action.payload.user;
      state.access_token = action.payload.access_token;
    },
    // @TODO: type PayloadAction
    loginError: (state, action: PayloadAction<any>) => {
      state.login.status = Status.ERROR;
      state.login.result = action.payload;
    },
  },
});

export const { loginRequest, loginSuccess, loginError } = authSlice.actions;
export default authSlice.reducer;
