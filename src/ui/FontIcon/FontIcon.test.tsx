import * as React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import FontIcon from "./";

describe("<FontIcon /> Rendering >", () => {
  it(`Should render the FontIcon component in the dom`, () => {
    render(<FontIcon>more_time</FontIcon>);
    expect(screen.queryByTestId("Components-FontIcon")).toBeTruthy();
  });
});
