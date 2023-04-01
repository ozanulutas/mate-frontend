import { useDispatch } from "react-redux";

import { updateFriendshipRequest, removeFriendshipRequest } from "../../slice";
import { FriendshipStatus } from "src/constants";
import { strToDate } from "src/utils";
import { Friendship } from "../../Friendship";

import { Check as CheckIcon, Close as CloseIcon } from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

type FriendshipRequestProps = Friendship;

function FriendshipRequest({ createdAt, id, sender }: FriendshipRequestProps) {
  const dispatch = useDispatch();

  const handleAcceptFriendship = () => {
    dispatch(
      updateFriendshipRequest({
        friendshipStatusId: FriendshipStatus.ACCEPTED,
        receiverId: sender.id,
      })
    );
  };

  const handleRejectFriendship = () => {
    dispatch(removeFriendshipRequest(sender.id));
  };

  return (
    <ListItem
      divider
      secondaryAction={
        <>
          <IconButton aria-label="reject" onClick={handleRejectFriendship}>
            <CloseIcon />
          </IconButton>
          <IconButton aria-label="accept" onClick={handleAcceptFriendship}>
            <CheckIcon />
          </IconButton>
        </>
      }
      sx={{
        pr: 13,
      }}
    >
      <ListItemAvatar>
        <Avatar>{sender.username[0]}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={`${sender.username} has requested a friendship.`}
        secondary={strToDate(createdAt)}
      />
    </ListItem>
  );
}

export default FriendshipRequest;
