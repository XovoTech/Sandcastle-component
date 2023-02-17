import * as React from "react";
import { Card, CardCaption } from "./";

export default {
  title: "Components/Basic UI/Card",
  component: Card,
  // subcomponents: [CardCaption],
};

export const Default: any = () => (
  <div data-testid="Components-Card">
    <Card style={{ color: "#333" }}>
      <CardCaption>Caption</CardCaption>
      Testing
    </Card>
  </div>
);

Default.story = {
  parameters: {
    jest: ["Card"],
  },
};
