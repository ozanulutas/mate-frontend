import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DrawerState } from "./Drawer.d";

const initialState: DrawerState = {
  key: "",
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    toggleDrawer: (state, action: PayloadAction<DrawerState["key"]>) => {
      state.key = state.key ? initialState.key : action.payload;
    },
    openDrawer: (state, action: PayloadAction<DrawerState["key"]>) => {
      state.key = action.payload;
    },
    closeDrawer: (state) => {
      state.key = initialState.key;
    },
  },
});

export const { toggleDrawer, closeDrawer, openDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;
