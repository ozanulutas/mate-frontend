import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  Category,
  SearchCategoryRequestPayload,
  SearchState,
} from "./Search.d";
import { Status } from "src/constants";

const initialState: SearchState = {
  categories: {
    status: Status.INIT,
    data: [],
    reason: {},
  },
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchCategoryRequest: (
      state,
      action: PayloadAction<SearchCategoryRequestPayload>
    ) => {
      state.categories.status = Status.LOADING;
      state.categories.reason = initialState.categories.reason;
    },
    searchCategorySuccess: (state, action: PayloadAction<Category[]>) => {
      state.categories.status = Status.LOADED;
      state.categories.data = action.payload;
    },
    // @TODO: type
    searchCategoryError: (state, action: PayloadAction<any>) => {
      state.categories.status = Status.ERROR;
      state.categories.reason = action.payload;
    },
  },
});

export const {
  searchCategoryRequest,
  searchCategorySuccess,
  searchCategoryError,
} = searchSlice.actions;
export default searchSlice.reducer;
