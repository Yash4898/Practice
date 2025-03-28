import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  company: string;
  name: string;
  orders?: OrderCreateNestedManyWithoutProductsInput;
};
