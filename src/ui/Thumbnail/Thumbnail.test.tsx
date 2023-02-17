import * as React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import Thumbnail from "./";

describe("<Thumbnail /> Rendering >", () => {
  it(`Should render the Thumbnail component in the dom`, () => {
    render(<Thumbnail src="" />);
    expect(screen.queryByTestId("Components-Thumbnail")).toBeTruthy();
  });
});
