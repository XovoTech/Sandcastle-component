import * as React from "react";
import { Link } from "react-router-dom";
import { Button, Cell, Grid } from "../";
import dialogStyle from "./style";


import MuiDialog from '@mui/material/Dialog';
import MuiDialogTitle from '@mui/material/DialogTitle';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogActions from '@mui/material/DialogActions';


import {
  DialogTitleProps,
  DialogBodyProps,
  DialogFooterProps,
  DialogProps,
} from "./Dialog.types";

/**
 * A title to display for the popup window
 * @param param0
 */
const DialogTitle: React.FC<React.PropsWithChildren<DialogTitleProps>> = ({ style = {}, children }) => (
  <MuiDialogTitle
    data-testid="Components-DialogTitle"
    style={{ ...dialogStyle.dialogTitle, ...style }}
  >
    {children}
  </MuiDialogTitle>
);

/**
 * The content of the popup window
 * @param param0
 */
const DialogBody: React.FC<React.PropsWithChildren<DialogBodyProps>> = ({ style = {}, children }) => (
  <MuiDialogContent
    data-testid="Components-DialogBody"
    style={{ ...dialogStyle.dialogBody, ...style }}
  >
    {children}
  </MuiDialogContent>
);

/**
 * The content for the footer of the popup window
 * @param param0
 */
const DialogFooter: React.FC<React.PropsWithChildren<DialogFooterProps>> = ({
  style = {},
  children,
}) => (
  <div
    data-testid="Components-DialogFooter"
    style={{ ...dialogStyle.dialogFooter, ...style }}
  >
    {children}
  </div>
);

/**
 * Dialogs are popup windows that are focused on a specific task.
 * They inform users about critical information or require them to make decisions.
 * @param {object} props The props
 * @returns {function} The component
 */
const Dialog: React.FC<React.PropsWithChildren<DialogProps>> = ({
  fullscreen = false,
  overlayStyle = {},
  style = {},
  onClose = () => null,
  closeHref = "#",
  children,
  centered = true,
  overlay = true,
  // closeAction = () => null,
}) => {

  return (
    <MuiDialog
      data-testid="Components-Dialog"
      role="group"
      open
      onClose={closeHref === "#" ? onClose : () => window.location.href = closeHref}
      maxWidth="lg"
    >
      <Link to={closeHref}>
        <Button style={dialogStyle.closeBtn} icon onClick={onClose}>
          close
        </Button>
      </Link>
      <div style={dialogStyle.dialogContent}>{children}</div>
    </MuiDialog>
  );
};

export default Dialog;
export { DialogTitle, DialogBody, DialogFooter };
