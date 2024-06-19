import { BillCreateNestedManyWithoutAccountsInput } from "./BillCreateNestedManyWithoutAccountsInput";
import { TransactionCreateNestedManyWithoutAccountsInput } from "./TransactionCreateNestedManyWithoutAccountsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountCreateInput = {
  accountNumber?: string | null;
  accountType?: "Option1" | null;
  balance?: number | null;
  bills?: BillCreateNestedManyWithoutAccountsInput;
  transactions?: TransactionCreateNestedManyWithoutAccountsInput;
  user?: UserWhereUniqueInput | null;
};
