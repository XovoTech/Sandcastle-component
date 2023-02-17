import * as React from "react";
import { FontIconProps } from "./FontIcon.types";
import Icon from '@mui/material/Icon'

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
}) => {

  return (
    <Icon
      data-testid="Components-FontIcon"
      onClick={onClick}
      className={className}
      style={style}
    >
      {children}
    </Icon>
  )
};

export default FontIcon;
