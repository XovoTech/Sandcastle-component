import * as React from "react";
import { MenuProps, MenuButtonProps } from "./Menu.types";
/**
 * This component let's you set up a button that displays a menu list when clicked
 * @param {object} props The props
 * @returns {function} The component
 */
declare const MenuButton: React.FC<MenuButtonProps>;
/**
 * The Menu controlled component is used to display a list of children in the List component once the visible prop is true.
 * @param param0
 */
declare const Menu: React.FC<MenuProps>;
export default Menu;
export { MenuButton };
