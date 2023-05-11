import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Status } from "src/constants";
import {
  AccountState,
  AddCategoriesRequestPayload,
  AddLocationRequestPayload,
  ChangePasswordRequestPayload,
  RemoveCategoryRequestPayload,
  RemoveLocationRequestPayload,
  UpdateLocationRequestPayload,
  UpdateProfileRequestPayload,
  UpdateSelectedLocationRequestPayload,
} from "./Account.d";
import { Location } from "src/types";

const initialState: AccountState = {
  locationSettings: {
    addLocation: {
      status: Status.INIT,
    },
    updateLocation: {
      status: Status.INIT,
    },
    updateSelectedLocation: {
      status: Status.INIT,
    },
    removeLocation: {
      status: Status.INIT,
    },
    locations: {
      data: [],
      status: Status.INIT,
    },
    editedLocation: {} as AccountState["locationSettings"]["editedLocation"],
    selectedLocation:
      null as unknown as AccountState["locationSettings"]["selectedLocation"],
  },
  categorySettings: {
    categories: {
      data: [],
      status: Status.INIT,
    },
    addCategories: {
      status: Status.INIT,
    },
    removeCategory: {
      status: Status.INIT,
    },
  },
  securitySettings: {
    changePassword: {
      status: Status.INIT,
    },
  },
  generalSettings: {
    updateProfile: {
      status: Status.INIT,
    },
    genders: {
      data: [],
      status: Status.INIT,
    },
  },
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    addLocationRequest: (
      state,
      action: PayloadAction<AddLocationRequestPayload>
    ) => {
      state.locationSettings.addLocation.status = Status.LOADING;
    },
    addLocationSuccess: (state) => {
      state.locationSettings.addLocation.status = Status.LOADED;
    },
    addLocationError: (state) => {
      state.locationSettings.addLocation.status = Status.ERROR;
    },

    updateLocationRequest: (
      state,
      action: PayloadAction<UpdateLocationRequestPayload>
    ) => {
      state.locationSettings.updateLocation.status = Status.LOADING;
    },
    updateLocationSuccess: (state) => {
      state.locationSettings.updateLocation.status = Status.LOADED;
    },
    updateLocationError: (state) => {
      state.locationSettings.updateLocation.status = Status.ERROR;
    },

    updateSelectedLocationRequest: (
      state,
      action: PayloadAction<UpdateSelectedLocationRequestPayload>
    ) => {
      state.locationSettings.updateSelectedLocation.status = Status.LOADING;
    },
    updateSelectedLocationSuccess: (
      state,
      action: PayloadAction<Pick<Location, "id" | "name">>
    ) => {
      state.locationSettings.updateSelectedLocation.status = Status.LOADED;
    },
    updateSelectedLocationError: (state) => {
      state.locationSettings.updateSelectedLocation.status = Status.ERROR;
    },

    removeLocationRequest: (
      state,
      action: PayloadAction<RemoveLocationRequestPayload>
    ) => {
      state.locationSettings.removeLocation.status = Status.LOADING;
    },
    removeLocationSuccess: (state) => {
      state.locationSettings.removeLocation.status = Status.LOADED;
    },
    removeLocationError: (state) => {
      state.locationSettings.removeLocation.status = Status.ERROR;
    },

    getLocationsRequest: (state) => {
      state.locationSettings.locations.status = Status.LOADING;
    },
    getLocationsSuccess: (
      state,
      action: PayloadAction<
        AccountState["locationSettings"]["locations"]["data"]
      >
    ) => {
      state.locationSettings.locations.status = Status.LOADED;
      state.locationSettings.locations.data = action.payload;
    },
    getLocationsError: (state) => {
      state.locationSettings.locations.status = Status.ERROR;
    },

    setEditedLocation: (
      state,
      action: PayloadAction<AccountState["locationSettings"]["editedLocation"]>
    ) => {
      state.locationSettings.editedLocation = action.payload;
    },
    resetEditedLocation: (state) => {
      state.locationSettings.editedLocation =
        initialState.locationSettings.editedLocation;
    },

    setSelectedLocation: (
      state,
      action: PayloadAction<
        AccountState["locationSettings"]["selectedLocation"]
      >
    ) => {
      state.locationSettings.selectedLocation = action.payload;
    },

    getCategoriesRequest: (state) => {
      state.categorySettings.categories.status = Status.LOADING;
    },
    getCategoriesSuccess: (
      state,
      action: PayloadAction<
        AccountState["categorySettings"]["categories"]["data"]
      >
    ) => {
      state.categorySettings.categories.status = Status.LOADED;
      state.categorySettings.categories.data = action.payload;
    },
    getCategoriesError: (state) => {
      state.categorySettings.categories.status = Status.ERROR;
    },

    addCategoriesRequest: (
      state,
      action: PayloadAction<AddCategoriesRequestPayload>
    ) => {
      state.categorySettings.addCategories.status = Status.LOADING;
    },
    addCategoriesSuccess: (state) => {
      state.categorySettings.addCategories.status = Status.LOADED;
    },
    addCategoriesError: (state) => {
      state.categorySettings.addCategories.status = Status.ERROR;
    },

    removeCategoryRequest: (
      state,
      action: PayloadAction<RemoveCategoryRequestPayload>
    ) => {
      state.categorySettings.removeCategory.status = Status.LOADING;
    },
    removeCategorySuccess: (state) => {
      state.categorySettings.removeCategory.status = Status.LOADED;
    },
    removeCategoryError: (state) => {
      state.categorySettings.removeCategory.status = Status.ERROR;
    },

    changePasswordRequest: (
      state,
      action: PayloadAction<ChangePasswordRequestPayload>
    ) => {
      state.securitySettings.changePassword.status = Status.LOADING;
    },
    changePasswordSuccess: (state) => {
      state.securitySettings.changePassword.status = Status.LOADED;
    },
    changePasswordError: (state) => {
      state.securitySettings.changePassword.status = Status.ERROR;
    },

    updateProfileRequest: (
      state,
      action: PayloadAction<UpdateProfileRequestPayload>
    ) => {
      state.generalSettings.updateProfile.status = Status.LOADING;
    },
    updateProfileSuccess: (state) => {
      state.generalSettings.updateProfile.status = Status.LOADED;
    },
    updateProfileError: (state) => {
      state.generalSettings.updateProfile.status = Status.ERROR;
    },

    getGendersRequest: (state) => {
      state.generalSettings.genders.status = Status.LOADING;
    },
    getGendersSuccess: (
      state,
      action: PayloadAction<AccountState["generalSettings"]["genders"]["data"]>
    ) => {
      state.generalSettings.genders.status = Status.LOADED;
      state.generalSettings.genders.data = action.payload;
    },
    getGendersError: (state) => {
      state.generalSettings.genders.status = Status.ERROR;
    },
  },
});

export const {
  addLocationRequest,
  addLocationError,
  addLocationSuccess,

  updateLocationRequest,
  updateLocationError,
  updateLocationSuccess,

  updateSelectedLocationRequest,
  updateSelectedLocationError,
  updateSelectedLocationSuccess,

  removeLocationRequest,
  removeLocationError,
  removeLocationSuccess,

  getLocationsError,
  getLocationsRequest,
  getLocationsSuccess,

  setEditedLocation,
  resetEditedLocation,

  setSelectedLocation,

  getCategoriesError,
  getCategoriesRequest,
  getCategoriesSuccess,

  addCategoriesRequest,
  addCategoriesError,
  addCategoriesSuccess,

  removeCategoryRequest,
  removeCategoryError,
  removeCategorySuccess,

  changePasswordRequest,
  changePasswordError,
  changePasswordSuccess,

  updateProfileRequest,
  updateProfileError,
  updateProfileSuccess,

  getGendersError,
  getGendersRequest,
  getGendersSuccess,
} = accountSlice.actions;
export default accountSlice.reducer;
