import { Path } from "src/router/path";

import { Message as MessageIcon } from "@mui/icons-material/";
import { Button } from "@mui/material";
import { Link } from "src/components";
import { replacePathParams } from "src/utils";

type NewMessageButtonProps = {
  peerId: string;
};
function NewMessageButton({ peerId }: NewMessageButtonProps) {
  return (
    <Button
      component={Link}
      to={replacePathParams(Path.CHAT, { peerId })}
      variant="outlined"
      size="small"
      startIcon={<MessageIcon />}
    >
      Send Message
    </Button>
  );
}

export default NewMessageButton;
