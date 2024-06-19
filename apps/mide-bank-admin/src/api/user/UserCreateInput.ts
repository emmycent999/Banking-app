import { AccountCreateNestedManyWithoutUsersInput } from "./AccountCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  accounts?: AccountCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  fullName?: string | null;
  lastName?: string | null;
  password: string;
  phoneNumber?: string | null;
  roles: InputJsonValue;
  username: string;
};
