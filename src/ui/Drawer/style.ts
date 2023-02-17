import { CSSProperties } from "react";
import theme from "../theme";

import { DrawerPosition } from "./Drawer.types";

export const getPositionStyle: (
  position: DrawerPosition,
  inline?: boolean
) => CSSProperties = (position, inline = false) => {
  switch (position) {
    case DrawerPosition.LEFT:
      if (inline) return style.inlineStyle;
      else return { left: 0 };
    case DrawerPosition.RIGHT:
      return { right: 0 };
    case DrawerPosition.TOP:
      return { top: 0, width: "100%", height: 200 };
    case DrawerPosition.BOTTOM:
      return { bottom: 0, width: "100%", height: 200 };
    default:
      return { left: 0 };
  }
};

const style: {
  overlay: CSSProperties;
  drawer: CSSProperties;
  inlineStyle: CSSProperties;
  closeBtn: CSSProperties;
} = {
  overlay: {
    position: "fixed",
    background: theme.darkColor,
    opacity: "0.8",
    height: "100%",
    width: "100%",
    zIndex: 100,
  },
  drawer: {
    top: 0,
    width: 301,
    position: "fixed",
    height: "100vh",
    background: "white",
    zIndex: 101,
    textTransform: "none",
    boxShadow: `0 0 5px 1px rgb(0,0,0,0.25)`,
  },
  inlineStyle: {
    border: "1px solid #CCC",
    height: "auto",
  },
  closeBtn: {
    float: "right",
    color: theme.darkColor,
  },
};

export default style;
