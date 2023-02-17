import * as React from "react";
import { FontIcon, ListItem as ListItemMD } from "react-md";
import style from "./style";

import { ListItemProps } from "./ListItem.types";

/**
 * This component lets you display multiple line items vertically as a single continuous element.
 * @param {object} props The props
 * @returns {function} The component
 */
const ListItem: React.FC<ListItemProps> = ({
  leftIcon,
  icon,
  rightIcon,
  onClick = () => null,
  children,
}) => {
  const conditionalLIcon = (leftIcon || icon) && {
    leftIcon: <FontIcon>{leftIcon || icon}</FontIcon>,
  };

  const conditionalRIcon = rightIcon && {
    rightIcon: <FontIcon>{rightIcon}</FontIcon>,
  };

  return (
    <ListItemMD
      data-testid="Components-ListItem"
      onClick={onClick}
      {...conditionalLIcon}
      {...conditionalRIcon}
      primaryText={children}
      style={style}
    >
      &nbsp;
    </ListItemMD>
  );
};

export default ListItem;
