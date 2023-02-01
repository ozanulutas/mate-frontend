import { Fragment } from "react";
import { useSelector } from "react-redux";

import { Post } from "src/types";
import { selectComments } from "src/features/Feed/selectors";

import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from "@mui/material";

type CommentsProps = {
  postId: Post["id"];
};

function Comments({ postId }: CommentsProps) {
  const comments = useSelector(selectComments(postId));

  return (
    <List>
      {comments.map(({ id, text, createdAt, user }, i, arr) => (
        <Fragment key={id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar>{user.username[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`${user.username} - ${createdAt}`}
              secondary={text}
            />
          </ListItem>
          {i !== arr.length - 1 && <Divider variant="inset" component="li" />}
        </Fragment>
      ))}
    </List>
  );
}

export default Comments;
