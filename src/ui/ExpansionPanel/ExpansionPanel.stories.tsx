import * as React from "react";
import ExpansionPanel from "./";

export default {
  title: "Components/Basic UI/ExpansionPanel",
  component: ExpansionPanel,
};

export const Default: any = () => (
  <ExpansionPanel icon="more_time" label="Testing" isExpanded>
    My Expansion Panel Content
  </ExpansionPanel>
);

Default.story = {
  parameters: {
    jest: ["ExpansionPanel"],
  },
};
