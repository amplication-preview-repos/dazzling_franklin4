import { MenuItem } from "../menuItem/MenuItem";
import { Restaurant } from "../restaurant/Restaurant";

export type Menu = {
  createdAt: Date;
  description: string | null;
  id: string;
  menuItems?: Array<MenuItem>;
  restaurant?: Restaurant | null;
  title: string | null;
  updatedAt: Date;
};
