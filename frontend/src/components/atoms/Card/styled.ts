import { styled } from "styled-components";

export const Card = styled("div")`
  border-radius: 4px;
  box-shadow: ${(props) => props.theme.shadows.card};
  padding: 3rem 4.6875rem;
`;
