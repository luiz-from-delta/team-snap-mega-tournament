import React from "react";
import { FlexBox } from "../FlexBox";
import { TextInput } from "../TextInput";
import { FormFieldProps } from "./types";
import * as sc from "./styles";
import { useTheme } from "styled-components";

export const FormField: React.FC<FormFieldProps> = ({
  isRequired = true,
  label,
  name,
  onChange,
  placeholder,
  value,
}) => {
  const theme = useTheme();

  return (
    <sc.Field direction="column" gap="0.5rem" width="384px">
      <label htmlFor={name}>
        {label}
        {isRequired && (
          <span style={{ color: theme?.colors.danger, marginLeft: 4 }}>*</span>
        )}
      </label>
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
