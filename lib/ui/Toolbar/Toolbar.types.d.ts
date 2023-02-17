import { CSSProperties, ReactNode } from "react";
export interface ToolbarProps {
    /**
     * Whether to show the dark or light version of the toolbar
     */
    theme?: "dark" | "light";
    /**
     * The title to show for the toolbar.  A component can be used as well.
     */
    title?: string | ReactNode;
    /**
     * The array of components to use for the left portion of the toolbar
     */
    leftActionsGroup?: Array<ReactNode>;
    /**
     * The array of components to use for the right portion of the toolbar
     */
    rightActionsGroup?: Array<ReactNode>;
    /**
     * Any custom content to display in the toolbar
     */
    ToolbarContent?: (props: any) => JSX.Element;
    /**
     * The style to use for the component
     */
    style?: CSSProperties;
}
