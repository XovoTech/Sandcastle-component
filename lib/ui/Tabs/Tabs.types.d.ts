import { ReactNode, CSSProperties } from "react";
export interface TabProps {
    /**
     * Whether or not to the tab is being displayed in a vertical manner (vs horizontal)
     */
    vertical?: boolean;
    /**
     * Whether or not the tab in question is the active tab
     */
    active?: boolean;
    /**
     * Whether or not the tab in question is the current tab
     */
    currentTab?: boolean | string;
    /**
     * The name for the current tab
     */
    name?: string;
    /**
     * Triggers when the current tab is clicked
     */
    onClick?: () => void;
    /**
     * An optional url to link to when the current tab is clicked
     */
    href?: string;
    /**
     * The content for the tabs.  Usually a list of <Tab /> components.
     */
    children: ReactNode;
}
export interface TabsProps {
    /**
     * Whether or not to display the tabs in a vertical manner (vs horizontal)
     */
    vertical?: boolean;
    /**
     * Whether or not the tabs are transparent
     */
    transparent?: boolean;
    /**
     * The style/css to use for the tab
     */
    style?: CSSProperties;
}
