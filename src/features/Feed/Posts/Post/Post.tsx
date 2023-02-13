import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Post as PostInterface } from "src/types";
import { replacePathParams, strToDate } from "src/utils";
import { Path } from "src/router/path";
import { getCommentsRequest } from "src/features/Feed/slice";
import { selectUserId } from "src/features/AppConfig/selectors";

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
import { Link } from "src/components";

type PostProps = PostInterface;

// @TODO: make "state cleaner" for comments or open them in modal
function Post({ id, text, createdAt, _count, user: writer }: PostProps) {
  const dispatch = useDispatch();
  const prevPostId = useRef<PostInterface["id"]>();
  const [expanded, setExpanded] = useState(false);
  const userId = useSelector(selectUserId);

  const { username: writerName, id: writerId } = writer ?? {};
  const { comments: commentCount } = _count ?? {};
  const isMe = userId === writerId;

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
        avatar={
          <Avatar
            {...(!isMe && {
              component: Link,
              to: replacePathParams(Path.PROFILE, { userId: writerId }),
              sx: { textDecoration: "none" },
            })}
          >
            {writerName?.[0]}
          </Avatar>
        }
        title={writerName}
        subheader={strToDate(createdAt)}
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
