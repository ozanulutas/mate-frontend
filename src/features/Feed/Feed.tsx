import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { getFeedRequest } from "./slice";
import { selectPosts } from "./selectors";

import Posts from "./Posts";
import CommentsModal from "./Posts/CommentsModal";
import CreatePost from "./Posts/CreatePost";

function Feed() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getFeedRequest());
  }, [dispatch]);

  return (
    <>
      <CreatePost />
      <Posts posts={posts} />
      <CommentsModal />
    </>
  );
}

export default Feed;
