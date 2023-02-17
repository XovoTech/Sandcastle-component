import * as React from "react";
import { NiceMenu, ListItem } from "../";

export default {
  title: "Components/Basic UI/NiceMenu",
  component: NiceMenu,
};

export const Default: any = () => (
  <NiceMenu icon="home" label="Label goes here...">
    <ListItem leftIcon="home">Item #1</ListItem>
    <ListItem leftIcon="home">Item #2</ListItem>
    <ListItem leftIcon="home">Item #3</ListItem>
    <ListItem leftIcon="home">Item #4</ListItem>
  </NiceMenu>
);

Default.story = {
  parameters: {
    jest: ["Menu"],
  },
};
