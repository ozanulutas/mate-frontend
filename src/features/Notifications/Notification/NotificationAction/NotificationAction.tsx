import { Notification } from "../../Notifications.d";
import { NotificationType } from "../../constants";

import { Check as CheckIcon, Close as CloseIcon } from "@mui/icons-material";
import { ListItemSecondaryAction, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  removeFriendshipRequest,
  updateFriendshipRequest,
} from "src/features/Profile/slice";
import { FriendshipStatus } from "src/constants";

type NotificationActionProps = {
  notificationTypeId: Notification["notificationTypeId"];
  actorId: Notification["actor"]["id"];
};

function NotificationAction({
  notificationTypeId,
  actorId,
}: NotificationActionProps) {
  const dispatch = useDispatch();

  const handleAcceptFriendship = () => {
    dispatch(
      updateFriendshipRequest({
        friendshipStatusId: FriendshipStatus.ACCEPTED,
        receiverId: actorId,
      })
    );
  };

  const handleRejectFriendship = () => {
    dispatch(removeFriendshipRequest(actorId));
  };

  if (notificationTypeId === NotificationType.FRIENDSHIP_REQUESTED) {
    return (
      <ListItemSecondaryAction
        sx={{
          position: "relative",
          top: "unset",
          right: "unset",
          transform: "unset",
          ml: "16px",
        }}
      >
        <IconButton aria-label="reject" onClick={handleRejectFriendship}>
          <CloseIcon />
        </IconButton>
        <IconButton aria-label="accept" onClick={handleAcceptFriendship}>
          <CheckIcon />
        </IconButton>
      </ListItemSecondaryAction>
    );
  }

  return null;
}

export default NotificationAction;
