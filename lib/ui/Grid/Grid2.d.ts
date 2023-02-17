import * as React from "react";
import { GridProps, CellProps } from "./Grid.types";
/**
 * This component lets you further customize the Grid enclosure by consuming a variable
 * number of Grid columns.
 * @param {object} props The props
 * @returns {function} The component
 */
declare const Cell: React.FC<React.PropsWithChildren<CellProps>>;
/**
 * This sets up a 12 column grid system that you can use to build layouts.
 * Its child elements are usually a collection Cell elements that consume a variable
 * number of grid columns.
 * @param {object} props The props
 * @returns {function} The component
 */
declare const Grid: React.FC<GridProps>;
export default Grid;
export { Cell };
