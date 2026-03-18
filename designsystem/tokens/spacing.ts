/**
 * Spacing Tokens
 * Extracted from PropGPT Figma design (node 29:1928)
 * Based on a 4px base unit system
 */

export const spacing = {
  0: "0px",
  1: "4px",      // Icon gaps (Resume link icon gap)
  2: "6px",      // Badge horizontal padding
  3: "8px",      // Social icon padding, small gaps
  4: "10px",     // Card padding
  5: "12px",     // Card gap, tag gap
  6: "14px",     // Header logo gap, nav gap
  7: "20px",     // Nav links spacing
  8: "21px",     // Header vertical padding
  9: "24px",     // Page horizontal padding, header padding
  10: "60px",    // Section gap (vertical rhythm)
  11: "100px",   // Hero section bottom padding
  12: "160px",   // Hero section top padding
} as const;

export const layout = {
  maxWidth: "1728px",           // Maximum content width
  pageGutterX: "24px",          // Page horizontal padding
  sectionGap: "60px",           // Vertical gap between major sections
  cardPadding: "10px",          // Internal card padding
  headerPaddingY: "21px",       // Header vertical padding
  headerPaddingX: "24px",       // Header horizontal padding
} as const;

export type SpacingToken = typeof spacing;
export type LayoutToken = typeof layout;
