import * as React from "react";
import { ListItemProps } from "./ListItem.types";
/**
 * This component lets you display multiple line items vertically as a single continuous element.
 * @param {object} props The props
 * @returns {function} The component
 */
declare const ListItem: React.FC<ListItemProps>;
export declare const MenuItemLabel: React.FC<React.PropsWithChildren<{
    icon: any;
}>>;
export default ListItem;
