import { useDispatch, useSelector } from "react-redux";

import { selectView } from "src/features/Explore/selectors";
import { View } from "src/features/Explore/constants";

import UsersList from "./UsersList";
import UsersMap from "./UsersMap";
import { getUsersRequest } from "../slice";

function Users() {
  const view = useSelector(selectView);

  const dispatch = useDispatch();
  // @TODO: remove getUsersRequest
  dispatch(
    getUsersRequest({
      lon: 27.503774216394596,
      lat: 40.97763230767281,
      categories: [5, 10],
      distance: 11111111,
    })
  );

  return view === View.MAP ? <UsersMap /> : <UsersList />;
}

export default Users;
