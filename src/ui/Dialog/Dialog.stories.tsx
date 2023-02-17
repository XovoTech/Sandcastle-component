import * as React from "react";
import { DialogBody, DialogFooter, DialogTitle, Dialog } from "./";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default {
  title: "Components/Basic UI/Dialog",
  component: Dialog,
};

export const Default: any = () => (
  <div data-testid="Components-Dialog">
    <Router>
      <Dialog style={{ color: "#333" }}>
        <DialogTitle>Caption</DialogTitle>
        <DialogBody>Body</DialogBody>
        <DialogFooter>Footer</DialogFooter>
      </Dialog>
    </Router>
  </div>
);

Default.story = {
  parameters: {
    jest: ["Dialog"],
  },
};
