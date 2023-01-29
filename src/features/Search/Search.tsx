import { useDispatch } from "react-redux";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { searchSchema, SearchSchemaType } from "./validation";

import { Search as SearchIcon } from "@mui/icons-material";
import LocationSelect from "./LocationSelect";
import CategorySearch from "./CategorySearch";
import { Box, Fab } from "@mui/material";
import { Stack } from "@mui/system";
import { getUsersRequest } from "./slice";
import DistanceSlider from "./DistanceSlider";

function Search() {
  const dispatch = useDispatch();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      categories: [],
      coordinates: "",
      distance: 20,
    },
    resolver: yupResolver(searchSchema),
  });

  const onSubmit: SubmitHandler<SearchSchemaType> = ({
    categories,
    distance,
    coordinates,
  }) => {
    const [lon, lat] = JSON.parse(coordinates);

    dispatch(
      getUsersRequest({
        lon,
        lat,
        categories: categories.map((category) => category.id),
        distance: distance * 1000,
      })
    );
  };

  return (
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
        name="coordinates"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <LocationSelect
            distanceSlider={
              <Controller
                name="distance"
                control={control}
                render={({ field }) => (
                  <Box sx={{ mx: 4, my: 5 }}>
                    <DistanceSlider field={field} />
                  </Box>
                )}
              />
            }
            field={field}
            error={error?.message}
            sx={{ flex: 1 }}
          />
        )}
      />

      <Fab type="submit" color="primary" aria-label="search">
        <SearchIcon />
      </Fab>
    </Stack>
  );
}

export default Search;
