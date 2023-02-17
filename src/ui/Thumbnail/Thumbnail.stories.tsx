import * as React from "react";
import Thumbnail from "./";

export default {
  title: "Components/Basic UI/Thumbnail",
  component: Thumbnail,
};

export const Default: any = () => {
  return <Thumbnail src="" />;
};

Default.story = {
  parameters: {
    jest: ["Thumbnail"],
  },
};
