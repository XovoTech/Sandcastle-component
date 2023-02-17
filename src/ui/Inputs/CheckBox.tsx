import * as React from "react";
import { Checkbox } from "react-md";

import { CheckBoxProps } from "./Inputs.types";

/**
 * The Checkbox component is used for the selection of multiple options from a set.
 * @param {object} props The props
 * @returns {function} The component
 */
const CheckBox: React.FC<CheckBoxProps> = ({ on, off }) => (
  <Checkbox
    data-testid="Components-CheckBox"
    aria-label="checkbox"
    id="checkbox"
    name="checkbox"
    // type="checkbox"
  // defaultChecked={on || !off}
  />
);

export default CheckBox;
