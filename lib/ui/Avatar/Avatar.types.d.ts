import * as React from "react";
export interface AvatarProps {
    /**
     * An optional image source to use for the avatar.
     */
    src: string;
    /**
     * A role for the avatar's image. When the src prop is set, either a role of presentation or the alt prop must be defined for a11y.
     */
    role?: "presentation";
    /**
     * An optional image alt to use for the avatar if it is an image.
     */
    alt?: string;
    /**
     * Any css style you want to pass along
     */
    style?: React.CSSProperties;
    /**
     * Any css style you want to pass along
     */
    className?: string;
}
