# Design System

**Source:** [PropGPT — Figma Design](https://www.figma.com/design/UtoNEmY9p0r2EvFQrgCPms/PropGPT---Screens?node-id=29-1928)  
**Stack:** React + TypeScript + CSS Custom Properties  
**Theme:** Light

---

## Table of Contents

1. [Overview](#overview)
2. [Folder Structure](#folder-structure)
3. [Getting Started](#getting-started)
4. [Design Tokens](#design-tokens)
   - [Colors](#colors)
   - [Typography](#typography)
   - [Spacing](#spacing)
   - [Border Radius](#border-radius)
   - [Shadows](#shadows)
5. [CSS Variables](#css-variables)
6. [Components](#components)
   - [Badge](#badge)
   - [ProjectCard](#projectcard)
   - [NavLink](#navlink)
   - [StatusIndicator](#statusindicator)
   - [ResumeLink](#resumelink)
   - [Text](#text)
   - [SocialIcon](#socialicon)
   - [Header](#header)
   - [Footer](#footer)
7. [Design Principles](#design-principles)

---

## Overview

This design system is extracted directly from a Figma design for a product designer portfolio (Abhishek Dhane). It follows a **minimal, high-contrast, whitespace-first** aesthetic with:

- A single light background
- Two type families: **Satoshi** (primary) and **Space Mono** (mono/code)
- A restrained 6-color palette
- No shadows — depth is expressed through borders
- Pixel-precise spacing derived from a **4px base unit**

---

## Folder Structure

```
designsystem/
├── tokens/
│   ├── colors.ts          # Color palette as typed constants
│   ├── typography.ts      # Font families, sizes, weights, line heights
│   ├── spacing.ts         # Spacing scale + layout constants
│   ├── borderRadius.ts    # Radius scale
│   ├── shadows.ts         # Shadow scale (extension point)
│   └── index.ts           # Re-exports all tokens
│
├── styles/
│   ├── variables.css      # All tokens as CSS custom properties
│   ├── typography.css     # Type utility classes + color utilities
│   └── globals.css        # Reset, base styles, layout utilities
│
├── components/
│   ├── Badge/             # Tag + status badge
│   ├── ProjectCard/       # Project tile with image, tags, description
│   ├── NavLink/           # Header navigation link
│   ├── StatusIndicator/   # "Available for hire" dot + label
│   ├── ResumeLink/        # Dashed underline resume CTA
│   ├── Typography/        # Polymorphic Text primitive
│   ├── SocialIcon/        # Social link icon button
│   ├── Header/            # Site header with nav + status
│   ├── Footer/            # Site footer with copyright, quote, socials
│   └── index.ts           # Re-exports all components + types
│
├── index.ts               # Root re-export (tokens + components)
└── DESIGN_SYSTEM.md       # This file
```

---

## Getting Started

### 1. Install fonts

Add **Satoshi** and **Space Mono** to your project. Satoshi is available via [Fontshare](https://www.fontshare.com/fonts/satoshi). Space Mono is on Google Fonts.

```html
<!-- Google Fonts - Space Mono -->
<link href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap" rel="stylesheet" />

<!-- Fontshare - Satoshi -->
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@500,400&display=swap" rel="stylesheet" />
```

### 2. Import global styles

At the root of your application (e.g. `main.tsx`, `_app.tsx`, or `index.css`):

```css
@import "./designsystem/styles/globals.css";
```

This imports `variables.css` and `typography.css` automatically.

### 3. Use components

```tsx
import { Badge, ProjectCard, Header, Footer, Text } from "./designsystem";

// or import individual components:
import { Badge } from "./designsystem/components/Badge/Badge";
```

---

## Design Tokens

### Colors

| Token | Value | Usage |
|---|---|---|
| `--color-bg-primary` | `#ffffff` | Page background |
| `--color-bg-surface` | `#f0f0f0` | Badge fill, card surface, borders |
| `--color-text-primary` | `#212121` | Headings, project titles, active nav |
| `--color-text-secondary` | `#9e9e9e` | Subheadings, descriptions, footer text |
| `--color-text-tertiary` | `#737373` | Resume link, captions |
| `--color-text-subtle` | `#666666` | "Read more" link |
| `--color-border-default` | `#f0f0f0` | Card borders, button outlines |
| `--color-accent-blue` | `#2f80ed` | Availability indicator dot |
| `--color-status-iterating-bg` | `#ffe6d9` | "Iterating.." badge background |
| `--color-status-iterating-text` | `#e85613` | "Iterating.." badge text |

**TypeScript:**
```ts
import { colors } from "./designsystem/tokens/colors";

colors.text.primary        // "#212121"
colors.accent.blue         // "#2f80ed"
colors.status.iterating.background  // "#ffe6d9"
```

---

### Typography

#### Font Families

| Token | Value | Usage |
|---|---|---|
| `--font-satoshi` | `'Satoshi', sans-serif` | All UI text |
| `--font-space-mono` | `'Space Mono', monospace` | Resume link, captions |

#### Font Sizes

| Token | px | Usage |
|---|---|---|
| `--font-size-xs` | `12px` | Badge labels, project descriptions |
| `--font-size-sm` | `14px` | Footer, captions, "read more" |
| `--font-size-md` | `16px` | Body text, nav links |
| `--font-size-lg` | `18px` | Bio / body large |
| `--font-size-xl` | `32px` | Hero heading |

#### Type Scale

| Scale name | Size | Line height | Font | Usage |
|---|---|---|---|---|
| `hero` | 32px | 38.4px | Satoshi Medium | Hero name + title |
| `body-large` | 18px | 23.4px | Satoshi Medium | Bio paragraph |
| `body-nav` | 16px | 20.16px | Satoshi Medium | Project card titles |
| `body` | 16px | 19.2px | Satoshi Medium | Navigation |
| `caption` | 14px | 19.6px | Space Mono Regular | Resume link |
| `footer` | 14px | 19.6px | Satoshi Medium | Footer text |
| `label` | 12px | 14.4px | Satoshi Medium | Badge labels |
| `description` | 12px | 15.12px | Satoshi Medium | Project descriptions |
| `available` | 16px | 16px | Satoshi Medium | Status indicator |

**CSS utility classes** (from `typography.css`):
```html
<p class="text-hero text-primary">Hi there, I'm Abhishek</p>
<p class="text-description text-secondary">A gamified dashboard...</p>
<span class="text-caption text-tertiary">Resume</span>
```

---

### Spacing

Based on a **4px base unit**.

| Token | Value | Usage |
|---|---|---|
| `--space-1` | `4px` | Icon gap (resume link) |
| `--space-2` | `6px` | Badge horizontal padding |
| `--space-3` | `8px` | Social icon padding |
| `--space-4` | `10px` | Card padding |
| `--space-5` | `12px` | Card gap, tag gap |
| `--space-6` | `14px` | Header nav gap |
| `--space-7` | `20px` | Nav links spacing |
| `--space-8` | `21px` | Header vertical padding |
| `--space-9` | `24px` | Page horizontal gutter |
| `--space-10` | `60px` | Section vertical gap |
| `--space-11` | `100px` | Hero bottom padding |
| `--space-12` | `160px` | Hero top padding |

**Layout constants:**

| Token | Value |
|---|---|
| `--layout-max-width` | `1728px` |
| `--layout-page-gutter-x` | `24px` |
| `--layout-section-gap` | `60px` |
| `--layout-card-padding` | `10px` |

---

### Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-none` | `0px` | — |
| `--radius-sm` | `1px` | Cards, badges |
| `--radius-md` | `3px` | Social icon buttons |
| `--radius-full` | `9999px` | Availability dot |

---

### Shadows

The design intentionally uses no drop shadows. Depth is communicated through `1px solid #f0f0f0` borders. Shadow tokens are provided as a forward-looking extension point.

| Token | Value |
|---|---|
| `--shadow-none` | `none` |
| `--shadow-subtle` | `0 1px 3px rgba(0,0,0,0.06)` |
| `--shadow-soft` | `0 2px 8px rgba(0,0,0,0.08)` |
| `--shadow-medium` | `0 4px 16px rgba(0,0,0,0.10)` |

---

## CSS Variables

All tokens are available as CSS custom properties. Import `variables.css` and use them anywhere:

```css
.my-component {
  color: var(--color-text-primary);
  font-family: var(--font-satoshi);
  font-size: var(--font-size-md);
  padding: var(--space-4);
  border-radius: var(--radius-sm);
  border: var(--border-default);
}
```

---

## Components

### Badge

Compact label used for project tags and status indicators.

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | required | Text content |
| `variant` | `"default" \| "iterating"` | `"default"` | Visual style |
| `className` | `string` | `""` | Extra CSS classes |

```tsx
// Default tag (Design, Development)
<Badge label="Design" />
<Badge label="Development" />

// Status badge
<Badge label="Iterating.." variant="iterating" />
```

**Variants:**
- `default` — `#f0f0f0` background, `#212121` text, `1px` radius
- `iterating` — `#ffe6d9` background, `#e85613` text, `1px` radius, `20px` height

---

### ProjectCard

Displays a project with thumbnail, title, tags, and description.

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | required | Project name |
| `description` | `string` | required | Short project description |
| `imageSrc` | `string` | required | Cover image URL |
| `imageAlt` | `string` | `""` | Image alt text |
| `tags` | `ProjectTag[]` | required | Array of `{ label, variant? }` |
| `href` | `string` | — | Optional link URL |
| `className` | `string` | `""` | Extra CSS classes |

```tsx
<ProjectCard
  title="PropGPT"
  description="AI sports predictions made accessible through smart insights and UI."
  imageSrc="/images/propgpt.png"
  imageAlt="PropGPT app screenshot"
  tags={[
    { label: "Design" },
    { label: "Development" },
  ]}
  href="/projects/propgpt"
/>

<ProjectCard
  title="VRBO"
  description="Redesigned the property booking experience to reduce decision friction."
  imageSrc="/images/vrbo.png"
  tags={[{ label: "Iterating..", variant: "iterating" }]}
/>
```

---

### NavLink

Navigation anchor for the site header.

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | required | Link text |
| `href` | `string` | required | Destination URL |
| `active` | `boolean` | `false` | Active/current page state |
| `className` | `string` | `""` | Extra CSS classes |

```tsx
<NavLink label="Projects" href="/" />
<NavLink label="Info" href="/info" active />
```

**States:**
- Default — `#9e9e9e`
- Active / hover — `#212121`

---

### StatusIndicator

The "Available for hire" blue dot + label in the header.

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | `"Available for hire"` | Status text |
| `className` | `string` | `""` | Extra CSS classes |

```tsx
<StatusIndicator />
<StatusIndicator label="Open to freelance" />
```

---

### ResumeLink

Dashed-underline CTA link. Uses Space Mono for a technical feel.

| Prop | Type | Default | Description |
|---|---|---|---|
| `href` | `string` | required | Resume URL |
| `label` | `string` | `"Resume"` | Link text |
| `className` | `string` | `""` | Extra CSS classes |

```tsx
<ResumeLink href="/resume.pdf" />
<ResumeLink href="/resume.pdf" label="View Resume" />
```

---

### Text

Polymorphic typography primitive. Renders any HTML tag with the correct type style.

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `TextVariant` | `"body"` | Type scale name |
| `color` | `TextColor` | `"primary"` | Text color token |
| `as` | `TextTag` | `"p"` | HTML element to render |
| `children` | `ReactNode` | required | Content |
| `className` | `string` | `""` | Extra CSS classes |

**Variants:** `hero`, `body-large`, `body`, `body-nav`, `caption`, `label`, `description`, `footer`, `available`

**Colors:** `primary`, `secondary`, `tertiary`, `subtle`, `accent`, `iterating`

```tsx
<Text variant="hero" color="secondary">Hi there, I'm </Text>
<Text variant="hero" color="primary">Abhishek</Text>

<Text variant="body-large" color="primary">
  I design thoughtful interaction systems for complex products.
</Text>

<Text variant="description" color="secondary">
  A gamified dashboard system for credit-card fraud teams.
</Text>

<Text variant="footer" color="secondary" as="span">
  © 2026 Abhishek Dhane • Built with framer
</Text>
```

---

### SocialIcon

Icon button for social profile links in the footer.

| Prop | Type | Default | Description |
|---|---|---|---|
| `platform` | `"linkedin" \| "instagram" \| "x"` | required | Platform identifier (for aria-label) |
| `href` | `string` | required | Profile URL |
| `children` | `ReactNode` | — | Icon (SVG or img) |
| `className` | `string` | `""` | Extra CSS classes |

```tsx
<SocialIcon platform="linkedin" href="https://linkedin.com/in/abhishekdhane">
  <img src={linkedinSvg} alt="" />
</SocialIcon>

<SocialIcon platform="x" href="https://x.com/abhishekdhane">
  <img src={xSvg} alt="" />
</SocialIcon>
```

---

### Header

Full-width site header with navigation and status indicator.

| Prop | Type | Default | Description |
|---|---|---|---|
| `navItems` | `HeaderNavItem[]` | see below | Navigation links |
| `statusLabel` | `string` | `"Available for hire"` | Status text |
| `showStatus` | `boolean` | `true` | Toggle status indicator |
| `className` | `string` | `""` | Extra CSS classes |

```tsx
<Header
  navItems={[
    { label: "Projects", href: "/", active: false },
    { label: "Info", href: "/info", active: true },
  ]}
  statusLabel="Available for hire"
/>
```

---

### Footer

Three-column footer: copyright · quote · social icons.

| Prop | Type | Default | Description |
|---|---|---|---|
| `copyright` | `string` | `"© 2026 Abhishek Dhane • Built with framer"` | Left column |
| `quote` | `string` | `"If it looks simple, I fought for it."` | Center column |
| `socialLinks` | `FooterSocialLink[]` | `[]` | Right column social icons |
| `className` | `string` | `""` | Extra CSS classes |

```tsx
<Footer
  copyright="© 2026 Abhishek Dhane • Built with framer"
  quote="If it looks simple, I fought for it."
  socialLinks={[
    { platform: "linkedin", href: "https://linkedin.com/in/abhishekdhane", icon: <img src={li} alt="" /> },
    { platform: "instagram", href: "https://instagram.com/abhishekdhane", icon: <img src={ig} alt="" /> },
    { platform: "x", href: "https://x.com/abhishekdhane", icon: <img src={x} alt="" /> },
  ]}
/>
```

---

## Design Principles

The design system reflects these visual and UX principles observed in the Figma file:

### 1. Radical restraint
Only 6 colors. No gradients. No shadows. The entire palette is monochromatic gray + one blue dot + one orange status. Every pixel earns its place.

### 2. Typography does the work
Without color or shadows for hierarchy, type weight, size, and color-opacity create all depth. `#212121` vs `#9e9e9e` is the primary contrast mechanism.

### 3. Borders over elevation
Cards and buttons use a `1px solid #f0f0f0` border rather than box shadows. This keeps the design flat and legible at all viewport sizes.

### 4. Space is an element
60px between sections. 160px top padding in the hero. Whitespace is deliberate and communicates confidence.

### 5. Monospace for meta
`Space Mono` appears only for the resume link — using a monospace face signals "document / artifact" without needing an icon.

### 6. Status uses warm orange, not red
`#e85613` on `#ffe6d9` for "Iterating.." reads as constructive work-in-progress, not an error. The warm palette signals energy, not failure.

---

*Generated from Figma design node `29:1928` on 2026-03-16.*
