import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getPostsRequest, getUserRequest } from "./slice";
import { selectPosts, selectUser } from "./selectors";

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import CategoryChips from "src/components/CategoryChips";
import Posts from "src/features/Feed/Posts";

function Profile() {
  const dispatch = useDispatch();
  const { userId = "" } = useParams();
  const { username, categories, info, age } = useSelector(selectUser);
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getUserRequest(userId));
    dispatch(getPostsRequest(userId));
  }, [dispatch, userId]);

  return (
    <>
      <Card elevation={0}>
        <CardMedia
          component="img"
          height="194"
          image="https://images.unsplash.com/photo-1675096293298-e529645322b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
        <CardHeader
          avatar={
            <Avatar src="https://images.unsplash.com/photo-1674809867836-c82107fb4879?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60">
              {username?.[0]}
            </Avatar>
          }
          title={username}
          subheader={<CategoryChips categories={categories} />}
          subheaderTypographyProps={{ component: "div" }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {info}
          </Typography>
        </CardContent>
      </Card>
      <Posts posts={posts} />
    </>
  );
}

export default Profile;
