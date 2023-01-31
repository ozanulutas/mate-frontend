import { List, ListItem } from "@mui/material";
import Post from "../Post";

function Posts() {
  return (
    <List>
      <ListItem divider>
        <Post />
      </ListItem>
    </List>
  );
}

export default Posts;
