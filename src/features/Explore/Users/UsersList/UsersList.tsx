import { useSelector } from "react-redux";

import { selectUsers } from "src/features/Explore/selectors";

import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Fragment } from "react";

function UsersList() {
  const users = useSelector(selectUsers);

  return (
    <List>
      {users.map(({ id, categories, username }) => (
        <Fragment key={id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar>OU</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={username}
              secondary={categories.map((category) => category).join()}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </Fragment>
      ))}
    </List>
  );
}

export default UsersList;
