import { CSSProperties } from "react";

export const style: {
  selectField: CSSProperties;
  menuStyleContainer: CSSProperties;
  menuStyle: CSSProperties;
} = {
  selectField: {
    padding: 10,
    color: "#666",
    border: "1px solid #DDD",
    borderRadius: 3,
    cursor: "pointer",
  },
  menuStyleContainer: {
    // maxHeight: 200,
    // overflowY: "scroll",
  },
  menuStyle: {
    width: "100%",
    textAlign: "left",
  },
};

export default style;
