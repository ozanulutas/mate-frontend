import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getCategoriesRequest } from "../slice";

import CategorySelect from "./CategorySelect";
import SelectedCategories from "./SelectedCategories/SelectedCategories";

function CategorySettings() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesRequest());
  }, [dispatch]);

  return (
    <>
      <CategorySelect />
      <SelectedCategories />
    </>
  );
}

export default CategorySettings;
