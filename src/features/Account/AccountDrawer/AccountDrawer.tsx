import { DrawerKey } from "src/components/Drawer/constants";

import { Path } from "src/router/path";

import { deepOrange } from "@mui/material/colors";
import Drawer from "src/components/Drawer";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  ManageAccounts as ManageAccountsIcon,
  Logout as LogoutIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import { Link } from "src/components";

function AccountDrawer() {
  return (
    <Drawer drawerKey={DrawerKey.ACCOUNT}>
      <Toolbar sx={{ gap: 2 }} disableGutters component={ListItem}>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>O</Avatar>
        <Typography variant="subtitle1" component="h2">
          Ozanus Ulutaşus
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to={Path.ACCOUNT}>
            <ListItemIcon>
              <ManageAccountsIcon />
            </ListItemIcon>
            <ListItemText primary={"Account"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={"Profile"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default AccountDrawer;
