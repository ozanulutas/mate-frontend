import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "src/redux/store";

export const selectNotificationsState = (state: RootState) =>
  state.notifications;

export const selectNotifications = createSelector(
  selectNotificationsState,
  (notifications) => notifications.notifications.data
);

export const selectUnviewedNotificationsCount = createSelector(
  selectNotificationsState,
  (notifications) => notifications.unviewedNotificationCount
);
