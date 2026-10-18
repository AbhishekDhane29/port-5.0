"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Badge } from "../Badge/Badge";
import type { ProjectCardProps } from "./ProjectCard.types";
import { springSoft } from "@/lib/motion";
import { sound } from "@/lib/sound";
import "./ProjectCard.css";

/**
 * ProjectCard
 *
 * Displays a project with a cover image, title, tags, and description.
 * Wraps in an anchor tag when `href` is provided.
 * Hover uses transform-only motion for a smooth, GPU-friendly lift.
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
  const reduce = useReducedMotion();
  const classes = `ds-project-card ${className}`.trim();

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

  const interaction = {
    onPointerEnter: () => sound.play("hover"),
    onClick: () => sound.play("soft"),
  };

  if (href) {
    return (
      <motion.a
        className={classes}
        href={href}
        aria-label={title}
        whileHover={reduce ? undefined : { y: -4 }}
        transition={springSoft}
        {...interaction}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.div
      className={classes}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={springSoft}
      {...interaction}
    >
      {inner}
    </motion.div>
  );
};

export default ProjectCard;
