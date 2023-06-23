import { styled } from "styled-components";

export const Input = styled("input")`
  width: 100%;
  height: 2.75rem;
  border-radius: 4px;

  background-color: ${(props) => props.theme.colors.gray[50]};

  border: 1px solid ${(props) => props.theme.colors.gray[200]};

  padding: 0 1.25rem;

  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.gray[700]};

  transition: border-color 400ms ease;

  box-sizing: border-box;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
  }
`;
