import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  accountId?: SortOrder;
  amount?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  transactionDate?: SortOrder;
  transactionType?: SortOrder;
  updatedAt?: SortOrder;
};
