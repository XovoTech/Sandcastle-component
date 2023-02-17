import * as React from "react";
import { FontIcon as FontIconMD } from "react-md";
import { FontIconProps } from "./FontIcon.types";

/**
 * This component uses various font libraries to render an icon.
 * @param {object} props The props
 * @returns {function} The component
 */
const FontIcon: React.FC<FontIconProps> = ({
  style = {},
  className = "",
  onClick = () => null,
  children,
}) => (
  <FontIconMD
    data-testid="Components-FontIcon"
    style={style}
    onClick={onClick}
    className={className}
  >
    {children}
  </FontIconMD>
);

export default FontIcon;