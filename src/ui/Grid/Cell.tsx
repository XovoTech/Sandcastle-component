import * as React from "react";
import { generateCellStyle } from "./style";
import { CellProps } from "./Grid.types";

/**
 * This component lets you further customize the Grid enclosure by consuming a variable
 * number of Grid columns.
 * @param {object} props The props
 * @returns {function} The component
 */
const Cell: React.FC<React.PropsWithChildren<CellProps>> = ({
  style = {},
  children,
  onClick = () => null,
  onMouseEnter = () => null,
  onMouseLeave = () => null,
  grow = 0,
  basis = "auto",
  align = "auto",
  order = 0,
}) => {
  return (
    <div
      data-testid="Components-Cell"
      role="cell"
      style={{ ...generateCellStyle({ grow, basis, align, order }), ...style }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default Cell;
