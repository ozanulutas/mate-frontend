import { useSelector } from "react-redux";

import { selectNotifications } from "./selectors";

import Notification from "./Notification";

function Notifications() {
  const notifications = useSelector(selectNotifications);

  return (
    <>
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
    </>
  );
}

export default Notifications;
