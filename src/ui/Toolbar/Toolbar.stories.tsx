import * as React from "react";
import Toolbar from "./";

export default {
  title: "Components/Basic UI/Toolbar",
  component: Toolbar,
};

export const Default: any = () => {
  return (
    <Toolbar
      theme="dark"
      title="Toolbar Title"
      leftActionsGroup={[<div>One</div>, <div>Two</div>]}
      rightActionsGroup={[<div>Three</div>, <div>Four</div>]}
      ToolbarContent={[<div style={{ padding: 10 }}>Toolbar Content</div>]}
      style={{}}
    />
  );
};

Default.story = {
  parameters: {
    jest: ["Toolbar"],
  },
};
