# System One

An interactive system-design learning workspace built with Next.js, React, TypeScript, and Tailwind CSS. The initial library includes 13 concept lessons, eight interview walkthroughs, 14 comparison pages, and 12 cheat sheets, separated from the UI in `src/content`.

## Development

Requires Node.js 22+ and npm. No credentials or external services are needed.

```sh
npm ci --cache /workspace/.npm-cache
npm run dev
```

Open the development server on port 3000. To validate and run a production build:

```sh
npm run typecheck
npm run build
npm start
```

## Features

- HLD / LLD curriculum, roadmap, prerequisites, quizzes, and related lessons
- Progressive architecture diagrams with component inspection, zoom, and fullscreen
- Capacity estimation calculator
- Timed interview practice with progressive hints and per-problem notes
- Global search (Ctrl/Cmd + K), comparisons, cheat sheets, bookmarks, light/dark themes
- Responsive workspace and keyboard-accessible controls

Progress, bookmarks, theme, and interview notes are stored in this browser's localStorage. They are not synchronized across devices. Educational code blocks illustrate core ideas; adapter types referenced in excerpts are not executable integrations. This release has no accounts, billing, or backend service; adding those requires authentication, server-side persistence, and deployment configuration.

Add lessons to `src/content/lessons.ts`, walkthroughs to `src/content/designs.ts`, and SOLID examples to `src/content/solid.ts`. The roadmap and search consume these catalogs directly. This initial release concentrates on the requested representative topics rather than pretending to provide the entire future A–Z catalog.

## Verification

TypeScript checks and the production build pass. Browser smoke checks cover lesson quizzes, saved progress, bookmarks, search, diagram progression, the capacity calculator, interview hints and timer, dark theme, and mobile navigation without overflow or browser exceptions.

Sites publication is not completed: the required Sites source workflow and packaging scripts are unavailable in this workspace. No deployed URL has been verified.
