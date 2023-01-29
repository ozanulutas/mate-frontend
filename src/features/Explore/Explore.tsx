import { Stack } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getLocationsRequest } from "src/features/Account/slice";

import Search from "./Search";
import UsersMap from "./Users/UsersMap";
import ViewToggle from "./ViewToggle";

function Explore() {
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

export default Explore;
