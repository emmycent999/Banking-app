import { SortOrder } from "../../util/SortOrder";

export type BillOrderByInput = {
  accountId?: SortOrder;
  amount?: SortOrder;
  billNumber?: SortOrder;
  createdAt?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  isPaid?: SortOrder;
  paymentDate?: SortOrder;
  updatedAt?: SortOrder;
};
