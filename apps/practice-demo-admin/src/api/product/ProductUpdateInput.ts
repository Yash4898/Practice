import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  company?: string;
  name?: string;
  orders?: OrderUpdateManyWithoutProductsInput;
};
