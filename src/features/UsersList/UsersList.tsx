import { useEffect } from "react";
import { useDispatch } from "react-redux";

import LocationSelect from "../Search/LocationSelect";
import { getLocationsRequest } from "../Account/slice";

import CategorySearch from "src/features/Search/CategorySearch";
import UsersMap from "./UsersMap";
import { Button } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { Stack } from "@mui/system";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { searchSchema, SearchSchemaType } from "../Search/validation";

function UsersList() {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      categories: [],
      location: null as unknown as number,
    },
    resolver: yupResolver(searchSchema),
  });

  const onSubmit: SubmitHandler<SearchSchemaType> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    dispatch(getLocationsRequest());
  }, [dispatch]);

  return (
    <>
      <Stack
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ sm: "flex-start" }}
        spacing={2}
        sx={{ mb: 2 }}
      >
        <Controller
          name="categories"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <CategorySearch
              field={field}
              error={error?.message}
              sx={{ flex: 1 }}
            />
          )}
        />
        <Controller
          name="location"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <LocationSelect
              field={field}
              error={error?.message}
              sx={{ flex: 1 }}
            />
          )}
        />

        <Button
          variant="contained"
          startIcon={<SearchIcon />}
          size="large"
          type="submit"
          sx={{ py: { sm: 1.79 } }}
        >
          Search
        </Button>
      </Stack>
      <UsersMap />
    </>
  );
}

export default UsersList;
