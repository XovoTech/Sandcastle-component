import * as React from "react";
import { AvatarProps } from "./Avatar.types";

import AvatarMUI from '@mui/material/Avatar';

/**
 * This component lets you display an Avatar icon on the page
 * @param {object} props The props
 * @returns {function} The component
 */
const Avatar: React.FC<React.PropsWithChildren<AvatarProps>> = ({
  src = "",
  role = "presentation",
  alt = "",
  style = {},
  className = '',
  children = null,
}) => {

  return <AvatarMUI src={src} className={className} style={style} alt={alt}>{children}</AvatarMUI>
};

export default Avatar;
