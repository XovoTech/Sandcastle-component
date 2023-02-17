import * as React from "react";
import Cell from "./Cell";

import { GridProps } from "./Grid.types";
import { generateGridStyle } from "./style";

/**
 * This sets up a 12 column grid system that you can use to build layouts.
 * Its child elements are usually a collection Cell elements that consume a variable
 * number of grid columns.
 * @param {object} props The props
 * @returns {function} The component
 */
const Grid: React.FC<GridProps> = ({
  wrap = false,
  justify = "start",
  align = "start",
  style = {},
  onMouseEnter = () => null,
  onMouseLeave = () => null,
  onClick = () => null,
  children,
}) => (
  <div
    data-testid="Components-Grid"
    role="group"
    style={{
      ...generateGridStyle({ wrap, justify, align }),
      ...style,
    }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
  >
    {children}
  </div>
);

export default Grid;
export { Cell };
