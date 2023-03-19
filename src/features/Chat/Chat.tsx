import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getMessagesRequest } from "./slice";

import { Paper, Stack, Box } from "@mui/material";
import Messages from "./Messages";
import MessageForm from "./MessageForm";
import { AppBarHeight } from "src/components/AppBar/constants";

// @TODO: create empty message screen.
function Chat() {
  const dispatch = useDispatch();
  const { peerId = "" } = useParams();

  useEffect(() => {
    if (!peerId) {
      return;
    }
    dispatch(getMessagesRequest(+peerId));
  }, [dispatch, peerId]);

  return (
    <Stack
      sx={{
        minHeight: {
          xs: `calc(100vh - ${AppBarHeight.XS + 32}px)`,
          sm: `calc(100vh - ${AppBarHeight.SM + 32}px)`,
        },
      }}
    >
      <Messages />
      <MessageForm peerId={+peerId} />
    </Stack>
  );
}

export default Chat;
