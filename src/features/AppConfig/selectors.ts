import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "src/redux/store";

export const selectAppConfig = (state: RootState) => state.appConfig;

export const selectUser = createSelector(
  selectAppConfig,
  (appConfig) => appConfig.data.user
);

export const selectUserId = createSelector(selectUser, (user) => user?.id);
