import * as React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import NiceMenu from "./";

describe("<NiceMenu /> Rendering >", () => {
  it(`Should render the NiceMenu component in the dom`, () => {
    render(<NiceMenu icon="more_time">Testing 123</NiceMenu>);
    expect(screen.queryByTestId("Components-NiceMenu")).toBeTruthy();
  });
});
