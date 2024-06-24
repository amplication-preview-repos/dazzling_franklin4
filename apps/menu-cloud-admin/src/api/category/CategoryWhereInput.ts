import { StringFilter } from "../../util/StringFilter";
import { MenuItemListRelationFilter } from "../menuItem/MenuItemListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  menuItems?: MenuItemListRelationFilter;
  name?: StringNullableFilter;
};
