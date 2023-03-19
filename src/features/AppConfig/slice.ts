import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppConfigState, AppConfigSuccessPayload } from "./AppConfig.d";

const initialState: AppConfigState = {
  user: {} as AppConfigState["user"],
};

export const appConfigSlice = createSlice({
  name: "appConfig",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AppConfigState["user"]>) => {
      state.user = action.payload;
    },
  },
});

export const appConfigRequest = createAction("appConfig/appConfigRequest");
export const appConfigSuccess = createAction<AppConfigSuccessPayload>(
  "appConfig/appConfigSuccess"
);

export const { setUser } = appConfigSlice.actions;
export default appConfigSlice.reducer;
