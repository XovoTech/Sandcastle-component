import * as React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import Drawer from "./";

describe("<Drawer /> Rendering >", () => {
  it(`Should render the Drawer component in the dom`, () => {
    render(<Drawer>My Drawer Content</Drawer>);
    expect(screen.queryByTestId("Components-Drawer")).toBeTruthy();
  });
});
