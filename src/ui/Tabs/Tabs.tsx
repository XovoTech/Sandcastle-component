import * as React from "react";
import { Grid } from "..";
import tabStyle, { generateBackgroundColors } from "./style";

import { TabsProps } from "./Tabs.types";

/**
 * Tabs make it easy to explore and switch between different views of an app or
 * categorized data sets.
 * @param {object} props The props
 * @returns {function} The component
 */
const Tabs: React.FC<React.PropsWithChildren<TabsProps>> = ({
  vertical = false,
  transparent = true,
  style = {},
  children,
}) => {
  const backgroundStyle = generateBackgroundColors({ transparent });
  const className = transparent ? "transparent" : "colored-tab";
  return (
    <div data-testid="Components-Tabs">
      <Grid
        wrap={vertical}
        className={className}
        style={{ ...tabStyle.tabs, ...backgroundStyle, ...style }}
        justify={vertical ? "space-evenly" : "center"}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child as any, { vertical: vertical })
        )}
      </Grid>
    </div>
  );
};

export default Tabs;
