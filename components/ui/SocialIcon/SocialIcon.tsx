"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { springSoft } from "@/lib/motion";
import { sound } from "@/lib/sound";
import "./SocialIcon.css";

export type SocialPlatform = "linkedin" | "instagram" | "x";

export interface SocialIconProps {
  platform: SocialPlatform;
  href: string;
  className?: string;
}

const platformLabels: Record<SocialPlatform, string> = {
  linkedin: "LinkedIn",
  instagram: "Instagram",
  x: "X (Twitter)",
};

/**
 * SocialIcon
 *
 * Icon button for social links displayed in the footer.
 * Renders a bordered square button containing the platform icon slot.
 */
export const SocialIcon: React.FC<
  SocialIconProps & { children?: React.ReactNode }
> = ({ platform, href, className = "", children }) => {
  const reduce = useReducedMotion();

  return (
    <motion.a
      className={`ds-social-icon ${className}`.trim()}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={platformLabels[platform]}
      onClick={() => sound.play("tap")}
      onPointerEnter={() => sound.play("hover")}
      whileHover={reduce ? undefined : { scale: 1.04 }}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      transition={springSoft}
    >
      <span className="ds-social-icon__inner" aria-hidden="true">
        {children}
      </span>
    </motion.a>
  );
};

export default SocialIcon;
