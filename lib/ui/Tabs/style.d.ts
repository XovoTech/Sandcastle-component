import { CSSProperties } from "react";
import { TabsProps } from "./Tabs.types";
declare const style: {
    tabs: CSSProperties;
    tab: CSSProperties;
    tabActive: CSSProperties;
    tabActiveVertical: CSSProperties;
};
export declare const generateBackgroundColors: (props: TabsProps) => CSSProperties;
export default style;
