import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { messageSchema, MessageSchemaType } from "./validation";

import { Send as SendIcon } from "@mui/icons-material";
import { Box, TextField, IconButton } from "@mui/material";
import { SearchParam } from "../constants";
import { createMessageRequest } from "../slice";

function MessageForm() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      message: "",
    },
    resolver: yupResolver(messageSchema),
  });

  const peerId = searchParams.get(SearchParam.PEER_ID);

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
