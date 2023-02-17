import * as React from "react";
import { render, screen } from "@testing-library/react";

import { MultiSelector, DropDownSelector } from "./";

describe("<FancySelectors /> Rendering >", () => {
  it(`Should render the MultiSelector component in the dom`, () => {
    render(
      <MultiSelector
        choice="test"
        items={[{ id: "test", name: "Test Name" }]}
      />
    );
    expect(screen.queryByTestId("Components-MultiSelector")).toBeTruthy();
  });

  it(`Should render the DropDownSelector component in the dom`, () => {
    render(
      <DropDownSelector
        choice="test"
        items={[{ id: "test", name: "Test Name" }]}
        text="Please choose an option"
      />
    );
    expect(screen.queryByTestId("Components-DropDownSelector")).toBeTruthy();
  });
});
