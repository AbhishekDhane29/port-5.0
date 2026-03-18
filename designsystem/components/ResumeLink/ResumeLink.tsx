import React from "react";
import "./ResumeLink.css";

export interface ResumeLinkProps {
  href: string;
  label?: string;
  className?: string;
}

/**
 * ResumeLink
 *
 * Dashed underline CTA used in the hero section to link to a resume PDF.
 * Uses Space Mono for the monospace, technical feel.
 *
 * @example
 * <ResumeLink href="/resume.pdf" />
 */
export const ResumeLink: React.FC<ResumeLinkProps> = ({
  href,
  label = "Resume",
  className = "",
}) => {
  return (
    <a
      className={`ds-resume-link ${className}`.trim()}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${label}`}
    >
      <span className="ds-resume-link__label">{label}</span>
      <span className="ds-resume-link__arrow" aria-hidden="true">↗</span>
    </a>
  );
};

export default ResumeLink;
