import { useSelector } from "react-redux";

import { ModalKey } from "src/components/Modal/constants";
import { selectComments } from "../../selectors";
import { selectUserId } from "src/features/AppConfig/selectors";

import { Fragment } from "react";
import Modal from "src/components/Modal";
import { List, DialogActions, Divider } from "@mui/material";
import CreateComment from "./CreateComment/CreateComment";
import Comment from "./Comment";

function CommentsModal() {
  const comments = useSelector(selectComments);
  const userId = useSelector(selectUserId);

  return (
    <Modal
      modalKey={ModalKey.COMMENTS}
      title="Comments"
      dialogContentSx={{ pb: 0 }}
    >
      <List>
        {comments.map(({ id, text, createdAt, user }, i) => (
          <Fragment key={id}>
            <Comment
              text={text}
              createdAt={createdAt}
              writer={user}
              userId={userId}
            />
            {i !== comments.length - 1 && (
              <Divider variant="inset" component="li" />
            )}
          </Fragment>
        ))}
      </List>
      <DialogActions
        sx={{ position: "sticky", bottom: 0, backgroundColor: "white" }}
      >
        <CreateComment />
      </DialogActions>
    </Modal>
  );
}

export default CommentsModal;
