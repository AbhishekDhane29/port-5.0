export type BadgeVariant = "default" | "iterating";

export interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}
