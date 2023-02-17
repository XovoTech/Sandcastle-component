import * as React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import { Menu, MenuButton } from "./";

describe("<Menu /> Rendering >", () => {
  it(`Should render the Menu component in the dom`, () => {
    render(<Menu icon="more_time">Testing 123</Menu>);
    expect(screen.queryByTestId("Components-Menu")).toBeTruthy();
  });

  it(`Should render the MenuButton component in the dom`, () => {
    render(<MenuButton icon="more_time" />);
    expect(screen.queryByTestId("Components-MenuButton")).toBeTruthy();
  });
});
