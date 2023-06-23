import React from "react";

import * as sc from "./styled";
import { TextInputProps } from "./types";

export const TextInput: React.FC<TextInputProps> = ({
  isRequired = true,
  name,
  onChange,
  placeholder,
  value,
}) => {
  return (
    <sc.Input
      name={name}
      placeholder={placeholder}
      required={isRequired}
      value={value}
      onChange={onChange}
    />
  );
};
