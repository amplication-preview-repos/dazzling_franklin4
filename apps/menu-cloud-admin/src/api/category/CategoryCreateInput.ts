import { MenuItemCreateNestedManyWithoutCategoriesInput } from "./MenuItemCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  menuItems?: MenuItemCreateNestedManyWithoutCategoriesInput;
  name?: string | null;
};
