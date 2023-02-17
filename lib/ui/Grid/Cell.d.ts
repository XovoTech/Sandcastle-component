import * as React from "react";
import { CellProps } from "./Grid.types";
/**
 * This component lets you further customize the Grid enclosure by consuming a variable
 * number of Grid columns.
 * @param {object} props The props
 * @returns {function} The component
 */
declare const Cell: React.FC<React.PropsWithChildren<CellProps>>;
export default Cell;
