import React from "react";

import * as sc from "./styled";

import { CardProps } from "./types";

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return <sc.Card {...props}>{children}</sc.Card>;
};
