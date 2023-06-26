import React, { useMemo } from "react";

import { GridBoxProps } from "./types";

import * as sc from "./styled";

export const GridBox: React.FC<GridBoxProps> = ({
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
    <sc.GridBox
      {...props}
      as={as}
      className={className}
      style={{ width: elementWidth, ...style }}
    >
      {children}
    </sc.GridBox>
  );
};
