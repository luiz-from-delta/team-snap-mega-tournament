type Padding = `${number}${"px" | "rem"}`;

export type CardProps = {
  children: React.ReactNode;
  padding?:
    | Padding
    | `${Padding} ${Padding}`
    | `${Padding} ${Padding} ${Padding} ${Padding}`;
  style?: React.CSSProperties;
};
