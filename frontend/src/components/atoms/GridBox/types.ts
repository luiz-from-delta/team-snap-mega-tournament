export type ContainerSettings = {
  isCentered?: boolean;
  maxWidth?: "auto" | `${number}px` | `${number}rem` | `${number}vw` | number;
};

export type GridBoxProps = {
  align?: "start" | "center" | "end" | "stretch";
  as?: keyof HTMLElementTagNameMap | React.FunctionComponent;
  children: React.ReactNode;
  className?: string;
  cols: number;
  container?: ContainerSettings;
  gap?: `${number}${"px" | "rem"}`;
  justify?: "around" | "between" | "center" | "end" | "evenly" | "start";
  minWidth?: number;
  style?: React.CSSProperties;
  width?: "auto" | "full" | `${number}${"px" | "rem"}`;
};
