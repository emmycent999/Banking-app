import { Bill as TBill } from "../api/bill/Bill";

export const BILL_TITLE_FIELD = "billNumber";

export const BillTitle = (record: TBill): string => {
  return record.billNumber?.toString() || String(record.id);
};
