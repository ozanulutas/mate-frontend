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

export const selectSelectedLocation = createSelector(
  selectLocationSettings,
  (locationSettings) => locationSettings.selectedLocation
);

export const selectEditedLocation = createSelector(
  selectLocationSettings,
  (locationSettings) => locationSettings.editedLocation
);

export const selectSelectedLocationObj = createSelector(
  selectLocations,
  selectSelectedLocation,
  (locations, selectedLocation) =>
    locations.find((location) => location.id === selectedLocation.id)
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
