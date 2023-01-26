import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Error } from "src/api/api.d";
import { Status } from "src/constants";
import { AccountState, AddLocationRequestPayload } from "./Account.d";

const initialState: AccountState = {
  locationSettings: {
    addLocation: {
      status: Status.INIT,
      reason: {},
    },
    locations: {
      data: [],
      reason: {},
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
      state.locationSettings.addLocation.reason =
        initialState.locationSettings.addLocation.reason;
    },
    addLocationSuccess: (state) => {
      state.locationSettings.addLocation.status = Status.LOADED;
    },
    addLocationError: (state, action: PayloadAction<Error>) => {
      state.locationSettings.addLocation.status = Status.ERROR;
      state.locationSettings.addLocation.reason = action.payload;
    },
    getLocationsRequest: (state) => {
      state.locationSettings.locations.status = Status.LOADING;
      state.locationSettings.locations.reason =
        initialState.locationSettings.locations.reason;
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
    getLocationsError: (state, action: PayloadAction<Error>) => {
      state.locationSettings.locations.status = Status.ERROR;
      state.locationSettings.locations.reason = action.payload;
    },
  },
});

export const {
  addLocationRequest,
  addLocationError,
  addLocationSuccess,
  getLocationsError,
  getLocationsRequest,
  getLocationsSuccess,
} = accountSlice.actions;
export default accountSlice.reducer;
