import { Outlet } from "react-router-dom";

import { Box, Container } from "@mui/material";
import { AppBar } from "src/components";

function AppLayout() {
  return (
    <>
      <AppBar />
      <Container>
        <Box sx={{ my: 2 }}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
}

export default AppLayout;
