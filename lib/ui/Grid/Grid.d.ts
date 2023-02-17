import * as React from "react";
import Cell from "./Cell";
import { GridProps } from "./Grid.types";
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
