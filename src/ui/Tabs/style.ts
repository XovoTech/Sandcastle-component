import { CSSProperties } from "react";
import theme from "../theme";
import { TabsProps } from "./Tabs.types";

const style: {
  tabs: CSSProperties;
  tab: CSSProperties;
  tabActive: CSSProperties;
  tabActiveVertical: CSSProperties;
} = {
  tabs: {
    width: "100%",
    backgroundColor: theme.darkColor,
    color: "white",
  },
  tab: {
    padding: "10px 30px",
    textTransform: "uppercase",
    fontSize: 13,
    cursor: "pointer",
    textAlign: "center",
    color: "#333",
  },
  tabActive: {
    fontWeight: "bold",
    borderBottom: `2px solid ${theme.secondaryColor}`,
  },
  tabActiveVertical: {
    fontWeight: "bold",
    backgroundColor: "#DDD",
  },
};

export const generateBackgroundColors: (props: TabsProps) => CSSProperties = ({
  transparent = false,
}) => {
  if (transparent) {
    return {
      backgroundColor: "transparent",
      overflow: "hidden",
      color: theme.darkColor,
    };
  }
  return { tabs: null, tab: null };
};

export default style;
