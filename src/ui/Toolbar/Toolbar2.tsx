import * as React from "react";
import { get } from "lodash";
import ToolbarMUI from '@mui/material/Toolbar';

import { Cell, Grid } from "..";
import toolbarStyle from "./style";

import { ToolbarProps } from "./Toolbar.types";

/**
 * The title to show for the toolbar.  A component can be used as well.
 * @param props
 */
const Title: React.FC<ToolbarProps> = ({ title, theme = "dark" }) =>
  typeof title === "function" ? (
    <span style={toolbarStyle[theme].titleText}>
      {React.createElement(title)}
    </span>
  ) : (
    <span style={toolbarStyle[theme].titleText}>{title}</span>
  );

/**
 * The array of components to use for the left portion of the toolbar
 * @param props
 */
const LeftActionsGroup: React.FC<ToolbarProps> = (props) => {
  const { leftActionsGroup = [], theme = "dark" } = props;
  return (
    <Grid style={get(toolbarStyle[theme], "leftActionsGroup", {})}>
      {leftActionsGroup.map((Elem: any, key) => (
        <Cell key={key} align="center">
          <Elem {...props} />
        </Cell>
      ))}
    </Grid>
  );
};

/**
 * The array of components to use for the right portion of the toolbar
 * @param props
 */
const RightActionsGroup: React.FC<ToolbarProps> = (props) => {
  const { rightActionsGroup = [], theme = "dark" } = props;
  return (
    <Grid style={get(toolbarStyle[theme], "rightActionsGroup", {})}>
      {rightActionsGroup.map((Elem: any, key) => (
        <Cell key={key} align="center">
          <Elem {...props} />
        </Cell>
      ))}
    </Grid>
  );
};

/**
 * The toolbar component can be used as a fixed header to display a navigation
 * of buttons, title, and actions
 * @todo Bring in the toolbar concepts from the Header object, & use this toolbar in that
 * @param {object} props The props
 * @returns {function} The component
 */
const Toolbar: React.FC<ToolbarProps> = (props) => {
  const {
    theme = "dark",
    title,
    ToolbarContent = () => <div />,
    style = {},
  } = props;
  const themeStyle = toolbarStyle[theme];

  return (
    // <div
    //   data-testid="Components-Toolbar"
    //   style={{ ...themeStyle.toolbar, ...style }}
    // >
    <>
      <ToolbarMUI
        data-testid="Components-Toolbar"
        style={{ ...themeStyle.toolbar, ...style }}
      >
        <Grid justify="space-between">
          <Cell>
            <LeftActionsGroup {...props} />
          </Cell>
          <Cell style={themeStyle.title}>
            <Title title={title} theme={theme} />
          </Cell>
          <Cell>
            <RightActionsGroup {...props} />
          </Cell>
        </Grid>
      </ToolbarMUI>
      {ToolbarContent && <ToolbarContent {...props} />}
    </>
    // </div>
  );
};

export default Toolbar;
