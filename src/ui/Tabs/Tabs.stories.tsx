import * as React from "react";
import { Tabs, Tab } from "../";

export default {
  title: "Components/Basic UI/Tabs",
  component: Tabs,
};

export const Default: any = () => {
  const [tab, switchTab] = React.useState<string>("first");
  return (
    <div>
      <Tabs transparent>
        <Tab active={tab === "first"} onClick={() => switchTab("first")}>
          First Tab
        </Tab>
        <Tab active={tab === "second"} onClick={() => switchTab("second")}>
          Second Tab
        </Tab>
        <Tab active={tab === "third"} onClick={() => switchTab("third")}>
          Third Tab
        </Tab>
      </Tabs>
      <div>{tab.toUpperCase()} TAB</div>
    </div>
  );
};

Default.story = {
  parameters: {
    jest: ["Tabs"],
  },
};
