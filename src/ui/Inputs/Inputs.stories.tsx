import * as React from "react";
import { CheckBox, Radio, Slider, Switch, TextInput } from "./";

export default {
  title: "Components/Basic UI/Inputs",
  component: TextInput,
};

export const Default: any = () => (
  <div>
    <div data-testid="Components-CheckBox">
      <CheckBox on />
    </div>
    <div data-testid="Components-Radio">
      <Radio />
    </div>
    <div data-testid="Components-Slider">
      <Slider />
    </div>
    <div data-testid="Components-Switch">
      <Switch />
    </div>
    <div data-testid="Components-TextInput">
      <TextInput />
    </div>
  </div>
);

Default.story = {
  parameters: {
    jest: ["Inputs"],
  },
};
