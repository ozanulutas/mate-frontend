import { Stack } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getLocationsRequest } from "src/features/Account/slice";

import Search from "src/features/Search";
import UsersMap from "./UsersMap";
import ViewToggle from "./ViewToggle";

function UsersList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocationsRequest());
  }, [dispatch]);

  return (
    <Stack spacing={2}>
      <Search />
      <ViewToggle />
      <UsersMap />
    </Stack>
  );
}

export default UsersList;
