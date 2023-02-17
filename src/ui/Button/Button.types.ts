import { CSSProperties } from "react";
import { IconList } from "../FontIcon";
import { FixedPositions } from "../types";

export interface ButtonProps {
  /**
   * An optional className to apply to the button.
   */
  className?: string;

  /**
   * Whether or not the Button should be styled as an icon.
   */
  icon?: boolean;

  /**
   * Whether or not to show the button as a small button
   */
  small?: boolean;

  /**
   * Whether or not to show the button as a large button
   */
  large?: boolean;

  /**
   * Wheter or not to show the Button as a floating Button
   */
  floating?: boolean;

  /**
   * Whether or not the floating button should be fixed to the page. This prop can only be enabled if the floating prop is true.
   */
  fixed?: boolean;

  /**
   * Whether or not the button should be styled with the primary color (from the theme).
   */
  primary?: boolean;

  /**
   * Whether or not the button should be styled with the secondary color (from the theme).
   */
  secondary?: boolean;

  /**
   * Whether or not the button should be transparent
   */
  transparent?: boolean;

  /**
   * Whether or not the button should be styled with the tertiary color (from the theme).
   */
  tertiary?: boolean;

  /**
   * Whether or not the button is disabled
   */
  disabled?: boolean;

  /**
   * Whether or not the button should be styled with the negative color (from the theme).
   */
  negative?: boolean;

  /**
   * The position that the floating button should be fixed to the page. It will either be
   * fixed to the top right, top left, bottom right, or bottom left of the page.
   * This prop is only used if the floating prop and fixed prop are true.
   */
  fixedPosition?: FixedPositions;

  /**
   * The icon that should be displayed on the left side of the button
   */
  iconLeft?: IconList;

  /**
   * The icon that should be displayed on the right side of the button
   */
  iconRight?: IconList;

  /**
   * The content to display inside the button.
   * When the button type is icon, it can be used to render a FontIcon
   */
  children?: React.ReactNode | IconList;

  /**
   * The css styles to use for the button
   */
  style?: CSSProperties;

  /**
   * Triggers when the button is clicked
   */
  onClick?: () => void;
}
