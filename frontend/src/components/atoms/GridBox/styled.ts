import { css, styled } from "styled-components";
import { GridBoxProps } from "./types";
import { parseProps } from "./utils";

export const GridBox = styled("div")<GridBoxProps>`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.cols},
    minmax(${(props) => props.minWidth ?? 0}px, 1fr)
  );

  ${(props) => {
    const { align, gap, justify, margin, maxWidth } = parseProps(props);

    return css`
      align-items: ${align};
      justify-content: ${justify};
      gap: ${gap};
      margin: ${margin};
      max-width: ${maxWidth};
    `;
  }}
`;
