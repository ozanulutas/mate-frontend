import { useNavigate } from "react-router-dom";

import { ArrowBack as ArrowBackIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";

function GoBackButton() {
  const navigate = useNavigate();

  return (
    <IconButton aria-label="back" onClick={() => navigate(-1)}>
      <ArrowBackIcon />
    </IconButton>
  );
}

export default GoBackButton;
