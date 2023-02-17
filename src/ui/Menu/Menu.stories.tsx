import * as React from "react";
import { Menu, MenuButton } from "./";

export default {
  title: "Components/Basic UI/Menu",
  component: Menu,
};

export const Default: any = () => <Menu icon="more_time">Testing 123</Menu>;

export const TheMenuButton: any = () => <MenuButton icon="more_time" />;

Default.story = {
  parameters: {
    jest: ["Menu"],
  },
};
