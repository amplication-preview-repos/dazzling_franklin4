import { Menu } from "../menu/Menu";

export type Restaurant = {
  address: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  menus?: Array<Menu>;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
