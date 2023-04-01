import { useDispatch, useSelector } from "react-redux";

import { ProfileState } from "../../Profile.d";
import { FriendshipStatus } from "src/constants";
import {
  selectFriendshipStatusWithMe,
  selectUserProfileId,
} from "../../selectors";
import {
  removeFriendshipRequest,
  requestFriendshipRequest,
} from "src/features/Friendship/slice";

import {
  PersonAddAlt1 as PersonAddIcon,
  PersonRemove as PersonRemoveIcon,
  PersonOff as PersonOffIcon,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

type FriendshipIconProps = {
  friendshipStatusWithMe: ProfileState["user"]["data"]["friendshipStatusWithMe"];
};

function FriendshipButton() {
  const dispatch = useDispatch();
  const friendshipStatusWithMe = useSelector(selectFriendshipStatusWithMe);
  const userProfileId = useSelector(selectUserProfileId);

  const handleFriendship = () => {
    if (
      friendshipStatusWithMe === FriendshipStatus.ACCEPTED ||
      friendshipStatusWithMe === FriendshipStatus.REQUESTED
    ) {
      dispatch(removeFriendshipRequest(userProfileId));
      return;
    }

    dispatch(requestFriendshipRequest());
  };

  return (
    <IconButton size="small" onClick={handleFriendship}>
      <FriendshipIcon friendshipStatusWithMe={friendshipStatusWithMe} />
    </IconButton>
  );
}

function FriendshipIcon({ friendshipStatusWithMe }: FriendshipIconProps) {
  if (friendshipStatusWithMe === FriendshipStatus.ACCEPTED) {
    return <PersonRemoveIcon />;
  }

  if (friendshipStatusWithMe === FriendshipStatus.REQUESTED) {
    return <PersonOffIcon />;
  }

  return <PersonAddIcon />;
}

export default FriendshipButton;
