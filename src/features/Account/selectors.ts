import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "src/redux/store";

export const selectAccount = (state: RootState) => state.account;
export const selectLocationSettings = (state: RootState) =>
  state.account.locationSettings;
export const selectCategorySettings = (state: RootState) =>
  state.account.categorySettings;

export const selectLocations = createSelector(
  selectLocationSettings,
  (locationSettings) => locationSettings.locations.data
);

export const selectSelectedLocationId = createSelector(
  selectLocationSettings,
  (locationSettings) => locationSettings.selectedLocationId
);

export const selectEditedLocation = createSelector(
  selectLocationSettings,
  (locationSettings) => locationSettings.editedLocation
);

export const selectUserCategories = createSelector(
  selectCategorySettings,
  (cateforySettings) => cateforySettings.categories.data
);

export const selectAddCategoriesStatus = createSelector(
  selectCategorySettings,
  (cateforySettings) => cateforySettings.addCategories.status
);
