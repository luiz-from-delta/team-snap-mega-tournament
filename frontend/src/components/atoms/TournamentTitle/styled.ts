import { styled } from "styled-components";

export const Title = styled("header")`
  width: 100%;

  display: flex;
  align-items: center;
  column-gap: 0.6667rem;

  font-family: ${(props) => props.theme.fonts.orienta};
  font-size: 1.75rem;

  color: ${(props) => props.theme.colors.primary};

  & svg {
    width: 1.125rem;
    height: 1.125rem;

    background-color: rgba(255, 90, 0, 0.1);

    border-radius: 50%;

    padding: 1.125rem;
  }
`;
