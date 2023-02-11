import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { appConfigRequest } from "src/features/AppConfig/slice";
import { AppBarHeight } from "src/components/AppBar/constants";

import { Container } from "@mui/material";
import { AppBar } from "src/components";
import AccountDrawer from "src/features/Account/AccountDrawer";
import { connectSocket } from "src/features/Socket/slice";

function AppLayout() {
  const dispach = useDispatch();

  useEffect(() => {
    // dispach(connectSocket());
    dispach(appConfigRequest());
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
