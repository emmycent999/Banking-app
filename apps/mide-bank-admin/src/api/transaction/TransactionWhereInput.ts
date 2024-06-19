import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TransactionWhereInput = {
  account?: AccountWhereUniqueInput;
  amount?: FloatNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  transactionDate?: DateTimeNullableFilter;
  transactionType?: "Option1";
};
