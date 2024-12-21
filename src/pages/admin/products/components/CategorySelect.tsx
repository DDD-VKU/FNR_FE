import React, { FC } from "react";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { ICategories, IProduct } from "@/utils/types";

export interface CategorySelectProps {
  categories: ICategories[];
  product: IProduct;
  handleChange: any;
}
const CategorySelect: FC<CategorySelectProps> = ({
  categories,
  product,
  handleChange,
}) => {
  return (
    <FormControl fullWidth required>
      <InputLabel id="category-id-label">Category </InputLabel>
      <Select
        labelId="category-id-label"
        id="category-id"
        value={product.categories_id || ""}
        label="Category"
        onChange={handleChange}
        name="categories_id"
        variant="outlined"
        type="number"
      >
        {categories.map((category: ICategories) => (
          <MenuItem key={category.id} value={category.id}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategorySelect;
