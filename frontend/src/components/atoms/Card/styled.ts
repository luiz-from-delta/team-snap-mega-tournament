import { styled } from "styled-components";
import { CardProps } from "./types";

export const Card = styled("div")<CardProps>`
  border-radius: 4px;
  box-shadow: ${(props) => props.theme.shadows.card};
  padding: ${(props) => props.padding ?? "3rem 4.6875rem"};
`;
