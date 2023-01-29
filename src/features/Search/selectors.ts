import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "src/redux/store";

export const selectSearch = (state: RootState) => state.search;

export const selectCategorySearchStatus = createSelector(
  selectSearch,
  (search) => search.categories.status
);

export const selectCategorySearchData = createSelector(
  selectSearch,
  (search) => search.categories.data
);

export const selectUsers = createSelector(
  selectSearch,
  (search) => search.users.data
);
