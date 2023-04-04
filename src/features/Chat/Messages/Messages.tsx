import { useSelector } from "react-redux";

import { strToDate } from "src/utils";
import { selectUserId } from "src/features/AppConfig/selectors";
import { selectMessages } from "../selectors";

import { List, ListItem, ListItemText, Paper } from "@mui/material";
import { useEffect, useRef } from "react";

function Messages() {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messages = useSelector(selectMessages);
  const userId = useSelector(selectUserId);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <List dense sx={{ flex: 1 }}>
        {messages.map(({ id, text, sender, createdAt }) => (
          <ListItem
            key={id}
            sx={{
              justifyContent: userId === sender.id ? "flex-end" : "flex-start",
            }}
          >
            <Paper variant="outlined" sx={{ px: 1 }}>
              <ListItemText
                primary={text}
                secondary={`${sender.username} - ${strToDate(createdAt)}`}
                sx={{ maxWidth: "max-content" }}
              />
            </Paper>
          </ListItem>
        ))}
      </List>
      <div ref={messagesEndRef} />
    </>
  );
}

export default Messages;
