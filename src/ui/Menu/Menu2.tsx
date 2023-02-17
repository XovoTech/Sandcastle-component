import _, { get } from "lodash";
import * as React from "react";
// import {
//   DropdownMenu as DropDownMenuMD,
//   FontIcon,
//   MenuButton as MenuButtonMD,
// } from "react-md";
import { Cell, Grid, Button } from "..";

import MenuMUI from '@mui/material/Menu';
import Icon from '@mui/material/Icon'

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
  id,
  icon,
  children,
  style = {},
  // onClick = () => null,
  className,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleClick = () => {
    // setAnchorEl(event.currentTarget)
  }

  const handleClose = (event: {}, reason: "backdropClick" | "escapeKeyDown") => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        data-testid="Components-MenuButton"
        icon
        style={style}
        onClick={handleClick}
        className={className}
      >
        {icon}
      </Button>
      <MenuMUI anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {children}
      </MenuMUI>
    </>
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
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = () => {
    // setAnchorEl(event.currentTarget)
  }

  const handleClose = (event: {}, reason: "backdropClick" | "escapeKeyDown") => {
    setAnchorEl(null)
  }

  return (
    <div style={style}>
      {label ? (
        <Grid justify="space-between" onClick={handleClick}>
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
              <Icon className="arrdropdown">{icon}</Icon>
            </Cell>
          )}
        </Grid>
      ) : (
        <Icon className="arrdropdown" onClick={handleClick}>{icon}</Icon>
      )}

      <MenuMUI anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {children}
      </MenuMUI>

    </div>
  )
};

export default Menu;
export { MenuButton };
