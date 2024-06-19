import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type BillCreateInput = {
  account?: AccountWhereUniqueInput | null;
  amount?: number | null;
  billNumber?: string | null;
  dueDate?: Date | null;
  isPaid?: boolean | null;
  paymentDate?: Date | null;
};
