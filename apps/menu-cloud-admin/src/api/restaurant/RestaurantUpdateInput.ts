import { MenuUpdateManyWithoutRestaurantsInput } from "./MenuUpdateManyWithoutRestaurantsInput";

export type RestaurantUpdateInput = {
  address?: string | null;
  email?: string | null;
  menus?: MenuUpdateManyWithoutRestaurantsInput;
  name?: string | null;
  phone?: string | null;
};
