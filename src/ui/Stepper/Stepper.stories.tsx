import * as React from "react";
import { Step, Stepper, StepLabel } from "./";

export default {
  title: "Components/Basic UI/Stepper",
  component: Stepper,
};

export const Default: any = () => (
  <div data-testid="Components-Stepper">
    <Stepper activeStep={1}>
      <Step>
        <StepLabel>Choose Campaign</StepLabel>
      </Step>
      <Step>
        <StepLabel>Choose Page</StepLabel>
      </Step>
      <Step>
        <StepLabel>Success</StepLabel>
      </Step>
    </Stepper>
  </div>
);

Default.story = {
  parameters: {
    jest: ["Stepper"],
  },
};
