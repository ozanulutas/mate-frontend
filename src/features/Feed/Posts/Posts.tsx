import { List, ListItem } from "@mui/material";
import { Post as IPost } from "src/types";

import Post from "./Post";

type PostsProps = {
  posts: IPost[];
};

function Posts({ posts }: PostsProps) {
  return (
    <List>
      {posts.map(({ id, _count, text, createdAt, user }) => (
        <ListItem key={id} disableGutters>
          <Post
            id={id}
            _count={_count}
            text={text}
            createdAt={createdAt}
            user={user}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default Posts;
