import { useSelector } from "react-redux";

import { Path } from "src/router/path";

import { Badge, IconButton } from "@mui/material";
import { Message as MessageIcon } from "@mui/icons-material";
import Link from "src/components/Link";
import { selectUnreadChatCount } from "src/features/Chat/selectors";

function MessagesButton() {
  const unreadChatCount = useSelector(selectUnreadChatCount);

  return (
    <IconButton
      component={Link}
      to={Path.CHATS}
      size="large"
      aria-label={`show ${unreadChatCount} new messages`}
      color="inherit"
    >
      <Badge badgeContent={unreadChatCount} color="error">
        <MessageIcon />
      </Badge>
    </IconButton>
  );
}

export default MessagesButton;
