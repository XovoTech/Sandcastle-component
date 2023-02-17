import _, { get } from "lodash";
import * as React from "react";
import {
  DropdownMenu as DropDownMenuMD,
  FontIcon,
  MenuButton as MenuButtonMD,
} from "react-md";
import { Cell, Grid } from "..";

import { FixedPositions } from "../types";
import { MenuProps, MenuButtonProps } from "./Menu.types";
import menuStyle from "./style";

/**
 * This component let's you set up a button that displays a menu list when clicked
 * @param {object} props The props
 * @returns {function} The component
 */
const MenuButton: React.FC<MenuButtonProps> = ({
  position = FixedPositions.BOTTOM_LEFT,
  icon,
  children,
  style = {},
  onClick = () => null,
  className,
  visible = false,
  ...props
}) => {
  const id = React.useId();
  return (
    <MenuButtonMD
      id={props.id || id}
      data-testid="Components-MenuButton"
      icon
      // position={position}
      // menuItems={children}
      visible={visible}
      style={style}
      onClick={onClick}
      className={className}
    >
      {icon}
    </MenuButtonMD>
  )
};

/**
 * The Menu controlled component is used to display a list of children in the List component once the visible prop is true.
 * @param param0
 */
const Menu: React.FC<MenuProps> = ({
  position = FixedPositions.BOTTOM_LEFT,
  id,
  children,
  style = {},
  label,
  icon = "keyboard_arrow_down",
  onClick = () => null,
  visible,
}) => (
  <DropDownMenuMD
    id={id || "DropdownMenu"}
    data-testid="Components-Menu"
    buttonChildren={children}
    // toggleQuery=".arrdropdown"
    // position={position}
    // onVisibilityChange={() => null}
    style={style}
    // label={label}
    icon={icon}
    onClick={onClick}
  // visible={visible}
  >
    <div style={style}>
      {label ? (
        <Grid justify="space-between">
          <Cell
            align="center"
            style={{
              ...menuStyle.cell,
              textAlign: get(style, "textAlign", "left"),
            }}
          >
            {label}
          </Cell>

          {icon && (
            <Cell align="center" style={menuStyle.icon}>
              <FontIcon className="arrdropdown">{icon}</FontIcon>
            </Cell>
          )}
        </Grid>
      ) : (
        <FontIcon className="arrdropdown">{icon}</FontIcon>
      )}
    </div>
  </DropDownMenuMD>
);

export default Menu;
export { MenuButton };
