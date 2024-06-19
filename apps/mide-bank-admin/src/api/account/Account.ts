import { Bill } from "../bill/Bill";
import { Transaction } from "../transaction/Transaction";
import { User } from "../user/User";

export type Account = {
  accountNumber: string | null;
  accountType?: "Option1" | null;
  balance: number | null;
  bills?: Array<Bill>;
  createdAt: Date;
  id: string;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  user?: User | null;
};
