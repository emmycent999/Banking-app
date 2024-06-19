import { Account } from "../account/Account";

export type Bill = {
  account?: Account | null;
  amount: number | null;
  billNumber: string | null;
  createdAt: Date;
  dueDate: Date | null;
  id: string;
  isPaid: boolean | null;
  paymentDate: Date | null;
  updatedAt: Date;
};
