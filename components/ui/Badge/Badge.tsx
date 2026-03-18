import React from "react";
import type { BadgeProps } from "./Badge.types";
import "./Badge.css";

/**
 * Badge
 *
 * Used for project tags (Design, Development) and status labels (Iterating..).
 *
 * @example
 * <Badge label="Design" />
 * <Badge label="Iterating.." variant="iterating" />
 */
export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = "default",
  className = "",
}) => {
  return (
    <span
      className={`ds-badge ds-badge--${variant} ${className}`.trim()}
      aria-label={label}
    >
      {label}
    </span>
  );
};

export default Badge;
