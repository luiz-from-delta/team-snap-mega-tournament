export type ContainerSettings = {
  isCentered?: boolean;
  maxWidth?: "auto" | `${number}px` | `${number}rem` | `${number}vw` | number;
};

export type FlexBoxProps = {
  align?: "start" | "center" | "end";
  as?: keyof HTMLElementTagNameMap | React.FunctionComponent;
  children: React.ReactNode;
  className?: string;
  container?: ContainerSettings;
  direction?: "column" | "row";
  gap?: `${number}${"px" | "rem"}`;
  justify?: "around" | "between" | "center" | "end" | "evenly" | "start";
  style?: React.CSSProperties;
  width?: "auto" | "full" | `${number}${"px" | "rem"}`;
};
