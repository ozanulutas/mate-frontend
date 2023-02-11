import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { messageSchema, MessageSchemaType } from "./validation";
import { SearchParam } from "../constants";
import { selectMessageStatus } from "../selectors";
import { createMessageRequest } from "../slice";

import { Send as SendIcon } from "@mui/icons-material";
import { Box, TextField, IconButton } from "@mui/material";
import { Status } from "src/constants";

function MessageForm() {
  const dispatch = useDispatch();
  const isShiftKeyDown = useRef(false);
  const [searchParams] = useSearchParams();
  const messageStatus = useSelector(selectMessageStatus);
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      message: "",
    },
    resolver: yupResolver(messageSchema),
  });

  const peerId = searchParams.get(SearchParam.PEER_ID);

  useEffect(() => {
    if (messageStatus === Status.LOADED) {
      setValue("message", "");
    }
  }, [messageStatus, setValue]);

  const onSubmit: SubmitHandler<MessageSchemaType> = (data) => {
    if (!peerId) {
      return;
    }

    dispatch(
      createMessageRequest({
        text: data.message,
        receiverId: +peerId,
      })
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
      isShiftKeyDown.current = true;
    }

    if (!isShiftKeyDown.current && e.code === "Enter") {
      e.preventDefault();
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
      isShiftKeyDown.current = false;
    }

    if (!isShiftKeyDown.current && e.code === "Enter") {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ display: "flex", alignItems: "center", gap: 1, mx: 2, mb: 2 }}
    >
      <Controller
        name="message"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            multiline
            maxRows={4}
            required
            fullWidth
            autoFocus
            disabled={!peerId}
            error={!!errors.message?.message}
            onKeyUp={handleKeyUp}
            onKeyDown={handleKeyDown}
          />
        )}
      />

      <IconButton type="submit" sx={{ width: "50px", height: "50px" }}>
        <SendIcon fontSize="inherit" />
      </IconButton>
    </Box>
  );
}

export default MessageForm;
