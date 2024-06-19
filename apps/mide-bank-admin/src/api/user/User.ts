import { Account } from "../account/Account";
import { JsonValue } from "type-fest";

export type User = {
  accounts?: Array<Account>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  fullName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
