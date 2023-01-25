import { useDispatch, useSelector } from "react-redux";

import { selectModalKeys } from "./selectors";
import { Modal } from "./constants";
import { toggleModal } from "./slice";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

type AppModalProps = {
  modalKey: keyof typeof Modal;
  children?: React.ReactNode;
  text?: React.ReactNode;
  title?: React.ReactNode;
  positiveText?: string;
  negativeText?: string;
  onPositiveClick?: Function;
  onNegativeClick?: Function;
  formId?: string;
};

function AppModal({
  children,
  modalKey,
  text,
  title,
  positiveText,
  negativeText,
  onPositiveClick,
  onNegativeClick,
  formId,
}: AppModalProps) {
  const dispatch = useDispatch();
  const activeModalKey = useSelector(selectModalKeys);

  const isOpen = activeModalKey.some((key) => key === modalKey);

  const handleClose = () => {
    dispatch(toggleModal(modalKey));
  };

  const handlePositiveClick = () => {
    onPositiveClick?.();
    // handleClose();
  };

  const handleNegativeClick = () => {
    onNegativeClick?.();
    handleClose();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {text}
        </DialogContentText>
        {children}
      </DialogContent>
      {(positiveText || negativeText) && (
        <DialogActions>
          {negativeText && (
            <Button onClick={handleNegativeClick}>{negativeText}</Button>
          )}
          {positiveText && (
            <Button
              onClick={handlePositiveClick}
              autoFocus
              {...(formId && {
                form: formId,
                type: "submit",
              })}
            >
              {positiveText}
            </Button>
          )}
        </DialogActions>
      )}
    </Dialog>
  );
}

export default AppModal;
