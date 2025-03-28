import { Order } from "../order/Order";

export type Product = {
  company: string;
  id: string;
  name: string;
  orders?: Array<Order>;
};
