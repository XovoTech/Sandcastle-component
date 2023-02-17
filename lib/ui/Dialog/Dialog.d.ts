import * as React from "react";
import { DialogTitleProps, DialogBodyProps, DialogFooterProps, DialogProps } from "./Dialog.types";
/**
 * A title to display for the popup window
 * @param param0
 */
declare const DialogTitle: React.FC<React.PropsWithChildren<DialogTitleProps>>;
/**
 * The content of the popup window
 * @param param0
 */
declare const DialogBody: React.FC<React.PropsWithChildren<DialogBodyProps>>;
/**
 * The content for the footer of the popup window
 * @param param0
 */
declare const DialogFooter: React.FC<React.PropsWithChildren<DialogFooterProps>>;
/**
 * Dialogs are popup windows that are focused on a specific task.
 * They inform users about critical information or require them to make decisions.
 * @param {object} props The props
 * @returns {function} The component
 */
declare const Dialog: React.FC<React.PropsWithChildren<DialogProps>>;
export default Dialog;
export { DialogTitle, DialogBody, DialogFooter };
