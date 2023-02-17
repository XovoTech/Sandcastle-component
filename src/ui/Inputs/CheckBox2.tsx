import * as React from "react";
import CheckboxMUI from '@mui/material/Checkbox';

import { CheckBoxProps } from "./Inputs.types";

/**
 * The Checkbox component is used for the selection of multiple options from a set.
 * @param {object} props The props
 * @returns {function} The component
 */
const CheckBox: React.FC<CheckBoxProps> = ({ on, off, onChange, checked }) => (
  <CheckboxMUI
    data-testid="Components-CheckBox"
    id="checkbox"
    name="checkbox"
    onChange={onChange}
    checked={checked}
    defaultChecked={on || !off}
  />
);

export default CheckBox;
