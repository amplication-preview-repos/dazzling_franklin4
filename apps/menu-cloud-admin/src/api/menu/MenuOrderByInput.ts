import { SortOrder } from "../../util/SortOrder";

export type MenuOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  restaurantId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
