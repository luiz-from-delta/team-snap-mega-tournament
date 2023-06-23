import { styled } from "styled-components";

export const Breadcrumb = styled("ul")`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 0.75rem;

  li {
    a {
      color: ${(props) => props.theme.colors.gray[900]};
    }

    &:last-child {
      font-weight: 700;
    }
  }
`;
