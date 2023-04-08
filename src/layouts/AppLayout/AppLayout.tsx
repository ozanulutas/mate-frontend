import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { appConfigRequest } from "src/features/AppConfig/slice";

import { Container } from "@mui/material";
import { AppBar } from "src/components";
import AccountDrawer from "src/features/Account/AccountDrawer";
import { connectSocket } from "src/features/Socket/slice";
import { selectUserId } from "src/features/AppConfig/selectors";

function AppLayout() {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);

  useEffect(() => {
    dispatch(appConfigRequest());
  }, [dispatch]);

  useEffect(() => {
    if (userId) {
      // dispatch(connectSocket(userId));
    }
  }, [dispatch, userId]);

  return (
    <>
      <AppBar />
      <Container
        component="main"
        sx={{
          py: 2,
          // minHeight: {
          //   xs: `calc(100vh - ${AppBarHeight.XS}px)`,
          //   sm: `calc(100vh - ${AppBarHeight.SM}px)`,
          // },
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
