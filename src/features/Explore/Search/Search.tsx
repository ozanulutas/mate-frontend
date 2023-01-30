import { useDispatch } from "react-redux";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  searchSchema,
  SearchSchemaType,
} from "src/features/Explore/validation";
import {
  getUsersRequest,
  setSelectedCategories,
} from "src/features/Explore/slice";

import { Search as SearchIcon } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import LocationSelect from "./LocationSelect";
import CategorySearch from "./CategorySearch";
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
    const selectedCategories = categories.map((category) => category.id);

    dispatch(
      getUsersRequest({
        lon,
        lat,
        categories: selectedCategories,
        distance: distance * 1000,
      })
    );
    dispatch(setSelectedCategories(selectedCategories));
  };

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      direction={{ xs: "column", sm: "row" }}
      alignItems={{ sm: "flex-start" }}
      spacing={2}
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

      <Button
        type="submit"
        variant="outlined"
        size="large"
        startIcon={<SearchIcon />}
        sx={{ py: { sm: 1.75 } }}
      >
        Search
      </Button>
    </Stack>
  );
}

export default Search;
