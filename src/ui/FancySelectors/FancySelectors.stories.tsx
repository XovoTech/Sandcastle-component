import * as React from "react";
import { MultiSelector, DropDownSelector } from "./";

export default {
  title: "Components/Basic UI/FancySelectors",
  component: MultiSelector,
  excludeStories: /.*Data$/,
};

const itemsData = [{ id: "test", name: "Test Name" }];

export const Default: any = () => (
  <MultiSelector choice="test" items={itemsData} />
);

export const TheDropDownSelector: any = () => (
  <DropDownSelector
    choice="test"
    items={itemsData}
    text="Please choose an option"
  />
);

Default.story = {
  parameters: {
    jest: ["FancySelectors"],
  },
};
