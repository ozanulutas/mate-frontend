import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Container, CssBaseline } from "@mui/material";

function AuthLayout() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}

export default AuthLayout;