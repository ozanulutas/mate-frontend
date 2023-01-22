import { useDispatch, useSelector } from "react-redux";

import { selectDrawerKey } from "./selectors";
import { Drawer } from "./constants";
import { toggleDrawer } from "./slice";

import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

type AppDrawerProps = {
  drawerKey: keyof typeof Drawer;
  children?: React.ReactNode;
};

function AppDrawer({ drawerKey, children }: AppDrawerProps) {
  const dispatch = useDispatch();
  const activeDrawerKey = useSelector(selectDrawerKey);

  const isOpen = activeDrawerKey === drawerKey;

  const toggle = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    dispatch(toggleDrawer(activeDrawerKey));
  };

  return (
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      onClose={toggle}
      onOpen={toggle}
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggle}
        onKeyDown={toggle}
      >
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </SwipeableDrawer>
  );
}

export default AppDrawer;
