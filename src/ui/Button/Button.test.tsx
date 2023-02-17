import * as React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import { Default } from "./Button.stories";

describe("<Button /> Rendering >", () => {
  it(`Should render the component in the dom`, () => {
    render(<Default />);
    expect(screen.queryByTestId("Components-Button")).toBeTruthy();
  });
});
