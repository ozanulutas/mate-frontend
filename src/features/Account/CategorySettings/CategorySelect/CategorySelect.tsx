import { useDispatch, useSelector } from "react-redux";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { AddCategorySchemaType, addCategorySchema } from "./validation";
import { addCategoriesRequest } from "../../slice";
import { selectAddCategoriesStatus } from "../../selectors";

import { Add as AddIcon } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import CategorySearch from "src/features/Explore/Search/CategorySearch";
import { useEffect } from "react";
import { Status } from "src/constants";

function CategorySelect() {
  const dispatch = useDispatch();
  const addCategoriesStatus = useSelector(selectAddCategoriesStatus);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      categories: [],
    },
    resolver: yupResolver(addCategorySchema),
  });

  useEffect(() => {
    if (addCategoriesStatus === Status.LOADED) {
      reset();
    }
  }, [addCategoriesStatus, reset]);

  const onSubmit: SubmitHandler<AddCategorySchemaType> = ({ categories }) => {
    dispatch(
      addCategoriesRequest({ categoryIds: categories.map(({ id }) => id) })
    );
  };

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      direction={{ xs: "column", sm: "row" }}
      alignItems={{ sm: "flex-start" }}
      spacing={1}
    >
      <Controller
        name="categories"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <CategorySearch
            filterSelected
            field={field}
            error={error?.message}
            sx={{ flex: 1 }}
          />
        )}
      />
      <Button
        type="submit"
        size="large"
        variant="outlined"
        startIcon={<AddIcon />}
        sx={{ py: { sm: 1.75 } }}
      >
        Add
      </Button>
    </Stack>
  );
}

export default CategorySelect;
