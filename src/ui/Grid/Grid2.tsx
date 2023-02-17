import * as React from "react";

import GridMUI from '@mui/material/Grid';

import { GridProps, CellProps } from "./Grid.types";
import { generateGridStyle, generateCellStyle } from "./style";

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

  // const { order, flexGrow, flexBasis, alignSelf } = generateCellStyle({ grow, basis, align, order })

  return (
    <GridMUI
      item
      data-testid="Components-Cell"
      // role="cell"
      style={{ ...generateCellStyle({ grow, basis, align, order }), ...style }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xs
    >
      {children}
    </GridMUI>
  );
};

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
  style = { width: "100%" },
  onMouseEnter = () => null,
  onMouseLeave = () => null,
  onClick = () => null,
  children,
}) => {
  const { justifyContent, alignContent, flexWrap } = generateGridStyle({ wrap, justify, align });
  return (
    <GridMUI
      container
      data-testid="Components-Grid"
      role="group"
      style={style}
      // wrap={flexWrap}
      alignContent={alignContent}
      // justifyContent={justifyContent}
      // justify={justifyContent}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {children}
    </GridMUI>
  )
};

export default Grid;
export { Cell };
