import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { Container } from "@mui/material";
import { AppBar } from "src/components";
import AccountDrawer from "src/features/Account/AccountDrawer";
import { AppBarHeight } from "src/components/AppBar/constants";
import { useDispatch } from "react-redux";

function AppLayout() {
  const dispach = useDispatch();
  useEffect(() => {
    // dispach({ type: "CONNECT_SOCKET" });
  }, [dispach]);

  return (
    <>
      <AppBar />
      <Container
        component="main"
        sx={{
          py: 2,
          flex: 1,
          height: {
            xs: `calc(100vh - ${AppBarHeight.XS}px)`,
            sm: `calc(100vh - ${AppBarHeight.SM}px)`,
          },
        }}
      >
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </Container>
      <AccountDrawer />
    </>
  );
}

export default AppLayout;
