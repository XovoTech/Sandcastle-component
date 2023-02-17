import { ReactNode } from "react";

import { IconList } from "../FontIcon/FontIcon.types";

export interface ListItemProps {
  /**
   * An icon to display on the left side of the list item
   */
  leftIcon?: IconList;

  /**
   * The icon to use in the list item (works the same as leftIcon)
   */
  icon?: IconList;

  /**
   * An icon to display on the right side of the list item
   */
  rightIcon?: IconList;

  /**
   * Triggered when the list item is clicked
   */
  onClick?: () => void;

  /**
   * The content to display in the list item
   */
  children?: ReactNode;
}
