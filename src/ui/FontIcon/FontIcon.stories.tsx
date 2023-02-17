import * as React from "react";
import FontIcon from "./";

export default {
  title: "Components/Basic UI/FontIcon",
  component: FontIcon,
};

export const Default: any = () => <FontIcon>more_time</FontIcon>;

Default.story = {
  parameters: {
    jest: ["FontIcon"],
  },
};
