import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MenuListRelationFilter } from "../menu/MenuListRelationFilter";

export type RestaurantWhereInput = {
  address?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  menus?: MenuListRelationFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
};
