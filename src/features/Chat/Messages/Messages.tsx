import { List, ListItem, ListItemText } from "@mui/material";
import { useSelector } from "react-redux";
import { selectMessages } from "../selectors";

function Messages() {
  const messages = useSelector(selectMessages);

  return (
    <List dense>
      {messages.map(({ id, text, sender, createdAt }) => (
        <ListItem
          key={id}
          // sx={{ justifyContent: i % 2 === 0 ? "flex-start" : "flex-end" }}
        >
          <ListItemText
            primary={text}
            secondary={`${sender.username} - ${createdAt}`}
            sx={{ maxWidth: "max-content" }}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default Messages;
