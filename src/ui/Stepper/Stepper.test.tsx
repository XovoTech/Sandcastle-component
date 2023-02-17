import * as React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import { Default } from "./Stepper.stories";

describe("<Stepper /> Rendering >", () => {
  it(`Should render the Stepper component in the dom`, () => {
    render(<Default />);
    expect(screen.queryByTestId("Components-Stepper")).toBeTruthy();
  });
});
