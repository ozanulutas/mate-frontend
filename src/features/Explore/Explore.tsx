import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getLocationsRequest } from "src/features/Account/slice";

import { Stack } from "@mui/material";
import Search from "./Search";
import ViewToggle from "./ViewToggle";
import Users from "./Users";

function Explore() {
  const dispatch = useDispatch();

  useEffect(() => {
    // @TODO: locationları çekmek yerine init requestinde location name yolla
    dispatch(getLocationsRequest());
  }, [dispatch]);

  return (
    <Stack spacing={2}>
      <Search />
      <ViewToggle />
      <Users />
    </Stack>
  );
}

export default Explore;
