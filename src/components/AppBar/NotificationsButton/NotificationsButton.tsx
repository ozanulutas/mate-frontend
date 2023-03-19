import { useSelector } from "react-redux";

import { selectUnviewedNotificationsCount } from "src/features/Notifications/selectors";
import { Path } from "src/router/path";

import { Notifications as NotificationsIcon } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import Link from "src/components/Link";

function NotificationsButton() {
  const unviewedNotificationsCount = useSelector(
    selectUnviewedNotificationsCount
  );

  return (
    <IconButton
      component={Link}
      to={Path.NOTIFICATIONS}
      size="large"
      aria-label={`show ${unviewedNotificationsCount} new notifications`}
      color="inherit"
    >
      <Badge badgeContent={unviewedNotificationsCount} color="error">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
}

export default NotificationsButton;
