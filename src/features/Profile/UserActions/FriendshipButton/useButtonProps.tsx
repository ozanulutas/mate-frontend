import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FriendshipRemoveAction, FriendshipStatus } from "src/constants";
import { selectFriendshipInfo, selectUserProfileId } from "../../selectors";
import { selectUserId } from "src/features/AppConfig/selectors";
import {
  removeFriendshipRequest,
  requestFriendshipRequest,
} from "src/features/Friendship/slice";
import { Path } from "src/router/path";

import {
  PersonAddAlt1 as PersonAddIcon,
  PersonRemove as PersonRemoveIcon,
  PersonOff as PersonOffIcon,
  Launch as LaunchIcon,
} from "@mui/icons-material";

const generatePropsObject = (
  icon: React.ReactElement,
  text: string,
  onClick: () => void
) => ({ icon, text, onClick });

function useButtonProps() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const friendshipInfo = useSelector(selectFriendshipInfo);
  const userProfileId = useSelector(selectUserProfileId);
  const clientId = useSelector(selectUserId);

  const { friendshipStatusId, senderId } = friendshipInfo ?? {};
  const isRequestedByMe = senderId === clientId;

  switch (friendshipStatusId) {
    case FriendshipStatus.ACCEPTED:
      return generatePropsObject(<PersonRemoveIcon />, "Remove Friend", () =>
        dispatch(
          removeFriendshipRequest({
            receiverId: userProfileId,
            removeAction: FriendshipRemoveAction.REMOVE,
          })
        )
      );
    case FriendshipStatus.REQUESTED:
      return isRequestedByMe
        ? generatePropsObject(<PersonOffIcon />, "Cancel Request", () =>
            dispatch(
              removeFriendshipRequest({
                receiverId: userProfileId,
                removeAction: FriendshipRemoveAction.CANCEL,
              })
            )
          )
        : generatePropsObject(
            <LaunchIcon />,
            "You have a waiting request",
            () => navigate(Path.FRIENDSHIP_REQUESTS)
          );
    default:
      return generatePropsObject(<PersonAddIcon />, "Add Friend", () =>
        dispatch(requestFriendshipRequest())
      );
  }
}

export default useButtonProps;
