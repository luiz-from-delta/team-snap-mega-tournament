import React from "react";
import { FlexBox } from "../FlexBox";
import { TextInput } from "../TextInput";
import { FormFieldProps } from "./types";
import * as sc from "./styles";

export const FormField: React.FC<FormFieldProps> = ({
  isRequired = true,
  label,
  name,
  onChange,
  placeholder,
  value,
}) => {
  return (
    <sc.Field direction="column" gap="0.5rem" width="384px">
      <label htmlFor={name}>{label}</label>
      <TextInput
        isRequired={isRequired}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </sc.Field>
  );
};
