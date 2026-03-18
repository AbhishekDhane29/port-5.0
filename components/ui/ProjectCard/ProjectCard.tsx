import React from "react";
import { Badge } from "../Badge/Badge";
import type { ProjectCardProps } from "./ProjectCard.types";
import "./ProjectCard.css";

/**
 * ProjectCard
 *
 * Displays a project with a cover image, title, tags, and description.
 * Wraps in an anchor tag when `href` is provided.
 *
 * @example
 * <ProjectCard
 *   title="PropGPT"
 *   description="AI sports predictions made accessible..."
 *   imageSrc="/images/propgpt.png"
 *   tags={[{ label: "Design" }, { label: "Development" }]}
 *   href="/projects/propgpt"
 * />
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = "",
  tags,
  href,
  className = "",
}) => {
  const inner = (
    <>
      <div className="ds-project-card__image-wrapper">
        <img
          className="ds-project-card__image"
          src={imageSrc}
          alt={imageAlt || title}
        />
      </div>

      <div className="ds-project-card__body">
        <div className="ds-project-card__header">
          <span className="ds-project-card__title">{title}</span>
          <div className="ds-project-card__tags">
            {tags.map((tag) => (
              <Badge
                key={tag.label}
                label={tag.label}
                variant={tag.variant ?? "default"}
              />
            ))}
          </div>
        </div>
        <p className="ds-project-card__description">{description}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        className={`ds-project-card ${className}`.trim()}
        href={href}
        aria-label={title}
      >
        {inner}
      </a>
    );
  }

  return (
    <div className={`ds-project-card ${className}`.trim()}>
      {inner}
    </div>
  );
};

export default ProjectCard;
