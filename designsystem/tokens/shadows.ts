/**
 * Shadow Tokens
 * The PropGPT design is intentionally shadow-free — depth is conveyed
 * through borders and background fills rather than drop shadows.
 * These tokens are included as a forward-looking extension point.
 */

export const shadows = {
  none: "none",
  subtle: "0 1px 3px rgba(0, 0, 0, 0.06)",    // Slight card lift
  soft: "0 2px 8px rgba(0, 0, 0, 0.08)",       // Modal / popover
  medium: "0 4px 16px rgba(0, 0, 0, 0.10)",    // Dropdown
} as const;

export type ShadowToken = typeof shadows;
