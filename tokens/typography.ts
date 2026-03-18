/**
 * Typography Tokens
 * Extracted from PropGPT Figma design (node 29:1928)
 */

export const fontFamilies = {
  satoshi: "'Satoshi', sans-serif",
  spaceMono: "'Space Mono', monospace",
} as const;

export const fontWeights = {
  regular: 400,
  medium: 500,
} as const;

export const fontSizes = {
  xs: "12px",    // Badge labels, project descriptions
  sm: "14px",    // Caption, footer, resume link, "read more"
  md: "16px",    // Body, navigation links
  lg: "18px",    // Bio / body large
  xl: "32px",    // Hero heading
} as const;

export const lineHeights = {
  none: "0",
  tight: "1.2",        // Hero heading (38.4px / 32px)
  snug: "1.26",        // Body nav (20.16px / 16px)
  normal: "1.3",       // Body large (23.4px / 18px)
  relaxed: "1.4",      // Caption, footer (19.6px / 14px)
  loose: "1.26",       // Badge label (15.12px / 12px)
} as const;

export const letterSpacings = {
  none: "0",
  sm: "0.28px",        // Resume link (Space Mono)
  md: "0.56px",        // Footer copyright
  lg: "0.64px",        // "Available for hire"
} as const;

export const typeScale = {
  heroHeading: {
    fontFamily: fontFamilies.satoshi,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.xl,
    lineHeight: "38.4px",
    letterSpacing: letterSpacings.none,
  },
  bodyLarge: {
    fontFamily: fontFamilies.satoshi,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.lg,
    lineHeight: "23.4px",
    letterSpacing: letterSpacings.none,
  },
  body: {
    fontFamily: fontFamilies.satoshi,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.md,
    lineHeight: "19.2px",
    letterSpacing: letterSpacings.none,
  },
  bodyNav: {
    fontFamily: fontFamilies.satoshi,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.md,
    lineHeight: "20.16px",
    letterSpacing: letterSpacings.none,
  },
  caption: {
    fontFamily: fontFamilies.spaceMono,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.sm,
    lineHeight: "19.6px",
    letterSpacing: letterSpacings.sm,
  },
  label: {
    fontFamily: fontFamilies.satoshi,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.xs,
    lineHeight: "14.4px",
    letterSpacing: letterSpacings.none,
  },
  description: {
    fontFamily: fontFamilies.satoshi,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.xs,
    lineHeight: "15.12px",
    letterSpacing: letterSpacings.none,
  },
  footer: {
    fontFamily: fontFamilies.satoshi,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.sm,
    lineHeight: "19.6px",
    letterSpacing: letterSpacings.md,
  },
  available: {
    fontFamily: fontFamilies.satoshi,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.md,
    lineHeight: "16px",
    letterSpacing: letterSpacings.lg,
  },
} as const;

export type TypographyToken = typeof typeScale;
