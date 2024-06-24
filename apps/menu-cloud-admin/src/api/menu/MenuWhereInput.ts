import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MenuItemListRelationFilter } from "../menuItem/MenuItemListRelationFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type MenuWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  menuItems?: MenuItemListRelationFilter;
  restaurant?: RestaurantWhereUniqueInput;
  title?: StringNullableFilter;
};
