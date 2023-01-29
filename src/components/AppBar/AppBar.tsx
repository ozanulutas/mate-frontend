import { useDispatch } from "react-redux";

import { Path } from "src/router/path";
import { toggleDrawer } from "src/features/Drawer/slice";
import { DrawerKey } from "src/features/Drawer/constants";

import {
  AppBar as MuiAppBar,
  Badge,
  Box,
  Container,
  IconButton,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import {
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
  Search as SearchIcon,
  Explore as ExploreIcon,
} from "@mui/icons-material";
import Link from "src/components/Link";

export default function AppBar() {
  const dispatch = useDispatch();
  const trigger = useScrollTrigger();

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <MuiAppBar>
          <Container>
            <Toolbar
              disableGutters
              sx={{ px: 0, justifyContent: "space-between" }}
            >
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
                <Link to={Path.EXPLORE} color="inherit">
                  <IconButton size="large" aria-label="search" color="inherit">
                    <ExploreIcon />
                  </IconButton>
                </Link>
                <IconButton
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
      </Slide>
      <Toolbar />
    </>
  );
}
