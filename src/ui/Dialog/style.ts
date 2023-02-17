import { CSSProperties } from "react";
import theme from "../theme";

const style: {
  overlay: CSSProperties;
  viewPort: CSSProperties;
  fullscreen: CSSProperties;
  closeBtn: CSSProperties;
  dialog: CSSProperties;
  dialogContent: CSSProperties;
  dialogTitle: CSSProperties;
  dialogBody: CSSProperties;
  dialogFooter: CSSProperties;
} = {
  overlay: {
    background: theme.darkColor,
    opacity: 0.8,
    position: "fixed",
  },
  viewPort: {
    height: "100vh",
    width: "100vw",
    position: "absolute",
    zIndex: 100,
    top: 0,
    left: 0,
  },
  fullscreen: {
    borderRadius: 0,
    marginTop: 0,
  },
  closeBtn: {
    color: theme.darkColor,
    position: "absolute",
    right: 0,
  },
  dialog: {
    position: "absolute",
    background: "white",
    zIndex: 101,
    borderRadius: 10,
  },
  dialogContent: {
    padding: 40,
  },
  dialogTitle: {
    textAlign: "center",
    padding: "10px 0 20px",
  },
  dialogBody: {
    textAlign: "center",
  },
  dialogFooter: {
    padding: "20px 0 0",
  },
};

export default style;
