import CategorySearch from "src/features/Search/CategorySearch";
import Map from "src/features/OlMap";
import UsersMap from "./UsersMap";

function UsersList() {
  return (
    <>
      <CategorySearch />
      {/* <Map /> */}
      <UsersMap />
    </>
  );
}

export default UsersList;
