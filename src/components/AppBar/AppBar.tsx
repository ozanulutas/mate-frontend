import { useDispatch } from "react-redux";

import { Path } from "src/router/path";
import { toggleDrawer } from "src/components/Drawer/slice";
import { DrawerKey } from "src/components/Drawer/constants";

import {
  AppBar as MuiAppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  AccountCircle as AccountCircleIcon,
  Explore as ExploreIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import Link from "src/components/Link";
import NotificationsButton from "./NotificationsButton";
import MessagesButton from "./MessagesButton";
import FriendshipRequestsButton from "./FriendshipRequestsButton/FriendshipRequestsButton";

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
              <SearchIcon />
            </IconButton>
            <IconButton
              component={Link}
              to={Path.FEED}
              size="large"
              aria-label="feed"
              color="inherit"
            >
              <ExploreIcon />
            </IconButton>
            <MessagesButton />
            <FriendshipRequestsButton />
            <NotificationsButton />
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
