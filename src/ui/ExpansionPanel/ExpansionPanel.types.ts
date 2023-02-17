import { CSSProperties, ReactNode } from "react";
import type { IconList } from "../FontIcon/FontIcon.types";

export interface ExpansionPanelProps {
  /**
   * An optional icon to show for the expansion panel
   */
  icon?: IconList;

  id?: string;

  /**
   * An optional style for the panel to use
   */
  style?: CSSProperties;

  /**
   * The label to use for the expansion panel
   */
  label?: string;

  /**
   * Whether or not the panel is expanded or collapsed
   */
  isExpanded?: boolean;

  /**
   * What to render in the footer of the expansion panel
   */
  footer?: ReactNode;

  /**
   * A function to call when the expansion panel's expanded state is toggled.
   * The callback for this function will include the new expanded state.
   */
  onExpandToggle?: (expanded: boolean) => void;

  /**
   * The content to display inside the expansion panel when it's expanded
   */
  children?: ReactNode;
}
