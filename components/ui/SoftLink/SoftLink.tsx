"use client";

import React from "react";
import { sound } from "@/lib/sound";

export interface SoftLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  sound?: "tap" | "soft" | "hover" | false;
}

/**
 * SoftLink
 *
 * Plain anchor that plays a short UI sound on click.
 * Use for in-page CTAs that are not part of a richer motion component.
 */
export const SoftLink: React.FC<SoftLinkProps> = ({
  sound: soundId = "tap",
  onClick,
  children,
  ...rest
}) => {
  return (
    <a
      {...rest}
      onClick={(event) => {
        if (soundId) sound.play(soundId);
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
};

export default SoftLink;
