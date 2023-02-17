import { CSSProperties } from "react";
import theme from "../theme";

const style: {
  dark: {
    toolbar: CSSProperties;
    title: CSSProperties;
    titleText: CSSProperties;
  };
  light: {
    toolbar: CSSProperties;
    title: CSSProperties;
    titleText: CSSProperties;
    leftActionsGroup: CSSProperties;
  };
} = {
  dark: {
    toolbar: {
      width: "100%",
      backgroundColor: theme.darkColor,
      padding: 5,
    },
    title: {
      width: "100%",
      position: "absolute",
      top: 0,
      height: 0,
      right: 0,
      textAlign: "center",
    },
    titleText: {
      color: "white",
      fontWeight: "bold",
      fontSize: 18,
      padding: 15,
      display: "inline-block",
    },
  },
  light: {
    toolbar: {
      width: "100%",
      backgroundColor: "white",
      padding: 5,
    },
    title: {
      width: "100%",
      position: "absolute",
      top: 0,
      height: 0,
      right: 0,
      textAlign: "center",
    },
    titleText: {
      color: theme.darkColor,
      fontWeight: "bold",
      fontSize: 18,
      padding: 20,
      display: "inline-block",
    },
    leftActionsGroup: {
      color: theme.darkColor,
    },
  },
};

export default style;
