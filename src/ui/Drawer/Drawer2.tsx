import * as React from "react";
import DrawerMUI from '@mui/material/Drawer';

import Button from "../Button";
import { DrawerPosition, DrawerProps } from "./Drawer.types";

const drawerWidth = 300;

/**
 * A drawer is an expandable sidebar that slides in into your page from a
 * direction of your choosing.
 * @param {object} props The props
 * @returns {function} The component
 */
const Drawer: React.FC<DrawerProps> = ({
  hidden = false,
  position = DrawerPosition.LEFT,
  style = { width: drawerWidth },
  onClose = () => null,
  showClose = true,
  children,
}) => {
  if (!hidden) {

    const CloseButton = () => (
      <div style={{ display: 'inline', textAlign: 'right', position: 'relative', top: 0, marginBottom: -50 }}>
        <Button icon onClick={onClose}>
          close
        </Button>
      </div>
    );

    const styles = {
      drawer: {
        flexShrink: 0,
        width: style.width || drawerWidth
      },
      drawerPaper: {
        width: style.width || drawerWidth,
        borderRight: `1px solid rgb(0,0,0,0.25)`,
        boxShadow: `0 0 5px 1px rgb(0,0,0,0.25)`,
      },
    }

    return (
      <DrawerMUI
        data-testid="Components-Drawer"
        anchor={position}
        open
        onClose={onClose}
        style={styles.drawer}
        variant="permanent"
      >
        {showClose && <CloseButton />}
        {children}
      </DrawerMUI>
    );
  }
  return null;
};

export default Drawer;
