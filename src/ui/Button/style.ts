import { CSSProperties } from "react";
import theme from "../theme";
import styled from "styled-components";
import { FixedPositions } from "../types";

const style: {
  iconButton: CSSProperties;
  text: CSSProperties;
  iconLeft: CSSProperties;
  iconRight: CSSProperties;
  smallSize: CSSProperties;
  smallTextSize: CSSProperties;
} = {
  iconButton: {
    cursor: "pointer",
    color: "white",
  },
  text: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  iconLeft: {
    color: "white",
    paddingRight: 5,
  },
  iconRight: {
    color: "white",
    paddingLeft: 5,
  },
  smallSize: {
    padding: "5px 18px",
  },
  smallTextSize: {
    fontSize: 13,
    fontWeight: "bold",
  },
};

export const ButtonWrapper = styled.button`
  padding: 12px 50px;
  border: 0;
  border-radius: 30px;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  &:hover {
    opacity: 0.9;
  }
`;

export const getBackgroundColor = ({
  transparent = false,
  secondary = false,
  primary = false,
  tertiary = false,
  disabled = false,
  negative = false,
}) => {
  let backgroundColor = "transparent";
  if (transparent) backgroundColor = "transparent";
  if (secondary) backgroundColor = theme.secondaryColor;
  if (primary) backgroundColor = theme.primaryColor;
  if (tertiary) backgroundColor = theme.tertiaryColor;
  if (disabled) backgroundColor = theme.disabledColor;
  if (negative) backgroundColor = theme.disabledColor;

  return { backgroundColor };
};

export const getStyle = (props: any) => ({
  ...style.iconButton,
  ...getBackgroundColor(props),
  ...props.style,
  ...(props.fixedPosition === FixedPositions.BOTTOM_RIGHT
    ? { bottom: 55, right: 100 }
    : {}),
});

export default style;
