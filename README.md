# Thimos – React + Vite recreation

Single-page recreation of the Thimos Webflow template (hero, about, services, 3D project cube,
process, team, reviews, articles, CTA, footer) with scroll-driven and hover animations.
No animation libraries – only React, CSS and small scroll hooks (`src/hooks.js`).

## Run (IntelliJ / WebStorm)
1. Open the `thimos` folder as a project (File > Open).
2. Open the Terminal tab and run:
   ```
   npm install
   npm run dev
   ```
3. Vite opens http://localhost:5173 automatically.
   (Or create a run configuration: Run > Edit Configurations > + npm > script `dev`.)

Build for production: `npm run build` (output in `dist/`).

## Structure
- `src/components/` – one component per section (Hero, About, Services, Projects, Process, Team, Review, Articles, Cta, Footer)
- `src/components/shared.jsx` – ScrollTitle (blur-in lime→black), Btn, Marquee, TileBg (neon tile background)
- `src/hooks.js` – scroll-progress / pinned-progress / in-view hooks
- `src/styles.css` – all styling (sizes are in `vw`, so the layout scales with the window; mobile rules below 820px)
- `src/assets/` – images cropped from the reference recording
