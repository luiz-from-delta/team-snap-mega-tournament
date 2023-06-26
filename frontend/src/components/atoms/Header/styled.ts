import { styled } from "styled-components";

export const Header = styled("div")`
  width: 100%;
  height: 4.6875rem;

  margin-bottom: 2.5rem;

  background-color: #fff;

  box-shadow: 0px 0px 32px rgba(15, 15, 18, 0.12);

  display: flex;
  align-items: center;

  & > div {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
`;
