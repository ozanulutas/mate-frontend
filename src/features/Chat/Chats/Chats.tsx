import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { User } from "src/types";
import { SearchParam } from "../constants";
import { selectChats } from "../selectors";
import { getMessagesRequest } from "../slice";

import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemButton,
  Badge,
} from "@mui/material";

function Chats() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const chats = useSelector(selectChats);
  const peerId = searchParams.get(SearchParam.PEER_ID);

  useEffect(() => {
    if (!peerId) {
      return;
    }
    dispatch(getMessagesRequest(+peerId));
  }, [dispatch, peerId]);

  const handleClick = (userId: User["id"]) => {
    setSearchParams({ [SearchParam.PEER_ID]: userId.toString() });
  };

  return (
    <List dense>
      {chats.map(({ isRead, text, userId, username }) => (
        <ListItem divider disablePadding key={userId}>
          <ListItemButton onClick={() => handleClick(userId)}>
            <ListItemAvatar>
              <Badge variant="dot" color="primary" invisible={isRead}>
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
