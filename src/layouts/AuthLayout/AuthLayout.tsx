import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Container } from "@mui/material";

function AuthLayout() {
  // @TODO: if user is authenticated redirect
  return (
    <Container component="main" maxWidth="xs">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}

export default AuthLayout;
