import React from "react";
import CardMUI from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardProps, CardCaptionProps } from "./Card.types";

/**
 * A card is a sheet of material that serves as an entry point to more detailed information!
 */
export const Card: React.FC<React.PropsWithChildren<CardProps>> = ({ children, style = {} }) => {

  return (
    <CardMUI style={style} variant="outlined">
      <CardContent data-testid="Components-Card">
        {children}
      </CardContent>
    </CardMUI>
  )
};

/**
 * The caption provided for a card object
 * @param param0
 */
export const CardCaption: React.FC<React.PropsWithChildren<CardCaptionProps>> = ({ children, style = {} }) => {

  return (
    <CardActions data-testid="Components-CardCaption" style={style}>
      {children}
    </CardActions>
  )
};

export default Card;
