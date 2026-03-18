/**
 * Color Tokens
 * Extracted from PropGPT Figma design (node 29:1928)
 * Light theme palette
 */

export const colors = {
  // --- Backgrounds ---
  background: {
    primary: "#ffffff",       // Page background
    surface: "#f0f0f0",       // Card surface, badges, borders
  },

  // --- Text ---
  text: {
    primary: "#212121",       // Headings, project names, nav active
    secondary: "#9e9e9e",     // Subheadings, body muted, descriptions
    tertiary: "#737373",      // Resume link, small captions
    subtle: "#666666",        // "read more" link
  },

  // --- Borders ---
  border: {
    default: "#f0f0f0",       // Card borders, button outlines
  },

  // --- Accent ---
  accent: {
    blue: "#2f80ed",          // Availability indicator dot
  },

  // --- Status ---
  status: {
    iterating: {
      background: "#ffe6d9",  // "Iterating.." badge background
      text: "#e85613",        // "Iterating.." badge text
    },
  },
} as const;

export type ColorToken = typeof colors;
