import { Category } from "src/types";

import { Stack, Chip } from "@mui/material";

type CategoryChipsProps = {
  categories: Category[];
  matchingCategories?: Category["id"][];
};

function CategoryChips({
  categories = [],
  matchingCategories = [],
}: CategoryChipsProps) {
  const highlightCategory = (categoryId: number) =>
    matchingCategories?.some((id) => categoryId === id);

  return (
    <Stack direction="row" sx={{ flexWrap: "wrap", gap: 0.5 }}>
      {categories.map(({ id, name }) => (
        <Chip
          key={id}
          label={name}
          color={highlightCategory(id) ? "primary" : "default"}
          size="small"
        />
      ))}
    </Stack>
  );
}

export default CategoryChips;
