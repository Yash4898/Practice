import { Decimal } from "decimal.js";
import { Product } from "../product/Product";
import { User } from "../user/User";

export type Order = {
  count: Decimal | null;
  createdAt: Date;
  id: string;
  product?: Product | null;
  updatedAt: Date;
  user?: User | null;
};
