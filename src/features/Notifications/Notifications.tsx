import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getNotificationsRequest } from "./slice";
import { selectNotifications } from "./selectors";

import { List } from "@mui/material";
import Notification from "./Notification";

function Notifications() {
  const dispatch = useDispatch();
  const notifications = useSelector(selectNotifications);

  useEffect(() => {
    dispatch(getNotificationsRequest());
  }, [dispatch]);

  return (
    <List>
      {notifications.map(
        ({ id, actor, entityId, notificationTypeId, createdAt }) => (
          <Notification
            key={id}
            id={id}
            actor={actor}
            entityId={entityId}
            notificationTypeId={notificationTypeId}
            createdAt={createdAt}
          />
        )
      )}
    </List>
  );
}

export default Notifications;
