import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useEnterKeySubmit } from "src/hooks";
import { Status } from "src/constants";
import { CreateCommentSchemaType, createCommentSchema } from "./validation";
import { selectUser } from "src/features/AppConfig/selectors";
import { createCommentRequest } from "src/features/Feed/slice";
import {
  selectCreateCommentStatus,
  selectSelectedPostId,
} from "src/features/Feed/selectors";

import { Avatar, Button, Stack, TextField } from "@mui/material";

function CreateComment() {
  const dispatch = useDispatch();
  const { username } = useSelector(selectUser);
  const selectedPostId = useSelector(selectSelectedPostId);
  const createCommentStatus = useSelector(selectCreateCommentStatus);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      text: "",
    },
    resolver: yupResolver(createCommentSchema),
  });

  useEffect(() => {
    if (createCommentStatus === Status.LOADED) {
      reset();
    }
  }, [createCommentStatus, reset]);

  const onSubmit: SubmitHandler<CreateCommentSchemaType> = (data) => {
    if (!selectedPostId) {
      return;
    }

    dispatch(createCommentRequest({ postId: selectedPostId, ...data }));
  };

  const { handleKeyDown, handleKeyUp } = useEnterKeySubmit(
    handleSubmit(onSubmit)
  );

  return (
    <Stack
      spacing={1}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ width: "100%" }}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <Avatar>{username?.[0]}</Avatar>
        <Controller
          name="text"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              multiline
              label="Write a comment"
              onKeyUp={handleKeyUp}
              onKeyDown={handleKeyDown}
            />
          )}
        />
      </Stack>
      <Button
        type="submit"
        disabled={
          !isDirty ||
          !!errors.text?.message ||
          createCommentStatus === Status.LOADING
        }
        sx={{ alignSelf: "flex-end" }}
      >
        Send
      </Button>
    </Stack>
  );
}

export default CreateComment;
