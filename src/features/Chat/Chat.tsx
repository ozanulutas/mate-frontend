import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { selectUserId } from "src/features/AppConfig/selectors";
import { addUserToSocket, getChatsRequest } from "./slice";

import { Paper, Stack, Box } from "@mui/material";
import Messages from "./Messages";
import Chats from "./Chats";
import MessageForm from "./MessageForm";

// @TODO: create empty message screen.
function Chat() {
  const dispatch = useDispatch();

  const userId = useSelector(selectUserId);

  useEffect(() => {
    dispatch(getChatsRequest());
  }, [dispatch]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    dispatch(addUserToSocket(userId));
  }, [dispatch, userId]);

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
            // display: "flex",
            // flexDirection: "column-reverse",
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
