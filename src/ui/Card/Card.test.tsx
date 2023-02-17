import * as React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import { Card, CardCaption } from "./";

describe("<Card /> Rendering >", () => {
  it(`Should render the Card component in the dom`, () => {
    render(<Card />);
    expect(screen.queryByTestId("Components-Card")).toBeTruthy();
  });

  it(`Should render the CardCaption component in the dom`, () => {
    render(<CardCaption />);
    expect(screen.queryByTestId("Components-CardCaption")).toBeTruthy();
  });
});
