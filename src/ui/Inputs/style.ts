import { CSSProperties } from "react";

const style: {
  container: CSSProperties;
  textInput: CSSProperties;
  textInputLabel: CSSProperties;
  textInputLarge: CSSProperties;
  textInputLabelLarge: CSSProperties;
  iconLeft: CSSProperties;
  iconRight: CSSProperties;
  selectField: CSSProperties;
} = {
  container: { textAlign: "left" },
  textInput: {
    padding: 15,
    border: "1px solid #DBDBDB",
    background: "transparent",
    borderRadius: 3,
    display: "block",
    width: "100%",
    marginBottom: 10,
    fontSize: "11pt",
    outline: "none",
  },
  textInputLabel: {
    textTransform: "uppercase",
    fontSize: 13,
    color: "#666",
    display: "inline-block",
    marginTop: 20,
    marginBottom: 5,
  },
  textInputLarge: {
    padding: 15,
    border: "none",
    background: "transparent",
    borderBottom: "1px solid #DBDBDB",
    display: "block",
    width: "100%",
    marginBottom: 10,
    fontSize: 24,
    textAlign: "center",
    outline: "none",
  },
  textInputLabelLarge: {
    fontSize: 24,
    fontFamily: "Open Sans !important",
    fontWeight: 300,
    color: "#999",
    display: "block",
    marginTop: 20,
    marginBottom: -50,
    textAlign: "center",
    zIndex: -1,
  },
  iconLeft: {
    position: "absolute",
    margin: 15,
  },
  iconRight: {
    margin: 15,
    marginBottom: -37,
    float: "right",
  },
  selectField: {
    padding: "10px 15px",
    border: "1px solid #DBDBDB",
    borderRadius: 3,
    display: "block",
    width: "100%",
    marginBottom: 10,
    fontSize: "11pt",
    outline: "none",
    textAlign: "left",
    color: "#666",
  },
};

export default style;
