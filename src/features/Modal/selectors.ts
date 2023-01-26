import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "src/redux/store";

export const selectModal = (state: RootState) => state.modal;

export const selectModalKeys = createSelector(
  selectModal,
  (modal) => modal.keys
);
