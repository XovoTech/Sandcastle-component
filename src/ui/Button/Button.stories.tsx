import * as React from "react";
import { Button } from "@/ui";

export default {
  title: "Components/Basic UI/Button",
  component: Button,
};

export const Default: any = () => (
  <div data-testid="Components-Button">
    <Button style={{ color: "#333" }}>Testing</Button>
  </div>
);

Default.story = {
  parameters: {
    jest: ["Button"],
  },
};
