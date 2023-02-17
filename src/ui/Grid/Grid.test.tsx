import * as React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import { Default } from "./Grid.stories";

describe("<Grid /> Rendering >", () => {
  it(`Should render the Grid component in the dom`, () => {
    render(<Default />);
    expect(screen.queryByTestId("Components-Grid")).toBeTruthy();
  });

  it(`Should render the Cell component in the dom`, () => {
    render(<Default />);
    expect(screen.queryAllByTestId("Components-Cell").length).toBeGreaterThan(
      0
    );
  });
});
