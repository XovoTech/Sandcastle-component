import { CSSProperties } from "react";

export const generateCellStyle: (props: any) => CSSProperties = ({
  grow = 0,
  basis = "auto",
  align = "auto",
  order = 0,
}) => ({
  order: order,
  flexGrow: grow,
  flexBasis: basis,
  alignSelf: align === "start" || align === "end" ? `flex-${align}` : align,
});

export const generateGridStyle: (props: any) => CSSProperties = ({
  wrap,
  justify,
  align,
}) => ({
  display: "flex",
  flexWrap: wrap ? "wrap" : "nowrap",
  justifyContent:
    justify === "start" || justify === "end" ? `flex-${justify}` : justify,
  alignContent: align === "start" || align === "end" ? `flex-${align}` : align,
});
