import React from "react";

import { CardProps, CardCaptionProps } from "./Card.types";

/**
 * A card is a sheet of material that serves as an entry point to more detailed information!
 */
export const Card: React.FC<React.PropsWithChildren<CardProps>> = ({ children, style = {} }) => (
  <div data-testid="Components-Card" role="group" style={{ ...style }}>
    {children}
  </div>
);

/**
 * The caption provided for a card object
 * @param param0
 */
export const CardCaption: React.FC<React.PropsWithChildren<CardCaptionProps>> = ({ children, style = {} }) => (
  <div data-testid="Components-CardCaption" role="cell" style={style}>
    {children}
  </div>
);

export default Card;
