import * as React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Default } from "./Tabs.stories";

describe("<Tabs /> Rendering >", () => {
  it(`Should render the Tabs component in the dom`, () => {
    render(
      <Router>
        <Default />
      </Router>
    );
    expect(screen.queryByTestId("Components-Tabs")).toBeTruthy();
  });
});
