import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { CreatePostSchemaType, createPostSchema } from "./validation";
import { selectUser } from "src/features/AppConfig/selectors";
import { createPostRequest } from "../../slice";
import { selectCreatePostStatus } from "../../selectors";
import { Status } from "src/constants";

import { Avatar, Button, Stack, TextField } from "@mui/material";

function CreatePost() {
  const dispatch = useDispatch();
  const { username } = useSelector(selectUser);
  const createPostStatus = useSelector(selectCreatePostStatus);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      text: "",
    },
    resolver: yupResolver(createPostSchema),
  });

  useEffect(() => {
    if (createPostStatus === Status.LOADED) {
      reset();
    }
  }, [createPostStatus, reset]);

  const onSubmit: SubmitHandler<CreatePostSchemaType> = (data) => {
    dispatch(createPostRequest(data));
  };

  return (
    <Stack spacing={1} component="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="row" spacing={2}>
        <Avatar>{username?.[0]}</Avatar>
        <Controller
          name="text"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="Publish a post"
              multiline
              rows={3}
            />
          )}
        />
      </Stack>
      <Button
        type="submit"
        disabled={
          !isDirty ||
          !!errors.text?.message ||
          createPostStatus === Status.LOADING
        }
        sx={{ alignSelf: "flex-end" }}
      >
        Publish
      </Button>
    </Stack>
  );
}

export default CreatePost;
