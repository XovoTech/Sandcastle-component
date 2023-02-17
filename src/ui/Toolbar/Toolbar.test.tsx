import * as React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import Toolbar from "./";

describe("<Toolbar /> Rendering >", () => {
  it(`Should render the Toolbar component in the dom`, () => {
    render(<Toolbar />);
    expect(screen.queryByTestId("Components-Toolbar")).toBeTruthy();
  });
});
