import React, { useMemo } from "react";

import { FlexBoxProps } from "./types";

import * as sc from "./styled";

export const FlexBox: React.FC<FlexBoxProps> = ({
  as,
  children,
  className,
  style,
  width = "auto",
  ...props
}) => {
  const elementWidth = useMemo(() => {
    if (style && "width" in style) {
      return style.width;
    }

    if (width === "full") {
      return "100%";
    }

    return width;
  }, [style?.width, width]);

  return (
    <sc.FlexBox
      {...props}
      as={as}
      className={className}
      style={{ width: elementWidth, ...style }}
    >
      {children}
    </sc.FlexBox>
  );
};
