import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Posts from "./Posts";
import { getFeedRequest } from "./slice";
import { useSelector } from "react-redux";
import { selectPosts } from "./selectors";

function Feed() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getFeedRequest());
  }, [dispatch]);

  return <Posts posts={posts} />;
}

export default Feed;
