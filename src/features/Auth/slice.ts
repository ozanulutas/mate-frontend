import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Status } from "src/constants";
import { AuthState, LoginRequestPayload } from "./Auth";

const initialState: AuthState = {
  login: {
    status: Status.INIT,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state, action: PayloadAction<LoginRequestPayload>) => {
      state.login.status = Status.LOADING;
    },
    loginSuccess: (state) => {
      state.login.status = Status.LOADED;
    },
    loginError: (state) => {
      state.login.status = Status.ERROR;
    },
  },
});

export const { loginRequest, loginSuccess, loginError } = authSlice.actions;
export default authSlice.reducer;
