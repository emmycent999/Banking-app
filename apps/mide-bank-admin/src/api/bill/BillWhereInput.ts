import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type BillWhereInput = {
  account?: AccountWhereUniqueInput;
  amount?: FloatNullableFilter;
  billNumber?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  isPaid?: BooleanNullableFilter;
  paymentDate?: DateTimeNullableFilter;
};
