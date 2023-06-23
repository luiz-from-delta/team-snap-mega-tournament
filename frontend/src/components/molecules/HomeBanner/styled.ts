import { styled } from "styled-components";

export const Banner = styled("div")`
  h2 {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.gray[900]};
    line-height: 1.125rem;
  }
`;
