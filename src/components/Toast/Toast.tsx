import { useDispatch, useSelector } from "react-redux";

import { selectToast } from "./selectors";
import { closeToast } from "./slice";
import { AlertSeverity } from "./constants";

import { Alert, Snackbar } from "@mui/material";

function Toast() {
  const dispatch = useDispatch();
  const toast = useSelector(selectToast);

  const { isOpen, text, type } = toast;

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(closeToast());
  };

  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={AlertSeverity[type]}
        elevation={6}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {text}
      </Alert>
    </Snackbar>
  );
}

export default Toast;
