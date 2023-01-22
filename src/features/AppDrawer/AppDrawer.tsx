import { useDispatch, useSelector } from "react-redux";

import { selectDrawerKey } from "./selectors";
import { Drawer } from "./constants";
import { toggleDrawer } from "./slice";

import { Box, SwipeableDrawer } from "@mui/material";

type AppDrawerProps = {
  drawerKey: keyof typeof Drawer;
  children: React.ReactNode;
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
        {children}
      </Box>
    </SwipeableDrawer>
  );
}

export default AppDrawer;
