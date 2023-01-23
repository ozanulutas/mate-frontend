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
  children: React.ReactNode;
};

function AppModal({ modalKey, children }: AppModalProps) {
  const dispatch = useDispatch();
  const activeModalKey = useSelector(selectModalKeys);

  const isOpen = activeModalKey.some((key) => key === modalKey);

  const handleClose = () => {
    dispatch(toggleModal(modalKey));
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AppModal;
