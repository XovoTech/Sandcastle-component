import _ from "lodash";
import React from "react";
import AccordionMUI from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionActions from '@mui/material/AccordionActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Icon from '@mui/material/Icon';


import { ExpansionPanelProps } from "./ExpansionPanel.types";
import { getLabelStyle } from "./style";

const Label: React.FC<ExpansionPanelProps> = ({
  icon = false,
  style = {},
  label = "",
}) => {
  if (icon) {
    return (
      <div>
        <Icon style={getLabelStyle(style)["iconStyle"]}>{icon}</Icon>
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
const Accordion: React.FC<ExpansionPanelProps> = ({
  icon,
  style = {},
  label = "",
  isExpanded = false,
  footer,
  onExpandToggle = () => null,
  children,
}) => {

  const classes = {
    root: {
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },

    details: {
      backgroundColor: `rgb(238, 238, 238)`,
      margin: 5
    }
  }

  return (
    <AccordionMUI
      defaultExpanded={isExpanded}
      style={classes.root}
      onChange={(e, isExpanded) => onExpandToggle(isExpanded)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        style={classes.details}
      >
        <Label icon={icon} label={label} />
      </AccordionSummary>

      <AccordionDetails data-testid="Components-ExpansionPanel">
        <div style={{ width: "100%" }}>
          {children}
        </div>
      </AccordionDetails>

      {footer && <AccordionActions>{footer}</AccordionActions>}
    </AccordionMUI>
  );
};

export default Accordion;
