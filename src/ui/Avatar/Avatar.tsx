import * as React from "react";
import {  Avatar as AvatarMD  } from "react-md";
import { AvatarProps } from "./Avatar.types";

/**
 * This component lets you display an Avatar icon on the page
 * @param {object} props The props
 * @returns {function} The component
 */
const Avatar: React.FC<AvatarProps> = ({
  src = "",
  role = "presentation",
  alt = "",
  style = {},
}) => <AvatarMD src={src} role={role} alt={alt} style={style} />;

export default Avatar;
