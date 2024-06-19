import { BillUpdateManyWithoutAccountsInput } from "./BillUpdateManyWithoutAccountsInput";
import { TransactionUpdateManyWithoutAccountsInput } from "./TransactionUpdateManyWithoutAccountsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountUpdateInput = {
  accountNumber?: string | null;
  accountType?: "Option1" | null;
  balance?: number | null;
  bills?: BillUpdateManyWithoutAccountsInput;
  transactions?: TransactionUpdateManyWithoutAccountsInput;
  user?: UserWhereUniqueInput | null;
};
