import { useDispatch, useSelector } from "react-redux";

import { selectIsFollowedByMe } from "../../selectors";
import { unfollowRequest, followRequest } from "../../slice";

import {
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

function FollowButton() {
  const dispatch = useDispatch();
  const isFollowedByMe = useSelector(selectIsFollowedByMe);

  const handleFavoriteClick = () => {
    dispatch(isFollowedByMe ? unfollowRequest() : followRequest());
  };

  return (
    <IconButton size="small" onClick={handleFavoriteClick}>
      {isFollowedByMe ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
}

export default FollowButton;
