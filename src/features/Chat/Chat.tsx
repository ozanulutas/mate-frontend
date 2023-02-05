import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getChatsRequest } from "./slice";

import { Paper, Stack, Box } from "@mui/material";
import Messages from "./Messages";
import Chats from "./Chats";
import MessageForm from "./MessageForm";

// @TODO: create empty message screen. clear text after successful message
function Chat() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChatsRequest());
  }, [dispatch]);

  return (
    <Stack direction="row" sx={{ gap: 1, height: "100%" }}>
      <Paper
        variant="outlined"
        sx={{
          flex: 1,
          overflowY: "auto",
        }}
      >
        <Chats />
      </Paper>
      <Stack component={Paper} variant="outlined" sx={{ flex: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column-reverse",
            height: "100%",
            overflowY: "auto",
          }}
        >
          <Messages />
        </Box>
        <MessageForm />
      </Stack>
    </Stack>
  );
}

export default Chat;
