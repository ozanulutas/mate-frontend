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
import { Button, Stack } from "@mui/material";
import CategorySearch from "./CategorySearch";

function Search() {
  const dispatch = useDispatch();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      categories: [],
    },
    resolver: yupResolver(searchSchema),
  });

  const onSubmit: SubmitHandler<SearchSchemaType> = ({ categories }) => {
    const selectedCategories = categories.map((category) => category.id);

    dispatch(getUsersRequest(selectedCategories));
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
