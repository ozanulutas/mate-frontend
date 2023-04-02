import { List, ListItem } from "@mui/material";
import { Post as PostInterface } from "src/types";

import Post from "./Post";
import CommentsModal from "./CommentsModal/CommentsModal";

type PostsProps = {
  posts: PostInterface[];
};

function Posts({ posts }: PostsProps) {
  return (
    <>
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
      <CommentsModal />
    </>
  );
}

export default Posts;
