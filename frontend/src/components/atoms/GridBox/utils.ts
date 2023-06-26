import { GridBoxProps } from "./types";

type Props = Pick<GridBoxProps, "align" | "container" | "gap" | "justify">;

type Justify =
  | "space-around"
  | "space-between"
  | "center"
  | "end"
  | "space-evenly"
  | "start";

type ReturnedProps = {
  align: Props["align"];
  gap: Props["gap"];
  justify: Justify;
  margin: string;
  maxWidth: string;
};

export function parseProps(props: Props): ReturnedProps {
  const { align, container, gap, justify } = props;

  const { isCentered = false, maxWidth = "auto" } = container || {};

  return {
    align: align ?? "start",
    gap: gap ?? "0px",
    justify: (justify?.replace(/around|between|evenly/, (match) => {
      return `space-${match}`;
    }) ?? "start") as Justify,
    margin: isCentered ? "0 auto" : "0",
    maxWidth: typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth,
  };
}
