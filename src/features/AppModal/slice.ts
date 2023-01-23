import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ModalState } from "./AppModal.d";
import { Modal } from "./constants";

const initialState: ModalState = {
  keys: [],
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<keyof typeof Modal>) => {
      const modalKey = action.payload;
      const isModalOpen = state.keys.some((key) => key === modalKey);

      state.keys = isModalOpen
        ? state.keys.filter((key) => key === modalKey)
        : [...state.keys, modalKey];
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
