import { styled } from "styled-components";
import { darken } from "polished";

export const Button = styled("button")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0.6667rem 1.5rem;

  gap: 0.625rem;

  box-shadow: ${(props) => props.theme.shadows.button};
  border-radius: 4px;

  background-color: ${(props) => props.theme.colors.secondary};

  color: ${(props) => props.theme.colors.gray[50]};

  cursor: pointer;

  transition: background-color ease 400ms;

  &:hover {
    background-color: ${(props) => darken(0.025)(props.theme.colors.secondary)};
  }
`;
