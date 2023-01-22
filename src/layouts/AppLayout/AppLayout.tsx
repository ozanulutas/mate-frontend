import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Box, Container } from "@mui/material";
import { AppBar } from "src/components";
import AppDrawer from "src/features/AppDrawer";
import { Drawer } from "src/features/AppDrawer/constants";

function AppLayout() {
  return (
    <>
      <AppBar />
      <Container>
        <Box sx={{ my: 2 }}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Outlet />
          </Suspense>
        </Box>
      </Container>
      <AppDrawer drawerKey={Drawer.ACCOUNT} />
    </>
  );
}

export default AppLayout;
