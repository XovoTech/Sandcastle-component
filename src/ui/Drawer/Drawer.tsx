import * as React from "react";
import Button from "../Button";
import drawerStyle, { getPositionStyle } from "./style";
import { DrawerPosition, DrawerProps } from "./Drawer.types";

/**
 * A drawer is an expandable sidebar that slides in into your page from a
 * direction of your choosing.
 * @param {object} props The props
 * @returns {function} The component
 */
const Drawer: React.FC<DrawerProps> = ({
  hidden = false,
  inline = false,
  position = DrawerPosition.LEFT,
  style = {},
  overlay = true,
  overlayStyle = {},
  onClose = () => null,
  showClose = true,
  children,
}) => {
  if (!hidden) {
    const positionStyle = getPositionStyle(position, inline);

    const CloseButton = () => (
      <Button style={drawerStyle.closeBtn} icon onClick={onClose}>
        close
      </Button>
    );

    return (
      <div data-testid="Components-Drawer" role="group" style={style}>
        {overlay && (
          <div
            style={{ ...drawerStyle.overlay, ...overlayStyle }}
            onClick={onClose}
          />
        )}

        <div style={{ ...drawerStyle.drawer, ...positionStyle, ...style }}>
          {showClose && <CloseButton />}
          {children}
        </div>
      </div>
    );
  }
  return null;
};

export default Drawer;
