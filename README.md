# Mohammad Saad — Portfolio

A production-grade, fully custom single-page portfolio for **Mohammad Saad**, Senior Data
Engineer and AI Engineer based in Dubai, UAE. Built to communicate technical credibility to
recruiters and hiring managers within the first few seconds — fast, responsive, and accessible
on every device.

## Overview

- Single-page React application with ten sections: Hero, About, Experience, Skills, Metrics,
  Certifications, Education, Contact, and Footer, plus a fixed navigation bar.
- Mobile-first, fully responsive, dark "data infrastructure" aesthetic.
- Scroll-triggered animations, animated counters, a desktop particle-network background
  (disabled on mobile for performance), and an active-section-aware navbar.
- No images — every visual is CSS, SVG, or icon based.
- Semantic HTML, JSON-LD Person schema, full Open Graph / Twitter metadata, skip-to-content
  link, keyboard focus states, and reduced-motion support.

## Tech stack

| Concern        | Choice                              |
| -------------- | ----------------------------------- |
| Framework      | React 18                            |
| Build tool     | Vite 5                              |
| Styling        | Tailwind CSS 3 + CSS custom properties |
| Animation      | Framer Motion                       |
| Icons          | lucide-react                        |
| Fonts          | Inter + Space Grotesk (Google Fonts) |
| Prop types     | prop-types                          |

## Running locally

Requires Node.js 18+.

```bash
npm install      # install dependencies
npm run dev      # start the Vite dev server (http://localhost:5173)
npm run build    # produce the production build in dist/
npm run preview  # serve the production build locally to verify it
```

## Project structure

```
src/
  components/    # one component per file (sections + shared UI)
  data/          # all editable content (experience, skills, certifications, metrics)
  animations/    # reusable Framer Motion variant objects
  hooks/         # useCounter, useActiveSection
  App.jsx        # composes the page, code-splits below-the-fold sections
  main.jsx       # React entry point
  index.css      # design-system CSS variables + global styles
public/
  Mohammad-Saad-CV.pdf   # placeholder — replace with the real CV
index.html       # metadata, fonts, favicon, JSON-LD
```

## Updating content

All content lives in `src/data/` — you do not need to touch component code to update it:

- **Experience** — edit `src/data/experience.js` (companies, roles, bullets, tech stacks, status).
- **Skills** — edit `src/data/skills.js` (tab labels and skill keywords).
- **Certifications** — edit `src/data/certifications.js` (name, issuer, status).
- **Metrics** — edit `src/data/metrics.js` (impact numbers, the hero summary cards).

Design tokens (colours, shadows, spacing) live as CSS custom properties at the top of
`src/index.css`. Change a value there and it propagates everywhere.

**Replace the CV:** drop the real file in at `public/Mohammad-Saad-CV.pdf` (keep the filename so
the Download CV button keeps working).

## Deploying

The production build outputs a static `dist/` folder that deploys anywhere with zero config.

### Vercel

1. Push the repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Vite. The included `vercel.json` sets the build command, output
   directory, and SPA rewrites. Deploy.

Or from the CLI:

```bash
npm i -g vercel
vercel
```

### Netlify

1. Push the repo to GitHub.
2. In Netlify, "Add new site" → import the repo.
3. Build command `npm run build`, publish directory `dist` (also set in `netlify.toml`, which
   includes the SPA redirect). Deploy.

Or drag-and-drop the `dist/` folder into the Netlify dashboard after running `npm run build`.

### GitHub Pages

```bash
npm run build
# deploy the contents of dist/ to your gh-pages branch (e.g. via the gh-pages package)
```

## Accessibility & performance notes

- One `<h1>` (the name in the hero); section titles are `<h2>`, card titles `<h3>`.
- Icon-only controls carry `aria-label`s; decorative icons are `aria-hidden`.
- The mobile menu button exposes `aria-expanded` / `aria-controls`.
- The particle canvas only mounts at ≥768px; mobile shows a lightweight static SVG.
- `console.*` and `debugger` are stripped from the production bundle (see `vite.config.js`).
