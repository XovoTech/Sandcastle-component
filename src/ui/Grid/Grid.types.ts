import { ReactNode, CSSProperties } from "react";
import { BaseProps } from "../types";

export interface GridProps extends BaseProps {
  wrap?: boolean;
  justify?: string;
  align?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export interface CellProps extends BaseProps {
  grow?: number;
  basis?: string;
  align?: string;
  order?: number;
}
