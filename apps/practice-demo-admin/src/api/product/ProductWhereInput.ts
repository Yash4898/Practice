import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type ProductWhereInput = {
  company?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  orders?: OrderListRelationFilter;
};
