import { MenuItem } from "../menuItem/MenuItem";

export type Category = {
  createdAt: Date;
  id: string;
  menuItems?: Array<MenuItem>;
  name: string | null;
  updatedAt: Date;
};
