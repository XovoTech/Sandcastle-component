import React, { CSSProperties } from "react";
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
declare const Thumbnail: React.FC<ThumbnailProps>;
export default Thumbnail;
