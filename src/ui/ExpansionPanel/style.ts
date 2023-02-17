import { CSSProperties } from "react";

const style: {
  label: CSSProperties;
  inside: CSSProperties;
} = {
  label: {
    boxShadow: "none",
    backgroundColor: "transparent",
    margin: "5px 0",
    width: "100%",
  },
  inside: { paddingTop: 20 },
};

export const getLabelStyle: (
  style: CSSProperties
) => {
  iconStyle: CSSProperties;
  labelStyle: CSSProperties;
} = (style) => ({
  iconStyle: {
    ...style,
    width: 25,
    top: 7,
    position: "relative",
    display: "inline-block",
  },
  labelStyle: {
    display: "inline-block",
    padding: 15,
  },
});

export default style;
