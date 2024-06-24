import { MenuItemUpdateManyWithoutMenusInput } from "./MenuItemUpdateManyWithoutMenusInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type MenuUpdateInput = {
  description?: string | null;
  menuItems?: MenuItemUpdateManyWithoutMenusInput;
  restaurant?: RestaurantWhereUniqueInput | null;
  title?: string | null;
};
