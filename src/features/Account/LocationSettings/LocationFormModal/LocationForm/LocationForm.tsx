import { useDispatch } from "react-redux";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { Marker } from "src/features/Account/LocationSettings/LocationSettings.d";
import { yupResolver } from "@hookform/resolvers/yup";
import { addLocationSchema, AddLocationSchemaType } from "./validation";
import {
  addLocationRequest,
  updateLocationRequest,
} from "src/features/Account/slice";
import { toLonLat } from "ol/proj";
import { Location } from "src/types";

import { Box, TextField } from "@mui/material";
import { useEffect } from "react";

type LocationFormProps = {
  markerRef: React.MutableRefObject<Marker>;
  formId: string;
  name: Location["name"];
  locationId: Location["id"];
};

const LocationForm = ({
  formId,
  markerRef,
  name,
  locationId,
}: LocationFormProps) => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
    },
    resolver: yupResolver(addLocationSchema),
  });

  useEffect(() => {
    if (name) {
      setValue("name", name);
    }
  }, [name, setValue]);

  const onSubmit: SubmitHandler<AddLocationSchemaType> = (data) => {
    const coordinates = toLonLat(
      markerRef.current?.getGeometry()?.getCoordinates() ?? []
    );
    const name = data.name;

    locationId
      ? dispatch(
          updateLocationRequest({
            id: locationId,
            name,
            coordinates,
          })
        )
      : dispatch(
          addLocationRequest({
            name,
            coordinates,
          })
        );
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      id={formId}
    >
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Location Name"
            required
            fullWidth
            autoFocus
            margin="normal"
            error={!!errors.name?.message}
            helperText={errors.name?.message}
          />
        )}
      />
    </Box>
  );
};

export default LocationForm;
