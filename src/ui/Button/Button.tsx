import * as React from "react";
import { Button as ButtonMD, FontIcon } from "react-md";

import btnStyle, { getBackgroundColor, getStyle, ButtonWrapper } from "./style";

import { ButtonProps } from "./Button.types";
import { FixedPositions } from "../types";

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
  fixedPosition = FixedPositions.TOP_LEFT,
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
  const bStyle: { backgroundColor: string } = getBackgroundColor({
    transparent,
    secondary,
    primary,
    tertiary,
    disabled,
    negative,
  });
  const btnSizeStyle = small && !large ? btnStyle.smallSize : null;
  const btnSizeTextStyle = small && !large ? btnStyle.smallTextSize : null;

  if (icon) {
    return (
      <ButtonMD
        // icon
        // fixed={fixed}
        // floating={floating}
        // transparent={transparent ? "true" : undefined}
        // small={small ? small.toString() : undefined}
        // large={large ? true : undefined}
        // fixedPosition={fixedPosition}
        style={getStyle({
          transparent,
          secondary,
          primary,
          tertiary,
          disabled,
          negative,
          fixedPosition,
          style,
        })}
        onClick={() => {
          if (!disabled) onClick()
        }}
        className={className}
      >
        {children}
      </ButtonMD>
    );
  }

  return (
    <ButtonWrapper
      onClick={() => {
        if (!disabled) onClick()
      }}
      style={{ ...btnSizeStyle, ...style, ...bStyle }}
      className={className}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {iconLeft && (
          <div style={{ alignSelf: "center" }}>
            <FontIcon style={{ ...btnStyle.iconLeft, ...style }}>
              {iconLeft}
            </FontIcon>
          </div>
        )}

        {iconRight && (
          <div style={{ alignSelf: "center", order: 1 }}>
            <FontIcon style={{ ...btnStyle.iconRight, ...style }}>
              {iconRight}
            </FontIcon>
          </div>
        )}

        <div style={{ alignSelf: "center" }}>
          <span style={{ ...btnStyle.text, ...style, ...btnSizeTextStyle }}>
            {children}
          </span>
        </div>
      </div>
    </ButtonWrapper>
  );
};

export default Button;
