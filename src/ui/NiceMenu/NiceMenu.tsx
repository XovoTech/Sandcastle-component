import * as React from "react";
import { Menu } from "@/ui";

import niceMenuStyle from "./style";
import { NiceMenuProps } from "./NiceMenu.types";

const NiceMenu: React.FC<NiceMenuProps> = (props) => {
  const { style, children } = props;
  return (
    <div
      data-testid="Components-NiceMenu"
      style={{ ...niceMenuStyle.selectField, cursor: "pointer", ...style }}
    >
      <Menu {...props} style={niceMenuStyle.menuStyleContainer}>
        <div style={niceMenuStyle.menuStyle}>{children}</div>
      </Menu>
    </div>
  );
};

export default NiceMenu;
