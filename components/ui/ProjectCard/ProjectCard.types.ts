import type { BadgeVariant } from "../Badge/Badge.types";

export interface ProjectTag {
  label: string;
  variant?: BadgeVariant;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  tags: ProjectTag[];
  href?: string;
  className?: string;
}
