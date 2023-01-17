import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { selectCategorySearchData } from "../selectors";
import { searchCategoryRequest } from "../slice";

function CategorySearch() {
  const dispatch = useAppDispatch();
  const categorySearchData = useAppSelector(selectCategorySearchData);
  const [inputValue, setInputValue] = useState("");

  const handleScroll = (event: React.SyntheticEvent) => {
    const listboxNode = event.currentTarget;
    if (
      listboxNode.scrollTop + listboxNode.clientHeight ===
      listboxNode.scrollHeight
    ) {
      console.log("category pagination");
    }
  };

  useEffect(() => {
    if (inputValue === "") {
      return;
    }

    dispatch(searchCategoryRequest({ name: inputValue }));
  }, [dispatch, inputValue]);

  return (
    <Autocomplete
      multiple
      limitTags={3}
      loading
      inputValue={inputValue}
      options={categorySearchData}
      getOptionLabel={(option) => option?.name}
      onChange={(e, val) => console.log(val)}
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
        />
      )}
    />
  );
}

export default CategorySearch;
