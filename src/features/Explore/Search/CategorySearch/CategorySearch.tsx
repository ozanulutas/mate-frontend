import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ControllerRenderProps } from "react-hook-form";

import { selectCategories } from "src/features/Explore/selectors";
import { getCategoriesRequest } from "src/features/Explore/slice";

import { Autocomplete, SxProps, TextField } from "@mui/material";

type CategorySearchProps = {
  sx?: SxProps;
  field: ControllerRenderProps<any, any>;
  error?: string;
};

function CategorySearch({ sx, field, error }: CategorySearchProps) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const categories = useSelector(selectCategories);

  const handleScroll = (event: React.SyntheticEvent) => {
    const listboxNode = event.currentTarget;
    if (
      listboxNode.scrollTop + listboxNode.clientHeight ===
      listboxNode.scrollHeight
    ) {
      console.log("category pagination");
    }
  };

  const onChange = (
    e: React.SyntheticEvent<Element, Event>,
    val: unknown[]
  ) => {
    field.onChange(val);
  };

  useEffect(() => {
    if (inputValue === "") {
      return;
    }

    dispatch(getCategoriesRequest({ name: inputValue }));
  }, [dispatch, inputValue]);

  return (
    <Autocomplete
      {...field}
      sx={sx}
      multiple
      limitTags={3}
      loading
      inputValue={inputValue}
      getOptionLabel={(option) => option?.name}
      options={categories}
      onChange={onChange}
      onInputChange={(e, val) => setInputValue(val)}
      ListboxProps={{
        onScroll: handleScroll,
        style: {
          maxHeight: "200px",
        },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Categories"
          placeholder="Search Categories"
          error={!!error}
          helperText={error}
        />
      )}
    />
  );
}

export default CategorySearch;
