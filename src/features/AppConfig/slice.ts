import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Error } from "src/api/api.d";
import { AppConfigState } from "./AppConfig.d";
import { Status } from "src/constants";

const initialState: AppConfigState = {
  status: Status.INIT,
  data: {} as AppConfigState["data"],
  reason: {},
};

export const appConfigSlice = createSlice({
  name: "appConfig",
  initialState,
  reducers: {
    appConfigRequest: (state) => {
      state.status = Status.LOADING;
      state.reason = initialState.reason;
    },
    appConfigSuccess: (
      state,
      action: PayloadAction<AppConfigState["data"]>
    ) => {
      state.status = Status.LOADED;
      state.data = action.payload;
    },
    appConfigError: (state, action: PayloadAction<Error>) => {
      state.status = Status.ERROR;
      state.reason = action.payload;
    },
  },
});

export const { appConfigRequest, appConfigSuccess, appConfigError } =
  appConfigSlice.actions;
export default appConfigSlice.reducer;
