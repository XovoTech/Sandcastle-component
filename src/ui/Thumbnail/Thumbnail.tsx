import React, { CSSProperties } from "react";
import thumbnailStyle from "./style";

interface ThumbnailProps {
  /**
   * The image url to display for the thumbnail
   */
  src: string;

  /**
   * The style to use for the thumbnail
   */
  style?: CSSProperties;
}

/**
 * You can use the Thumbnail component to display images (especially screenshots)
 * @param {object} props The props
 * @returns {function} The component
 */
const Thumbnail: React.FC<ThumbnailProps> = ({ style = {}, src }) => (
  <img
    data-testid="Components-Thumbnail"
    alt=""
    src={src}
    style={{ ...thumbnailStyle, ...style }}
  />
);

export default Thumbnail;
