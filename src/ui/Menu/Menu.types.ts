import { ReactNode, CSSProperties } from "react";
import { IconList } from "../FontIcon";
import { FixedPositions } from "../types";

export interface MenuProps {
  /**
   * This is the animation position for the list that appears
   */
  position?: FixedPositions;

  /**
   * An id to provide to the menu's container
   */
  id?: string;

  /**
   * Any children to render in the menu's list. This should normally be ListItem
   */
  children?: ReactNode;

  /**
   * An optional style to apply to the main container for the menu.
   */
  style?: CSSProperties;

  /**
   * The label to use and display for the menu
   */
  label?: string;

  /**
   * The icon to use for the menu
   */
  icon?: ReactNode;

  /**
   * An optional function to call when en element in the menu has been clicked.
   */
  onClick?: () => void;

  /**
   *
   */
  visible?: boolean;
}

export interface MenuButtonProps {
  /**
   * This is the animation position for the menu's list
   */
  position?: FixedPositions;

  /**
   * An id to provide to the menu's container. This is required for accessibility as it generates the aria- attributes for dynamic content.
   */
  id?: string;

  /**
   * The icon to use for the menu button.
   */
  icon?: ReactNode | IconList;

  /**
   * This should be the children to use in the Button that gets created as the menu's toggle.
   */
  children?: ReactNode;

  /**
   * An optional style to apply to the list.
   */
  style?: CSSProperties;

  /**
   * An optional class name to apply to the main container for the menu.
   */
  className?: string;

  /**
   * An optional function to call when button menu is clicked.
   */
  onClick?: () => void;

  visible?: boolean;
}
