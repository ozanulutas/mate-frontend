import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Error } from "src/api/api.d";
import {
  Category,
  GetUsersRequestPayload,
  SearchCategoryRequestPayload,
  ExploreState,
} from "./Explore.d";
import { Status } from "src/constants";

const initialState: ExploreState = {
  categories: {
    status: Status.INIT,
    data: [],
    reason: {},
  },
  users: {
    status: Status.INIT,
    data: [],
    reason: {},
  },
};

export const searchSlice = createSlice({
  name: "explore",
  initialState,
  reducers: {
    // @TODO: refactor searchCategory -> categories
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
    searchCategoryError: (state, action: PayloadAction<Error>) => {
      state.categories.status = Status.ERROR;
      state.categories.reason = action.payload;
    },
    getUsersRequest: (state, action: PayloadAction<GetUsersRequestPayload>) => {
      state.users.status = Status.LOADING;
      state.users.reason = initialState.users.reason;
    },
    getUsersSuccess: (state, action: PayloadAction<any>) => {
      state.users.status = Status.LOADED;
      state.users.data = action.payload;
    },
    getUsersError: (state, action: PayloadAction<Error>) => {
      state.users.status = Status.ERROR;
      state.users.reason = action.payload;
    },
  },
});

export const {
  searchCategoryRequest,
  searchCategorySuccess,
  searchCategoryError,
  getUsersError,
  getUsersRequest,
  getUsersSuccess,
} = searchSlice.actions;
export default searchSlice.reducer;
