import { useDispatch } from "react-redux";

import { Path } from "src/router/path";
import { toggleDrawer } from "src/components/Drawer/slice";
import { DrawerKey } from "src/components/Drawer/constants";

import {
  AppBar as MuiAppBar,
  Badge,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
  Explore as ExploreIcon,
  Feed as FeedIcon,
} from "@mui/icons-material";
import Link from "src/components/Link";

export default function AppBar() {
  const dispatch = useDispatch();

  return (
    <MuiAppBar position="sticky">
      <Container>
        <Toolbar disableGutters sx={{ px: 0, justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            MATE
          </Typography>
          <Box
            sx={{
              display: "flex",
              flex: { xs: 1, sm: "unset" },
              justifyContent: { xs: "center", sm: "unset" },
            }}
          >
            <IconButton
              component={Link}
              to={Path.EXPLORE}
              size="large"
              aria-label="explore"
              color="inherit"
            >
              <ExploreIcon />
            </IconButton>
            <IconButton
              component={Link}
              to={Path.FEED}
              size="large"
              aria-label="feed"
              color="inherit"
            >
              <FeedIcon />
            </IconButton>
            <IconButton
              component={Link}
              to={Path.MESSAGES}
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              color="inherit"
              onClick={() => dispatch(toggleDrawer(DrawerKey.ACCOUNT))}
            >
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}
