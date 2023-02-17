import * as React from "react";
import Drawer from "./";

export default {
  title: "Components/Basic UI/Drawer",
  component: Drawer,
};

export const Default: any = () => (
  <div data-testid="Components-Drawer">
    <Drawer>My Drawer</Drawer>
  </div>
);

Default.story = {
  parameters: {
    jest: ["Drawer"],
  },
};
