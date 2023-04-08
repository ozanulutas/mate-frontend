import { useDispatch, useSelector } from "react-redux";

import { Post as IPost } from "src/types";
import { replacePathParams, strToDate } from "src/utils";
import { Path } from "src/router/path";
import { getCommentsRequest, setSelectedPostId } from "src/features/Feed/slice";
import { selectUserId } from "src/features/AppConfig/selectors";
import { toggleModal } from "src/components/Modal/slice";
import { ModalKey } from "src/components/Modal/constants";

import { Message as MessageIcon } from "@mui/icons-material";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Badge,
} from "@mui/material";
import { Link } from "src/components";

type PostProps = IPost;

function Post({ id, text, createdAt, _count, user: writer }: PostProps) {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);

  const { username: writerName, id: writerId } = writer ?? {};
  const { comments: commentCount } = _count ?? {};
  const isMe = userId === writerId;

  const handleCommetsClick = () => {
    dispatch(getCommentsRequest(id));
    dispatch(setSelectedPostId(id));
    dispatch(toggleModal(ModalKey.COMMENTS));
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
          onClick={handleCommetsClick}
          aria-label="show comments"
          size="small"
          sx={{ ml: "auto" }}
        >
          <Badge badgeContent={commentCount} color="primary">
            <MessageIcon />
          </Badge>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Post;
