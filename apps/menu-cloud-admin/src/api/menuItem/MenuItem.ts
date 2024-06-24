import { Category } from "../category/Category";
import { Menu } from "../menu/Menu";

export type MenuItem = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  id: string;
  menu?: Menu | null;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
