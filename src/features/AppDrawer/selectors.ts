import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "src/redux/store";

export const selectDrawer = (state: RootState) => state.drawer;

export const selectDrawerKey = createSelector(
  selectDrawer,
  (drawer) => drawer.key
);
