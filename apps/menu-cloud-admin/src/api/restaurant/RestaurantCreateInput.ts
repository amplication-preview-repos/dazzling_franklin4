import { MenuCreateNestedManyWithoutRestaurantsInput } from "./MenuCreateNestedManyWithoutRestaurantsInput";

export type RestaurantCreateInput = {
  address?: string | null;
  email?: string | null;
  menus?: MenuCreateNestedManyWithoutRestaurantsInput;
  name?: string | null;
  phone?: string | null;
};
