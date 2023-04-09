import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { To } from "react-router-dom";

import { searchFriendsRequest } from "../slice";
import { selectFriends } from "../selectors";

import {
  Autocomplete,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
import { Link } from "src/components";

type SearchFriendsProps = {
  to: (userId: number) => To;
};

function SearchFriends({ to }: SearchFriendsProps) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const friends = useSelector(selectFriends);

  useEffect(() => {
    if (name === "") {
      return;
    }

    dispatch(searchFriendsRequest(name));
  }, [dispatch, name]);

  return (
    <Autocomplete
      loading
      inputValue={name}
      options={friends}
      onInputChange={(e, val) => setName(val)}
      getOptionLabel={(option) => option.username}
      renderOption={(props, { id, username }) => (
        <ListItem disablePadding key={id}>
          <ListItemButton component={Link} to={to(id)}>
            <ListItemAvatar>
              <Avatar>{username[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={username} />
          </ListItemButton>
        </ListItem>
      )}
      renderInput={(params) => (
        <TextField {...params} label="Friends" placeholder="Search Friends" />
      )}
    />
  );
}

export default SearchFriends;
