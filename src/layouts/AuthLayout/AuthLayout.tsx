import { Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Outlet />
    </Container>
  );
}

export default AuthLayout;
