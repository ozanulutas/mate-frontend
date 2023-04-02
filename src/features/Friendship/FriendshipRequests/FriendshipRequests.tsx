import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectFriendshipRequests } from "../selectors";
import { getFriendshipRequestsRequest } from "../slice";

import { List } from "@mui/material";
import FriendshipRequest from "./FriendshipRequest";

function FriendshipRequests() {
  const dispatch = useDispatch();
  const friendshipRequests = useSelector(selectFriendshipRequests);

  useEffect(() => {
    dispatch(getFriendshipRequestsRequest());
  }, [dispatch]);

  return (
    <List>
      {friendshipRequests.map(({ createdAt, id, sender }) => (
        <FriendshipRequest
          key={id}
          id={id}
          createdAt={createdAt}
          sender={sender}
        />
      ))}
    </List>
  );
}

export default FriendshipRequests;
