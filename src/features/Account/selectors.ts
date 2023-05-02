import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "src/redux/store";

export const selectAccount = (state: RootState) => state.account;
export const selectLocationSettings = (state: RootState) =>
  state.account.locationSettings;
export const selectCategorySettings = (state: RootState) =>
  state.account.categorySettings;
export const selectSecuritySettings = (state: RootState) =>
  state.account.securitySettings;

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

export const selectSelectedLocation = createSelector(
  selectLocations,
  selectSelectedLocationId,
  (locations, selectedLocationId) =>
    locations.find((location) => location.id === selectedLocationId)
);

export const selectUserCategories = createSelector(
  selectCategorySettings,
  (categorySettings) => categorySettings.categories.data
);

export const selectAddCategoriesStatus = createSelector(
  selectCategorySettings,
  (categorySettings) => categorySettings.addCategories.status
);

export const selectChangePasswordStatus = createSelector(
  selectSecuritySettings,
  (securitySettings) => securitySettings.changePassword.status
);
