## Cursor Cloud specific instructions

This repository is a single Next.js 15 portfolio (`port-5`). There is no database, env file, or extra process. The only service is the Next.js dev server.

- Start it with `npm run dev` from the repo root (`package.json`). It listens on http://localhost:3000. Routes are `/`, `/about`, and `/projects`.
- There is no test script and no ESLint config. `npm run lint` runs `next lint`, which is interactive: it prompts to scaffold ESLint and will hang or write config if that prompt is answered. Use `npx tsc --noEmit` for a non-interactive check.
- The running UI is `app/`, `components/ui/`, `styles/`, and `tokens/`. `designsystem/` is a parallel copy and is not imported by the app.
- Project card images are remote Figma MCP URLs with a short lifetime (see the comment in `app/page.tsx`). Expired URLs do not stop the pages from rendering. `/resume.pdf` is linked from the home and about pages but is not in the repo, so that route returns 404.
