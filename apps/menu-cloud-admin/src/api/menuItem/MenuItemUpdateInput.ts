import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { MenuWhereUniqueInput } from "../menu/MenuWhereUniqueInput";

export type MenuItemUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  menu?: MenuWhereUniqueInput | null;
  name?: string | null;
  price?: number | null;
};
