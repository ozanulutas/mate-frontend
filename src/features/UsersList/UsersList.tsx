import { useEffect } from "react";
import { useDispatch } from "react-redux";

import LocationSelect from "../Search/LocationSelect";
import { getLocationsRequest } from "../Account/slice";

import CategorySearch from "src/features/Search/CategorySearch";
import UsersMap from "./UsersMap";

function UsersList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocationsRequest());
  }, [dispatch]);

  return (
    <>
      <CategorySearch />
      <LocationSelect />
      <UsersMap />
    </>
  );
}

export default UsersList;
