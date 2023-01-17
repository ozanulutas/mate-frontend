import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  AuthState,
  LoginRequestPayload,
  RegisterRequestPayload,
} from "./Auth.d";
import { Status } from "src/constants";

const initialState: AuthState = {
  access_token: "",
  user: {},
  login: {
    status: Status.INIT,
    reason: {},
  },
  register: {
    status: Status.INIT,
    reason: {},
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state, action: PayloadAction<LoginRequestPayload>) => {
      state.login.status = Status.LOADING;
      state.login.reason = initialState.login.reason;
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
      state.login.reason = action.payload;
    },
    registerRequest: (state, action: PayloadAction<RegisterRequestPayload>) => {
      state.register.status = Status.LOADING;
      state.register.reason = initialState.register.reason;
    },
    registerSuccess: (
      state,
      action: PayloadAction<Pick<AuthState, "access_token" | "user">>
    ) => {
      state.register.status = Status.LOADED;

      state.user = action.payload.user;
      state.access_token = action.payload.access_token;
    },
    // @TODO: type PayloadAction
    registerError: (state, action: PayloadAction<any>) => {
      state.register.status = Status.ERROR;
      state.register.reason = action.payload;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginError,
  registerRequest,
  registerSuccess,
  registerError,
} = authSlice.actions;
export default authSlice.reducer;
