import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type TransactionUpdateInput = {
  account?: AccountWhereUniqueInput | null;
  amount?: number | null;
  description?: string | null;
  transactionDate?: Date | null;
  transactionType?: "Option1" | null;
};
