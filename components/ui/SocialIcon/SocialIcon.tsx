import React from "react";
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
 *
 * Pass children as the icon (SVG or img).
 *
 * @example
 * <SocialIcon platform="linkedin" href="https://linkedin.com/in/abhishekdhane">
 *   <img src={linkedinIcon} alt="" />
 * </SocialIcon>
 */
export const SocialIcon: React.FC<SocialIconProps & { children?: React.ReactNode }> = ({
  platform,
  href,
  className = "",
  children,
}) => {
  return (
    <a
      className={`ds-social-icon ${className}`.trim()}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={platformLabels[platform]}
    >
      <span className="ds-social-icon__inner" aria-hidden="true">
        {children}
      </span>
    </a>
  );
};

export default SocialIcon;
