import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import { GoBackButton } from "src/components";

function GoBackLayout() {
  return (
    <>
      <Box sx={{ mb: 1 }}>
        <GoBackButton />
      </Box>
      <Outlet />
    </>
  );
}

export default GoBackLayout;
