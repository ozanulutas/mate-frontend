import { useDispatch, useSelector } from "react-redux";

import { selectModalKeys } from "./selectors";
import { ModalKey } from "./constants";
import { negativeButtonClick, positiveButtonClick, toggleModal } from "./slice";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  IconButton,
  SxProps,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material/";
import { useEffect } from "react";

type ModalProps = {
  modalKey: keyof typeof ModalKey;
  children?: React.ReactNode;
  text?: React.ReactNode;
  title?: React.ReactNode;
  positiveText?: string;
  negativeText?: string;
  onPositiveClick?: Function;
  onNegativeClick?: Function;
  formId?: string;
  displayClose?: boolean;
  dialogContentSx?: SxProps;
  disableBackdropClick?: boolean;
  onClose?: (...args: any[]) => any;
} & Omit<DialogProps, "open">;

function Modal({
  children,
  modalKey,
  text,
  title,
  positiveText,
  negativeText,
  onPositiveClick,
  onNegativeClick,
  formId,
  displayClose = true,
  dialogContentSx,
  disableBackdropClick = false,
  onClose,
  ...dialogProps
}: ModalProps) {
  const dispatch = useDispatch();
  const activeModalKey = useSelector(selectModalKeys);

  const theme = useTheme();
  const isFullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const isOpen = activeModalKey.some((key) => key === modalKey);

  const handleClose = (
    e?: object,
    reason?: "backdropClick" | "escapeKeyDown"
  ) => {
    if (disableBackdropClick && reason === "backdropClick") {
      return;
    }

    dispatch(toggleModal(modalKey));
    onClose?.();
  };

  const handlePositiveClick = () => {
    dispatch(positiveButtonClick());
    onPositiveClick?.();
    // handleClose();
  };

  const handleNegativeClick = () => {
    dispatch(negativeButtonClick());
    onNegativeClick?.();
    handleClose();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      fullScreen={isFullScreen}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      {...dialogProps}
    >
      <DialogTitle id="dialog-title" sx={{ position: "relative" }}>
        {title}
        {displayClose && (
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <CloseIcon />
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent sx={dialogContentSx}>
        {text && (
          <DialogContentText id="dialog-description">{text}</DialogContentText>
        )}
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

export default Modal;
