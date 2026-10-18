"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { springSoft } from "@/lib/motion";
import { sound } from "@/lib/sound";
import "./ResumeLink.css";

export interface ResumeLinkProps {
  href: string;
  label?: string;
  className?: string;
}

const arrowVariants = {
  rest: { x: 0, y: 0 },
  hover: { x: 2, y: -2 },
};

/**
 * ResumeLink
 *
 * Dashed underline CTA used in the hero section to link to a resume PDF.
 * Uses Space Mono for the monospace, technical feel.
 */
export const ResumeLink: React.FC<ResumeLinkProps> = ({
  href,
  label = "Resume",
  className = "",
}) => {
  const reduce = useReducedMotion();

  return (
    <motion.a
      className={`ds-resume-link ${className}`.trim()}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${label}`}
      onClick={() => sound.play("tap")}
      initial="rest"
      whileHover={reduce ? undefined : "hover"}
      animate="rest"
      transition={springSoft}
    >
      <span className="ds-resume-link__label">{label}</span>
      <motion.span
        className="ds-resume-link__arrow"
        aria-hidden="true"
        variants={reduce ? undefined : arrowVariants}
        transition={springSoft}
      >
        ↗
      </motion.span>
    </motion.a>
  );
};

export default ResumeLink;
