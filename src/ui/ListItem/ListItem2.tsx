import * as React from "react";
// import { FontIcon, ListItem as ListItemMD } from "react-md";

import MenuItem from '@mui/material/MenuItem';
import Icon from '@mui/material/Icon'


import style, {
  menuItem,
  menuItemLabel
} from "./style";

import { ListItemProps } from "./ListItem.types";

/**
 * This component lets you display multiple line items vertically as a single continuous element.
 * @param {object} props The props
 * @returns {function} The component
 */
const ListItem: React.FC<ListItemProps> = ({
  leftIcon,
  icon,
  // rightIcon,
  onClick = () => null,
  children,
}) => {
  // const conditionalLIcon = (leftIcon || icon) && {
  //   leftIcon: <Icon>{leftIcon || icon}</Icon>,
  // };

  // const conditionalRIcon = rightIcon && {
  //   rightIcon: <Icon>{rightIcon}</Icon>,
  // };

  return (
    <MenuItem
      data-testid="Components-ListItem"
      onClick={onClick}
      // {...conditionalLIcon}
      // {...conditionalRIcon}
      // primaryText={children}
      style={style}
    >
      <MenuItemLabel icon={icon || leftIcon}>{children}</MenuItemLabel>
    </MenuItem>
  );
};

export const MenuItemLabel: React.FC<React.PropsWithChildren<{icon: any}>> = ({ children, icon }) => (
  <div style={menuItem}>
    {icon && <Icon>{icon}</Icon>}
    <span style={menuItemLabel}>{children}</span>
  </div>
);

export default ListItem;
