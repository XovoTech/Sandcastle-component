import { ReactNode, CSSProperties } from "react";
export declare enum DrawerPosition {
    LEFT = "left",
    RIGHT = "right",
    TOP = "top",
    BOTTOM = "bottom"
}
export interface DrawerProps {
    /**
     * Whether or not the Drawer is showing
     */
    hidden?: boolean;
    /**
     * Whether or not to display the drawer inline (not anchored to any side)
     */
    inline?: boolean;
    /**
     * Where to display the Drawer (e.g. LEFT, RIGHT, TOP, BOTTOM)
     */
    position?: DrawerPosition;
    /**
     * The style to use for the Drawer
     */
    style?: CSSProperties;
    /**
     * Whether or not a dark/transparent overlay should be displayed when the drawer is opened
     */
    overlay?: boolean;
    /**
     * The style to use for the overlay
     */
    overlayStyle?: CSSProperties;
    /**
     * Triggered when the close button is pressed
     */
    onClose?: () => void;
    /**
     * Whether or not to show the close button
     */
    showClose?: boolean;
    /**
     * The content to display inside of the Drawer
     */
    children: ReactNode;
}
