import { ReactNode, CSSProperties } from "react";
import { BaseProps } from "../types";

export interface DialogProps extends BaseProps {
  /**
   * CSS Style for the popup overlay
   */
  overlayStyle?: CSSProperties;

  /**
   * Whether or not the popup window should be centered
   */
  centered?: boolean;

  /**
   * Whether or not to show an overlay behind the popup
   */
  overlay?: boolean;

  /**
   * Whether or not to show the popup as a full screen popup
   */
  fullscreen?: boolean;

  /**
   * The url to navigate to when the [close] button is pressed
   */
  closeHref?: string;

  /**
   * The action to perform when the [close] button is pressed
   */
  closeAction?: () => void;

  /**
   * Trigerred when the [close] button is pressed
   */
  onClose?: () => void;
}

export interface DialogTitleProps extends BaseProps {}

export interface DialogBodyProps extends BaseProps {}

export interface DialogFooterProps extends BaseProps {}
