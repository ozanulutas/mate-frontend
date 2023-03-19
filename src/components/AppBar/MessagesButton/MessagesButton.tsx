import { useSelector } from "react-redux";

import { Path } from "src/router/path";

import { Badge, IconButton } from "@mui/material";
import { Message as MessageIcon } from "@mui/icons-material";
import Link from "src/components/Link";
import { selectReceivedMessagesCount } from "src/features/AppConfig/selectors";

function MessagesButton() {
  const receivedMessagesCount = useSelector(selectReceivedMessagesCount);

  return (
    <IconButton
      component={Link}
      to={Path.CHATS}
      size="large"
      aria-label={`show ${receivedMessagesCount} new messages`}
      color="inherit"
    >
      <Badge badgeContent={receivedMessagesCount} color="error">
        <MessageIcon />
      </Badge>
    </IconButton>
  );
}

export default MessagesButton;
