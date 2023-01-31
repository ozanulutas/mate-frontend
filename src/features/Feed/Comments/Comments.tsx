import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from "@mui/material";

function Comments() {
  return (
    <List>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>R</Avatar>
        </ListItemAvatar>
        <ListItemText primary="username - date" secondary="comment" />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}

export default Comments;
