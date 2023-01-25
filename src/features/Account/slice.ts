import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AccountState } from "./Account.d";

const initialState: AccountState = {
  locationSettings: {
    marker: null,
  },
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setMarker: (
      state,
      action: PayloadAction<AccountState["locationSettings"]["marker"]>
    ) => {
      state.locationSettings.marker = action.payload;
    },
  },
});

export const { setMarker } = accountSlice.actions;
export default accountSlice.reducer;
