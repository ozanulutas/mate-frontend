import { DrawerKey } from "src/components/Drawer/constants";

import { Path } from "src/router/path";
import { replacePathParams } from "src/utils/replace-path-params";

import { deepOrange } from "@mui/material/colors";
import { Fragment } from "react";
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
import Drawer from "src/components/Drawer";
import { Link } from "src/components";

const drawerItems = [
  {
    label: "Profile",
    icon: <PersonIcon />,
    path: replacePathParams(Path.PROFILE, { userId: "me" }),
  },
  {
    label: "Account",
    icon: <ManageAccountsIcon />,
    path: Path.ACCOUNT,
    divider: true,
  },
  {
    label: "Logout",
    icon: <LogoutIcon />,
    path: Path.LOGIN,
  },
];

// @TODO: move this compoenet somewhere else and change the name
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
        {drawerItems.map((item) => (
          <Fragment key={item.label}>
            <ListItem disablePadding>
              <ListItemButton component={Link} to={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
            {item.divider && <Divider component="li" />}
          </Fragment>
        ))}
      </List>
    </Drawer>
  );
}

export default AccountDrawer;
