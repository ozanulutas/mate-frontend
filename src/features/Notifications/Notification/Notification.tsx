import { Notification as INotification } from "../Notifications.d";
import { NotificationText } from "../constants";
import { strToDate } from "src/utils";

import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";

export type NotificationProps = INotification;

function Notification({
  id,
  actor,
  entityId,
  notificationTypeId,
  createdAt,
}: NotificationProps) {
  return (
    <ListItem divider>
      <ListItemAvatar>
        <Avatar>{actor.username[0]}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={`${actor.username} ${NotificationText[notificationTypeId]}`}
        secondary={strToDate(createdAt)}
      />
    </ListItem>
  );
}

export default Notification;
