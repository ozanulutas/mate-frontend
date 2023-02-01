import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { Post as PostInterface } from "src/types";
import { getCommentsRequest } from "src/features/Feed/slice";

import { Message as MessageIcon } from "@mui/icons-material";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  CardActions,
  Collapse,
  IconButton,
  Badge,
} from "@mui/material";
import Comments from "../Comments";

type PostProps = PostInterface;

// @TODO: make "state cleaner" for comments or open them in modal
function Post({ id, text, createdAt, _count, user }: PostProps) {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);
  const prevPostId = useRef<PostInterface["id"]>();

  const { username } = user ?? {};
  const { comments: commentCount } = _count ?? {};

  useEffect(() => {
    if (expanded && commentCount && prevPostId.current !== id) {
      dispatch(getCommentsRequest(id));
      prevPostId.current = id;
    }
  }, [commentCount, dispatch, expanded, id]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: "100%" }} variant="outlined">
      <CardHeader
        avatar={<Avatar>{username?.[0]}</Avatar>}
        title={username}
        subheader={createdAt}
      />
      <CardContent sx={{ pb: 0 }}>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          size="small"
          color={expanded ? "primary" : "default"}
          sx={{ ml: "auto" }}
        >
          <Badge badgeContent={commentCount} color="primary">
            <MessageIcon />
          </Badge>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ pt: 0 }}>
          <Comments postId={id} />
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Post;
