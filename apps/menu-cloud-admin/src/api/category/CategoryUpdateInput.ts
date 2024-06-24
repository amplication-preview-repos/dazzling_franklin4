import { MenuItemUpdateManyWithoutCategoriesInput } from "./MenuItemUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  menuItems?: MenuItemUpdateManyWithoutCategoriesInput;
  name?: string | null;
};
