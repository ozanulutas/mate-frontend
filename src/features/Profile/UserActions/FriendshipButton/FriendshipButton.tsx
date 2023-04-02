import useButtonProps from "./useButtonProps";

import { Button } from "@mui/material";

function FriendshipButton() {
  const { icon, text, onClick } = useButtonProps();

  return (
    <Button size="small" variant="contained" onClick={onClick} startIcon={icon}>
      {text}
    </Button>
  );
}

export default FriendshipButton;
