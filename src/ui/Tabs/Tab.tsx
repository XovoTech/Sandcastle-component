import * as React from "react";
import { Link } from "react-router-dom";
import { Cell } from "..";
import style from "./style";

import { TabProps } from "./Tabs.types";

const Tab: React.FC<TabProps> = ({
  vertical = false,
  active = false,
  currentTab = false,
  name = "",
  onClick = () => null,
  href = "#",
  children,
}) => {
  const activeTabStyle = vertical ? style.tabActiveVertical : style.tabActive;
  let isActive = active ? activeTabStyle : null;
  isActive = currentTab === name ? activeTabStyle : isActive;

  return (
    <Link onClick={onClick} to={href}>
      <Cell style={{ ...style.tab, ...isActive }}>{children}</Cell>
    </Link>
  );
};

export default Tab;
