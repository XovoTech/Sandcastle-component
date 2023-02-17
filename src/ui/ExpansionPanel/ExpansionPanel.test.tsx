import * as React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import ExpansionPanel from "./";

describe("<ExpansionPanel /> Rendering >", () => {
  it(`Should render the ExpansionPanel component in the dom`, () => {
    render(
      <ExpansionPanel icon="more" label="Testing" isExpanded>
        My Expansion Panel Content
      </ExpansionPanel>
    );
    expect(screen.queryByTestId("Components-ExpansionPanel")).toBeTruthy();
  });
});
