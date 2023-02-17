import { CSSProperties } from "react";
import { get } from "lodash";
import settings from "../10mf/config";
import MuiToolTip from "@mui/material/Tooltip";

export const theme: {
  primaryColor: string;
  secondaryColor: string;
  disabledColor: string;
  tertiaryColor: string;
  darkColor: string;
  lightColor: string;
  altColors: string[];
} = {
  primaryColor: "#0082d2",
  secondaryColor: "#f14b59",
  disabledColor: "#5b5b5b",
  tertiaryColor: "#169e7d",
  darkColor: "#222",
  lightColor: "#ddd",
  altColors: [
    "#f26e81",
    "#ff5a4e",
    "#bfcd6b",
    "#80638e",
    "#77c7e5",
    "#ffaa9c",
    "#f8d46d",
    "#666666",
    "#6be1c3",
    "#f87759",
    "#9d79b4",
  ],
  ...get(settings, "app.colors", {}),
};

export const fieldset: CSSProperties = {
  border: "1px solid #ccc",
  marginBottom: 20,
  padding: "10px 15px",
  textAlign: "left",
};

export const ToolTip = MuiToolTip;

export default theme;
