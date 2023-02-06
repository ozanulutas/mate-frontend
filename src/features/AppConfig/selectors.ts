import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "src/redux/store";

export const selectAuth = (state: RootState) => state.auth;

export const selectLoginStatus = createSelector(
  selectAuth,
  (auth) => auth.login.status
);

export const selectRegisterStatus = createSelector(
  selectAuth,
  (auth) => auth.register.status
);
