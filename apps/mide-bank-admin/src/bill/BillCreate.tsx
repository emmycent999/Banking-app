import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";

export const BillCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="account.id" reference="Account" label="Account">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <NumberInput label="amount" source="amount" />
        <TextInput label="billNumber" source="billNumber" />
        <DateTimeInput label="dueDate" source="dueDate" />
        <BooleanInput label="isPaid" source="isPaid" />
        <DateTimeInput label="paymentDate" source="paymentDate" />
      </SimpleForm>
    </Create>
  );
};
