## Cursor Cloud specific instructions

This repository is a single Next.js 15 portfolio (`port-5`). There is no database, env file, or extra process. The only service is the Next.js dev server.

- Start it with `npm run dev` from the repo root (`package.json`). It listens on http://localhost:3000. Routes are `/`, `/about`, `/projects`, and `/projects/propgpt` (case study with grey media placeholders; real images not wired yet).
- There is no test script and no ESLint config. `npm run lint` runs `next lint`, which is interactive: it prompts to scaffold ESLint and will hang or write config if that prompt is answered. Use `npx tsc --noEmit` for a non-interactive check.
- The running UI is `app/`, `components/ui/`, `styles/`, and `tokens/`. `designsystem/` is a parallel copy and is not imported by the app.
- Project card images are remote Figma MCP URLs with a short lifetime (see the comment in `app/page.tsx`). Expired URLs do not stop the pages from rendering. `/resume.pdf` is linked from the home and about pages but is not in the repo, so that route returns 404.

### Motion + sound

- Animations use the `motion` package (`motion/react`). Shared presets live in `lib/motion.ts`. Entrance helpers are in `components/motion/Reveal.tsx`.
- Short UI sounds use a Web Audio bus in `lib/sound.ts` (`tap` / `soft` / `hover`). No sound files are required. `InteractionProvider` unlocks audio on the first pointer/key gesture and wraps the tree in `MotionConfig reducedMotion="user"`.
- Prefer transform/opacity animation only. Keep interactive islands as client components; leave page data in server components when possible.
- To add a new SFX later, either extend the synthesizer in `lib/sound.ts` or preload short files and play them through the same bus after `sound.unlock()`.
