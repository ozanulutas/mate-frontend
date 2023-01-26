import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "src/redux/store";

export const selectAccount = (state: RootState) => state.account;
export const selectLocationSettings = (state: RootState) =>
  state.account.locationSettings;
