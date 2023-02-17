import * as React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Dialog, DialogTitle, DialogBody, DialogFooter } from "./";

describe("<Dialog /> Rendering >", () => {
  it(`Should render the Dialog component in the dom`, () => {
    render(
      <Router>
        <Dialog />
      </Router>
    );
    expect(screen.queryByTestId("Components-Dialog")).toBeTruthy();
  });

  it(`Should render the DialogTitle component in the dom`, () => {
    render(
      <Router>
        <DialogTitle />
      </Router>
    );
    expect(screen.queryByTestId("Components-DialogTitle")).toBeTruthy();
  });

  it(`Should render the DialogBody component in the dom`, () => {
    render(
      <Router>
        <DialogBody />
      </Router>
    );
    expect(screen.queryByTestId("Components-DialogBody")).toBeTruthy();
  });

  it(`Should render the DialogFooter component in the dom`, () => {
    render(
      <Router>
        <DialogFooter />
      </Router>
    );
    expect(screen.queryByTestId("Components-DialogFooter")).toBeTruthy();
  });
});
