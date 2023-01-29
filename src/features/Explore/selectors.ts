import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "src/redux/store";

export const selectExplore = (state: RootState) => state.explore;

export const selectCategorySearchStatus = createSelector(
  selectExplore,
  (search) => search.categories.status
);

export const selectCategorySearchData = createSelector(
  selectExplore,
  (search) => search.categories.data
);

export const selectUsers = createSelector(
  selectExplore,
  (search) => search.users.data
);
