import { useSelector } from "react-redux";

import { strToDate } from "src/utils";
import { selectUserId } from "src/features/AppConfig/selectors";
import { selectMessages } from "../selectors";

import { List, ListItem, ListItemText, Paper } from "@mui/material";

function Messages() {
  const messages = useSelector(selectMessages);
  const userId = useSelector(selectUserId);

  return (
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
  );
}

export default Messages;
