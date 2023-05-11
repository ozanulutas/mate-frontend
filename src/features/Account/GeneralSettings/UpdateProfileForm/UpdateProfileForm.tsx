import { useDispatch, useSelector } from "react-redux";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import dayjs from "dayjs";

import { updateProfileRequest } from "../../slice";
import { UpdateProfileSchemaType, updateProfileSchema } from "./validation";
import { selectUser } from "src/features/AppConfig/selectors";

import { Save as SaveIcon } from "@mui/icons-material";
import { Stack, TextField, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import CountrySelect from "../CountrySelect";
import GenderSelect from "./GenderSelect";

function UpdateProfileForm() {
  const dispatch = useDispatch();
  const { email, birthday, countryCode, genderId, gsm } =
    useSelector(selectUser);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email,
      gsm,
      countryCode,
      birthday: dayjs(birthday),
      genderId,
    },
    resolver: yupResolver(updateProfileSchema),
  });

  const onSubmit: SubmitHandler<UpdateProfileSchemaType> = (data) => {
    dispatch(updateProfileRequest(data));
  };

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      spacing={1.5}
    >
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            required
            fullWidth
            label="Email Address"
            autoComplete="email"
            error={!!errors.email?.message}
            helperText={errors.email?.message}
          />
        )}
      />

      <Stack direction="row" spacing={1}>
        <Controller
          name="countryCode"
          control={control}
          render={({ field }) => <CountrySelect field={field} />}
        />
        <Controller
          name="gsm"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Phone" fullWidth />
          )}
        />
      </Stack>

      <Controller
        name="birthday"
        control={control}
        render={({ field }) => (
          <DatePicker {...field} label="Birthday" format="DD/MM/YYYY" />
        )}
      />

      <Controller
        name="genderId"
        control={control}
        render={({ field }) => <GenderSelect field={field} />}
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
  );
}

export default UpdateProfileForm;
