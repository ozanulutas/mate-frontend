import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ModalState } from "./Modal.d";
import { ModalKey } from "./constants";

const initialState: ModalState = {
  keys: [],
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<keyof typeof ModalKey>) => {
      const modalKey = action.payload;
      const isModalOpen = state.keys.some((key) => key === modalKey);

      state.keys = isModalOpen
        ? state.keys.filter((key) => key !== modalKey)
        : [...state.keys, modalKey];
    },
    resetModalKeys: (state) => {
      state.keys = initialState.keys;
    },
  },
});

export const positiveButtonClick = createAction("modal/positiveButtonClick");
export const negativeButtonClick = createAction("modal/negativeButtonClick");

export const { toggleModal, resetModalKeys } = modalSlice.actions;
export default modalSlice.reducer;
