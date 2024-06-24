import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MenuWhereUniqueInput } from "../menu/MenuWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type MenuItemWhereInput = {
  category?: CategoryWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  menu?: MenuWhereUniqueInput;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
};
