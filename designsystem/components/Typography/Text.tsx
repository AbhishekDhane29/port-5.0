import React from "react";
import "./Text.css";

type TextVariant =
  | "hero"
  | "body-large"
  | "body"
  | "body-nav"
  | "caption"
  | "label"
  | "description"
  | "footer"
  | "available";

type TextColor = "primary" | "secondary" | "tertiary" | "subtle" | "accent" | "iterating";

type TextTag = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "label" | "small" | "div";

export interface TextProps {
  variant?: TextVariant;
  color?: TextColor;
  as?: TextTag;
  children: React.ReactNode;
  className?: string;
}

/**
 * Text
 *
 * Polymorphic typography primitive. Maps design-token type styles to any HTML element.
 *
 * @example
 * <Text variant="hero" color="primary">Hi there, I'm Abhishek</Text>
 * <Text variant="description" color="secondary">A gamified dashboard...</Text>
 * <Text variant="caption" color="tertiary" as="span">Resume</Text>
 */
export const Text: React.FC<TextProps> = ({
  variant = "body",
  color = "primary",
  as: Tag = "p",
  children,
  className = "",
}) => {
  return (
    <Tag
      className={`ds-text ds-text--${variant} ds-text--${color} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
};

export default Text;
