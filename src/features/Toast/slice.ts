import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ToastState } from "./Toast.d";
import { ToastType } from "./constants";

const initialState: ToastState = {
  isOpen: false,
  text: "",
  type: ToastType.SUCCESS,
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    openToast: (
      state,
      action: PayloadAction<Pick<ToastState, "text" | "type">>
    ) => {
      return {
        ...state,
        ...action.payload,
        isOpen: true,
      };
    },
    closeToast: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openToast, closeToast } = toastSlice.actions;
export default toastSlice.reducer;
