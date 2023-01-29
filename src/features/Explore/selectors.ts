import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "src/redux/store";

export const selectExplore = (state: RootState) => state.explore;

export const selectCategories = createSelector(
  selectExplore,
  (explore) => explore.categories.data
);

export const selectUsers = createSelector(
  selectExplore,
  (explore) => explore.users.data
);

export const selectView = createSelector(
  selectExplore,
  (explore) => explore.view
);
