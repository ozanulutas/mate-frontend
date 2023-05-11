import { useDispatch, useSelector } from "react-redux";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ChangePasswordSchemaType, changePasswordSchema } from "./validation";
import { changePasswordRequest } from "../../slice";
import { selectChangePasswordStatus } from "../../selectors";

import { Save as SaveIcon } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import { PasswordInput } from "src/components";
import LabeledSection from "src/components/LabeledSection";
import { useEffect } from "react";
import { Status } from "src/constants";

function ChangePasswordForm() {
  const dispatch = useDispatch();
  const cangePasswordStatus = useSelector(selectChangePasswordStatus);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      oldPassword: "",
      password: "",
      passwordConfirmation: "",
    },
    resolver: yupResolver(changePasswordSchema),
  });

  useEffect(() => {
    if (cangePasswordStatus === Status.LOADED) {
      reset();
    }
  }, [cangePasswordStatus, reset]);

  const onSubmit: SubmitHandler<ChangePasswordSchemaType> = (data) => {
    const { password, oldPassword } = data;

    dispatch(changePasswordRequest({ password, oldPassword }));
  };

  return (
    <LabeledSection label="Change Password">
      <Stack
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        spacing={1.5}
      >
        <Controller
          name="oldPassword"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <PasswordInput
              field={field}
              errorMessage={error?.message}
              label="Old Password"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <PasswordInput
              field={field}
              errorMessage={error?.message}
              label="Password"
            />
          )}
        />
        <Controller
          name="passwordConfirmation"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <PasswordInput
              field={field}
              errorMessage={error?.message}
              label="Password Confirmation"
            />
          )}
        />
        <Button
          type="submit"
          variant="outlined"
          size="large"
          sx={{ alignSelf: "flex-end" }}
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </Stack>
    </LabeledSection>
  );
}

export default ChangePasswordForm;
