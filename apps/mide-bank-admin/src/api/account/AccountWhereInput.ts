import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BillListRelationFilter } from "../bill/BillListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountWhereInput = {
  accountNumber?: StringNullableFilter;
  accountType?: "Option1";
  balance?: FloatNullableFilter;
  bills?: BillListRelationFilter;
  id?: StringFilter;
  transactions?: TransactionListRelationFilter;
  user?: UserWhereUniqueInput;
};
