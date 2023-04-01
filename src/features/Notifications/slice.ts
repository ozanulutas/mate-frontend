import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Error } from "src/api/api";
import {
  GetNotificationCountRequestPayload,
  NotificationsState,
} from "./Notifications.d";
import { Status } from "src/constants";

const initialState: NotificationsState = {
  notifications: {
    status: Status.INIT,
    data: [],
    reason: {},
  },
  unviewedNotificationCount: 0,
};

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    getNotificationsRequest: (state) => {
      state.notifications.status = Status.LOADING;
      state.notifications.reason = initialState.notifications.reason;
    },
    getNotificationsSuccess: (
      state,
      action: PayloadAction<NotificationsState["notifications"]["data"]>
    ) => {
      state.notifications.status = Status.LOADED;
      state.notifications.data = action.payload;
    },
    getNotificationsError: (state, action: PayloadAction<Error>) => {
      state.notifications.status = Status.ERROR;
      state.notifications.reason = action.payload;
    },

    increaseUnviewedNotificationCount: (
      state,
      action: PayloadAction<number>
    ) => {
      state.unviewedNotificationCount += action.payload;
    },
    setUnviewedNotificationCount: (state, action: PayloadAction<number>) => {
      state.unviewedNotificationCount = action.payload;
    },
  },
});

export const getNotificationCount =
  createAction<GetNotificationCountRequestPayload>(
    "notifications/getNotificationCount"
  );

export const {
  getNotificationsRequest,
  getNotificationsError,
  getNotificationsSuccess,

  increaseUnviewedNotificationCount,
  setUnviewedNotificationCount,
} = notificationsSlice.actions;
export default notificationsSlice.reducer;
