import { useSelector } from "react-redux";

import { selectView } from "src/features/Explore/selectors";
import { View } from "src/features/Explore/constants";

import UsersList from "./UsersList";
import UsersMap from "./UsersMap";

function Users() {
  const view = useSelector(selectView);

  return view === View.MAP ? <UsersMap /> : <UsersList />;
}

export default Users;
