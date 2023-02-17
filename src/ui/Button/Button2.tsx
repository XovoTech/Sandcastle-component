import * as React from "react";
import { Button as ButtonMUI, IconButton } from '@mui/material';
import Icon from '@mui/material/Icon'
import Fab from '@mui/material/Fab';
import theme from '@/ui/theme'
import { ButtonProps } from "./Button.types";
import { FixedPositions } from "../types";
import styles from './style'

/**
 * This component lets you display a button on the page with various features such as,
 * a icons, floating, colored, etc.
 * @param {object} props The props
 * @returns {function} The component
 */
const Button: React.FC<ButtonProps> = ({
  small = true,
  large = false,
  icon = false,
  fixed = false,
  floating = false,
  fixedPosition,
  transparent = false,
  primary = false,
  secondary = false,
  tertiary = false,
  disabled = false,
  negative,
  style = {},
  className = "",
  children,
  iconLeft,
  iconRight,
  onClick = () => null,
}) => {

  let color: "primary" | "secondary" | "inherit" | "default" = icon ? "inherit" : "primary";
  if (primary) color = "primary";
  if (secondary) color = "secondary";
  // if (tertiary) color = "?";
  if (negative) color = "default"

  let size: "small" | "medium" | "large" = "large"
  if (small) size = "small"
  if (large) size = "large"


  const classes = {

    ...style
  };

  const backgroundColor: string | undefined = React.useMemo(() => {
    if (tertiary) {
      return theme.tertiaryColor
    }
    if (primary) {
      return theme.primaryColor
    } if (secondary) {
      return theme.secondaryColor
    }
    if (negative) {
      return theme.lightColor
    }
  }, [tertiary, primary, secondary, negative])

  const root = {
    padding: "12px 50px",
    borderRadius: 30,
    ...styles.text,
    ...size === "small" ? { ...styles.smallSize, ...styles.smallTextSize } : {},
  }

  const fabStyle: React.CSSProperties = {
    backgroundColor,
    ...root,
    ...style,
    ...fixedPosition === FixedPositions.BOTTOM_RIGHT
      ? { position: 'fixed', bottom: 55, right: 100 }
      : {}
  }

  if (icon && (fixed || fixedPosition)) return (
    <Fab style={fabStyle} color={color} onClick={onClick} size={size}>
      <Icon>{children}</Icon>
    </Fab>
  )

  if (icon) return (
    <IconButton style={{ backgroundColor: fabStyle.backgroundColor }} size="medium" color={color} onClick={onClick}>
      <Icon>{children}</Icon>
    </IconButton>
  )


  return (
    <ButtonMUI
      style={{ ...root, backgroundColor, ...style }}
      size={size}
      onClick={onClick}
      disabled={disabled}
      variant={!transparent ? "contained" : "text"}
      disableElevation
      startIcon={iconLeft ? <Icon>{iconLeft}</Icon> : null}
      endIcon={iconRight ? <Icon>{iconRight}</Icon> : null}
    >
      {children}
    </ButtonMUI>
  )
}

export default Button;
