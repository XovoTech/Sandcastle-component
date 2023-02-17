import { CSSProperties } from "react";
import { IconList } from "../FontIcon/FontIcon.types";
export interface TextInputProps {
    /**
     * An optional value to apply to the text field. This will make the component controlled and require the onChange prop.
     */
    value?: string;
    /**
     * A placeholder value
     */
    placeholder?: string;
    /**
     * The type for the text field. This is one of the most import props for mobile accessibility as it will update the keyboard for the text type. This does not get applied on multiline text fields.
     */
    type?: string;
    /**
     * Whether or not to focus the input field when the component is mounted
     */
    focusOnMount?: boolean;
    /**
     * Whether or not to select the contents of the input field when the component is mounted
     */
    selectOnMount?: boolean;
    /**
     * The format of the input field
     */
    format?: "currency" | false;
    /**
     * The size of the input field (large or small)
     */
    size?: "small" | "large";
    /**
     * Whether or not to show a label next to the input field
     */
    showLabel?: boolean;
    /**
     * Whether or not to focus on the input field when clicked
     */
    focusOnClick?: boolean;
    /**
     * The icon to show in the left side of the input field
     */
    iconLeft?: IconList;
    /**
     * THe icon to show in the right side of the input field
     */
    iconRight?: IconList;
    /**
     * The label content to display
     */
    label?: string;
    /**
     * The custom css/style to use for the label
     */
    labelStyle?: CSSProperties;
    /**
     * The maximum number of rows for a multiline text field. If this value is undefined, 0, or a number less than 0, the multiline text field will infinitely expand.
     */
    multiline?: boolean;
    /**
     * An optional function to call when the text field is blurred.
     */
    onBlur?: (event: React.FocusEvent<HTMLElement>) => void;
    /**
     * An optional function to call when the text field's container triggers the click event.
     */
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    /**
     * An optional onChange function to call when the field content changes
     */
    onChange?: (event: React.ChangeEvent<HTMLElement>) => void;
    /**
     * An optional onKeyUp function to call when a key is pressed
     */
    onKeyUp?: (event: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>) => void;
    /**
     * An optional style to apply to the text field's container.
     */
    style?: CSSProperties;
    variant?: "filled" | "outlined" | "standard";
    transparent?: boolean;
}
export interface CheckBoxProps {
    /**
     * Whether or not the checkbox is checked on
     */
    on?: boolean;
    /**
     * Whether or not the checkbox is checked off
     */
    off?: boolean;
    onChange?: () => void;
    checked?: boolean;
}
