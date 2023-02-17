import { CSSProperties } from "react";
import { DrawerPosition } from "./Drawer.types";
export declare const getPositionStyle: (position: DrawerPosition, inline?: boolean) => CSSProperties;
declare const style: {
    overlay: CSSProperties;
    drawer: CSSProperties;
    inlineStyle: CSSProperties;
    closeBtn: CSSProperties;
};
export default style;
