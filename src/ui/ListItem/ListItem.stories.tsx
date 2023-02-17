import * as React from "react";
import ListItem from "./";

export default {
  title: "Components/Basic UI/ListItem",
  component: ListItem,
};

export const Default: any = () => (
  <ListItem icon="more_time">Testing 123</ListItem>
);

Default.story = {
  parameters: {
    jest: ["ListItem"],
  },
};
