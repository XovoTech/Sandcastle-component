import * as React from "react";
import { Link } from "react-router-dom";
import { Button, Cell, Grid } from "../";
import dialogStyle from "./style";

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
  <h5
    data-testid="Components-DialogTitle"
    style={{ ...dialogStyle.dialogTitle, ...style }}
  >
    {children}
  </h5>
);

/**
 * The content of the popup window
 * @param param0
 */
const DialogBody: React.FC<React.PropsWithChildren<DialogBodyProps>>= ({ style = {}, children }) => (
  <div
    data-testid="Components-DialogBody"
    style={{ ...dialogStyle.dialogBody, ...style }}
  >
    {children}
  </div>
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
  closeAction = () => null,
}) => {
  const fullscreenStyle = fullscreen
    ? { ...dialogStyle.viewPort, ...dialogStyle.fullscreen }
    : {};

  return (
    <div data-testid="Components-Dialog" role="group">
      {overlay && (
        <div
          style={{
            ...dialogStyle.viewPort,
            ...dialogStyle.overlay,
            ...overlayStyle,
          }}
        />
      )}

      <Grid justify="center" style={dialogStyle.viewPort}>
        <Cell
          align="center"
          style={{ ...dialogStyle.dialog, ...style, ...fullscreenStyle }}
        >
          <Link to={closeHref}>
            <Button style={dialogStyle.closeBtn} icon onClick={onClose}>
              close
            </Button>
          </Link>
          <div style={dialogStyle.dialogContent}>{children}</div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Dialog;
export { DialogTitle, DialogBody, DialogFooter };
