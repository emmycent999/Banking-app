import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";

export const BillEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
