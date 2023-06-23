import React from "react";

import { ButtonProps } from "./types";

import * as sc from "./styled";

export const Button: React.FC<ButtonProps> = ({ children, icon, ...props }) => {
  return (
    <sc.Button {...props}>
      {icon}
      {children}
    </sc.Button>
  );
};
