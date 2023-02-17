import { CSSProperties } from "react";
declare const style: {
    iconButton: CSSProperties;
    text: CSSProperties;
    iconLeft: CSSProperties;
    iconRight: CSSProperties;
    smallSize: CSSProperties;
    smallTextSize: CSSProperties;
};
export declare const ButtonWrapper: import("styled-components").StyledComponent<"button", any, {}, never>;
export declare const getBackgroundColor: ({ transparent, secondary, primary, tertiary, disabled, negative, }: {
    transparent?: boolean | undefined;
    secondary?: boolean | undefined;
    primary?: boolean | undefined;
    tertiary?: boolean | undefined;
    disabled?: boolean | undefined;
    negative?: boolean | undefined;
}) => {
    backgroundColor: string;
};
export declare const getStyle: (props: any) => any;
export default style;
