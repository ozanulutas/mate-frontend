import { Path } from "src/router/path";
import { useSelector } from "react-redux";

import { selectFriendshipRequestCount } from "src/features/Friendship/selectors";

import { PeopleAlt as PeopleAltIcon } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import Link from "src/components/Link";

function FriendshipRequestsButton() {
  const friendshipRequestCount = useSelector(selectFriendshipRequestCount);

  return (
    <IconButton
      component={Link}
      to={Path.FRIENDSHIP_REQUESTS}
      size="large"
      aria-label={`show ${friendshipRequestCount} new friendship requests`}
      color="inherit"
    >
      <Badge badgeContent={friendshipRequestCount} color="error">
        <PeopleAltIcon />
      </Badge>
    </IconButton>
  );
}

export default FriendshipRequestsButton;
