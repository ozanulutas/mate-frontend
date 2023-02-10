import { useDispatch, useSelector } from "react-redux";

import { DrawerKey } from "src/components/Drawer/constants";
import { Path } from "src/router/path";
import { replacePathParams } from "src/utils/replace-path-params";
import { logout } from "src/features/Auth/slice";
import { selectUser } from "src/features/AppConfig/selectors";

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
];

// @TODO: move this compoenet somewhere else and change the name
function AccountDrawer() {
  const dispatch = useDispatch();
  const { username } = useSelector(selectUser) ?? {};

  return (
    <Drawer drawerKey={DrawerKey.ACCOUNT}>
      <Toolbar sx={{ gap: 2 }} disableGutters component={ListItem}>
        <Avatar>{username?.[0]}</Avatar>
        <Typography variant="subtitle1" component="h2">
          {username}
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
        <ListItem disablePadding>
          <ListItemButton onClick={() => dispatch(logout())}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default AccountDrawer;
