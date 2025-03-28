import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  count?: DecimalNullableFilter;
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
