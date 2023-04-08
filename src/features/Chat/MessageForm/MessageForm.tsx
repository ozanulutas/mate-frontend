import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useEnterKeySubmit } from "src/hooks";
import { messageSchema, MessageSchemaType } from "./validation";
import { selectMessageStatus } from "../selectors";
import { createMessageRequest } from "../slice";

import { Send as SendIcon } from "@mui/icons-material";
import { Box, TextField, IconButton } from "@mui/material";
import { Status } from "src/constants";

type MessageFormProps = {
  peerId: number;
};

function MessageForm({ peerId }: MessageFormProps) {
  const dispatch = useDispatch();
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
        receiverId: peerId,
      })
    );
  };

  const { handleKeyDown, handleKeyUp } = useEnterKeySubmit(
    handleSubmit(onSubmit)
  );

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{
        position: "sticky",
        bottom: "1rem",
        display: "flex",
        alignItems: "center",
        gap: 1,
        mx: 2,
        backgroundColor: "white",
      }}
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
