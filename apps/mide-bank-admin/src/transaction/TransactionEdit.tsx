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
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="account.id" reference="Account" label="Account">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <NumberInput label="amount" source="amount" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="transactionDate" source="transactionDate" />
        <SelectInput
          source="transactionType"
          label="transactionType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
