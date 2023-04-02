import { useSelector } from "react-redux";

import { ModalKey } from "src/components/Modal/constants";
import { selectComments } from "../../selectors";
import { strToDate } from "src/utils";

import { Fragment } from "react";
import Modal from "src/components/Modal";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from "@mui/material";

function CommentsModal() {
  const comments = useSelector(selectComments);

  return (
    <Modal modalKey={ModalKey.COMMENTS} title="Comments">
      <List>
        {comments.map(({ id, text, createdAt, user }, i) => (
          <Fragment key={id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar>{user.username[0]}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${user.username} - ${strToDate(createdAt)}`}
                secondary={text}
              />
            </ListItem>
            {i !== comments.length - 1 && (
              <Divider variant="inset" component="li" />
            )}
          </Fragment>
        ))}
      </List>
    </Modal>
  );
}

export default CommentsModal;
