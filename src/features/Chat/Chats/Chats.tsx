import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Path } from "src/router/path";
import { selectReactiveChats } from "../selectors";
import { getChatsRequest } from "../slice";

import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemButton,
  Badge,
} from "@mui/material";
import { Link } from "src/components";
import { replacePathParams } from "src/utils";

function Chats() {
  const dispatch = useDispatch();
  const chats = useSelector(selectReactiveChats);

  useEffect(() => {
    dispatch(getChatsRequest());
  }, [dispatch]);

  return (
    <List dense>
      {chats.map(({ unreadMessageCount, text, userId, username }) => (
        <ListItem divider disablePadding key={userId}>
          <ListItemButton
            component={Link}
            to={replacePathParams(Path.CHAT, { peerId: userId })}
          >
            <ListItemAvatar>
              <Badge badgeContent={unreadMessageCount} color="primary">
                <Avatar>{username[0]}</Avatar>
              </Badge>
            </ListItemAvatar>
            <ListItemText primary={username} secondary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default Chats;
