import * as React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import { Default } from "./Inputs.stories";

describe("<FontIcon /> Rendering >", () => {
  it(`Should render the various input components in the dom`, () => {
    render(<Default />);
    const count = screen.queryAllByTestId;
    expect(count("Components-CheckBox").length).toBeGreaterThan(0);
    expect(count("Components-Radio").length).toBeGreaterThan(0);
    expect(count("Components-Slider").length).toBeGreaterThan(0);
    expect(count("Components-Switch").length).toBeGreaterThan(0);
    expect(count("Components-TextInput").length).toBeGreaterThan(0);
  });
});
