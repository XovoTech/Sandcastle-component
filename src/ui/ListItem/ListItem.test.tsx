import * as React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import ListItem from "./";

describe("<ListItem /> Rendering >", () => {
  it(`Should render the ListItem component in the dom`, () => {
    render(<ListItem icon="more_time">Testing 123</ListItem>);
    expect(screen.queryByTestId("Components-ListItem")).toBeTruthy();
  });
});
