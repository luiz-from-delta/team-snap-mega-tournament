import { css, styled } from "styled-components";
import { FlexBoxProps } from "./types";
import { parseProps } from "./utils";

export const FlexBox = styled("div")<FlexBoxProps>`
  display: flex;

  ${(props) => {
    const { align, direction, gap, justify, margin, maxWidth } =
      parseProps(props);

    return css`
      flex-direction: ${direction};
      align-items: ${align};
      justify-content: ${justify};
      gap: ${gap};
      margin: ${margin};
      max-width: ${maxWidth};
    `;
  }}
`;
