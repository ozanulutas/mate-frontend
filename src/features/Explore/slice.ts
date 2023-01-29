import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Error } from "src/api/api.d";
import {
  Category,
  GetUsersRequestPayload,
  GetCategoriesRequestPayload,
  ExploreState,
} from "./Explore.d";
import { Status } from "src/constants";
import { View } from "./constants";

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
  view: View.MAP,
};

export const searchSlice = createSlice({
  name: "explore",
  initialState,
  reducers: {
    getCategoriesRequest: (
      state,
      action: PayloadAction<GetCategoriesRequestPayload>
    ) => {
      state.categories.status = Status.LOADING;
      state.categories.reason = initialState.categories.reason;
    },
    getCategoriesSuccess: (state, action: PayloadAction<Category[]>) => {
      state.categories.status = Status.LOADED;
      state.categories.data = action.payload;
    },
    getCategoriesError: (state, action: PayloadAction<Error>) => {
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

    setView: (state, action: PayloadAction<keyof typeof View>) => {
      state.view = action.payload;
    },
  },
});

export const {
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesError,

  getUsersError,
  getUsersRequest,
  getUsersSuccess,

  setView,
} = searchSlice.actions;
export default searchSlice.reducer;
