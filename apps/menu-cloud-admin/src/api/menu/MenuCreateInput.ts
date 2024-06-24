import { MenuItemCreateNestedManyWithoutMenusInput } from "./MenuItemCreateNestedManyWithoutMenusInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type MenuCreateInput = {
  description?: string | null;
  menuItems?: MenuItemCreateNestedManyWithoutMenusInput;
  restaurant?: RestaurantWhereUniqueInput | null;
  title?: string | null;
};
