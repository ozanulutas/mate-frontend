import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Status } from "src/constants";
import {
  AccountState,
  AddLocationRequestPayload,
  RemoveLocationRequestPayload,
  UpdateLocationRequestPayload,
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
    selectedLocationId:
      {} as AccountState["locationSettings"]["selectedLocationId"],
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
      action: PayloadAction<Pick<Location, "id">>
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

    setSelectedLocationId: (
      state,
      action: PayloadAction<
        AccountState["locationSettings"]["selectedLocationId"]
      >
    ) => {
      state.locationSettings.selectedLocationId = action.payload;
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

  setSelectedLocationId,
} = accountSlice.actions;
export default accountSlice.reducer;
