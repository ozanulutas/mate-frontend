import { useSelector } from "react-redux";

import { selectReceivedNotificationsCount } from "src/features/AppConfig/selectors";
import { Path } from "src/router/path";

import { Notifications as NotificationsIcon } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";

import Link from "src/components/Link";

function NotificationsButton() {
  const receivedNotificationsCount = useSelector(
    selectReceivedNotificationsCount
  );

  return (
    <IconButton
      component={Link}
      to={Path.NOTIFICATIONS}
      size="large"
      aria-label={`show ${receivedNotificationsCount} new notifications`}
      color="inherit"
    >
      <Badge badgeContent={receivedNotificationsCount} color="error">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
}

export default NotificationsButton;
