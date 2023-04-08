import { replacePathParams, strToDate } from "src/utils";
import { Comment as IComment, User } from "src/types";

import { Path } from "src/router/path";

import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import { Link } from "src/components";

type CommentProps = Pick<IComment, "createdAt" | "text"> & {
  userId: User["id"];
  writer: IComment["user"];
};

function Comment({ text, createdAt, userId, writer }: CommentProps) {
  const isMe = userId === writer.id;

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          {...(!isMe && {
            component: Link,
            to: replacePathParams(Path.PROFILE, { userId: writer.id }),
            sx: { textDecoration: "none" },
          })}
        >
          {writer.username[0]}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={`${writer.username} - ${strToDate(createdAt)}`}
        secondary={text}
      />
    </ListItem>
  );
}

export default Comment;
