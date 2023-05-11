import { useDispatch, useSelector } from "react-redux";

import { selectUserCategories } from "../../selectors";

import { Chip, List, ListItem } from "@mui/material";
import { Category } from "src/types";
import { removeCategoryRequest } from "../../slice";

function SelectedCategories() {
  const dispatch = useDispatch();
  const categories = useSelector(selectUserCategories);

  const handleDelete = (categoryId: Category["id"]) => {
    dispatch(removeCategoryRequest(categoryId));
  };

  return (
    <List sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
      {categories.map(({ id, name }) => (
        <ListItem disableGutters disablePadding key={id} sx={{ flex: 0 }}>
          <Chip
            // variant="outlined"
            label={name}
            onDelete={() => handleDelete(id)}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default SelectedCategories;
