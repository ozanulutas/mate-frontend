import { Notification as INotification } from "../Notifications.d";
import { NotificationText, NotificationType } from "../constants";
import { strToDate } from "src/utils";

import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import NotificationAction from "./NotificationAction";

export type NotificationProps = INotification;

function Notification({
  id,
  actor,
  entityId,
  notificationTypeId,
  createdAt,
}: NotificationProps) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>{actor.username[0]}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={`${actor.username} ${NotificationText[notificationTypeId]}`}
        secondary={strToDate(createdAt)}
      />
      <NotificationAction
        notificationTypeId={notificationTypeId}
        actorId={actor.id}
      />
    </ListItem>
  );
}

export default Notification;
