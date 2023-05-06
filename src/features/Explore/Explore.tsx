import { Stack } from "@mui/material";
import Search from "./Search";
import ViewToggle from "./ViewToggle";
import Users from "./Users";

function Explore() {
  return (
    <Stack spacing={2}>
      <Search />
      <ViewToggle />
      <Users />
    </Stack>
  );
}

export default Explore;
