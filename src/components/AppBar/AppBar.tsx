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
} from "@mui/icons-material";
import Link from "../Link";
import { Path } from "src/router/path";

export default function AppBar() {
  const trigger = useScrollTrigger();

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <MuiAppBar>
          <Container>
            <Toolbar sx={{ px: 0, justifyContent: "space-between" }}>
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
                <Link to={Path.USERS} color="inherit">
                  <IconButton size="large" aria-label="search" color="inherit">
                    <SearchIcon />
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
                <Link to={Path.ACCOUNT} color="inherit">
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    color="inherit"
                  >
                    <AccountCircleIcon />
                  </IconButton>
                </Link>
              </Box>
            </Toolbar>
          </Container>
        </MuiAppBar>
      </Slide>
      <Toolbar />
    </>
  );
}
