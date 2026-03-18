/**
 * Border Radius Tokens
 * Extracted from PropGPT Figma design (node 29:1928)
 */

export const borderRadius = {
  none: "0px",
  sm: "1px",          // Project cards, badges/tags
  md: "3px",          // Social icon buttons
  full: "9999px",     // Availability dot (effectively full-round)
} as const;

export type BorderRadiusToken = typeof borderRadius;
