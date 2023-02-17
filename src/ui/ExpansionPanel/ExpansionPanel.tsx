import _ from "lodash";
import React, { useId } from "react";
import {
  ExpansionList,
  ExpansionPanel as ExpansionPanelMD,
  FontIcon,
} from "react-md";

import { ExpansionPanelProps } from "./ExpansionPanel.types";
import panelStyle, { getLabelStyle } from "./style";

const Label: React.FC<ExpansionPanelProps> = ({
  icon = false,
  style = {},
  label = "",
}) => {
  if (icon) {
    return (
      <div>
        <FontIcon style={getLabelStyle(style)["iconStyle"]}>{icon}</FontIcon>
        <span style={getLabelStyle(style)["labelStyle"]}>{label}</span>
      </div>
    );
  }

  return <span>{label}</span>;
};

/**
 * Expansion panels contain content and allow lightweight editing of an element.
 * @param {object} props The props
 * @returns {function} The component
 */
const ExpansionPanel: React.FC<ExpansionPanelProps> = ({
  icon,
  style = {},
  label = "",
  isExpanded = false,
  footer,
  onExpandToggle = () => null,
  children,
}) => {
  const id = useId();
  return (
    <ExpansionList onKeyDown={() => {}}>
      <ExpansionPanelMD
        expanded={isExpanded}
        id={id}
        // footer={footer}
        // label={<Label icon={icon} style={style} label={label} />}
        style={{ ...panelStyle.label, ...style }}
        onExpandClick={() => onExpandToggle(!isExpanded)}
      >
        <div data-testid="Components-ExpansionPanel" style={panelStyle.inside}>
          {children}
        </div>
      </ExpansionPanelMD>
    </ExpansionList>
  );
};

export default ExpansionPanel;
