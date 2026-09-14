# Vishal Durga — React portfolio

## Run locally

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

Open the local URL printed by Vite. Deploy the generated `dist` folder to any static host.

## Customize

- `src/Portfolio.jsx`: complete component, animation variants, and the `portfolioData` object at the top. Edit contact information, experience, projects, skills, social URLs, and asset paths here.
- `src/index.css`: Tailwind v4 import and the editorial design, responsive layouts, and custom effects.
- `public/vishal-durga.png`: original supplied portrait, styled in grayscale with CSS.
- `public/vishal-durga-resume.pdf`: original supplied PDF, served as a downloadable file.

React, Tailwind CSS, Framer Motion, and Lucide are included. The component needs the accompanying stylesheet and public assets. External social links open in a new tab; email and phone use native mailto/tel handlers.

Professional project descriptions are based on the resume and describe contributions rather than ownership. Project artwork is illustrative. Set each project's `url` to a verified public demo to enable its live-project link; otherwise it offers an email discussion. GlobalLogic is dated June 2026 exactly as supplied, without assuming current employment. Education is summarized as an engineering degree because the resume lists BE/B.Tech/BS without specifying one.

Accessibility includes keyboard focus indicators, native buttons for the expandable timeline, labeled mobile navigation, a skip link, responsive layouts, and reduced-motion preferences.

## Themes and personal projects

The header theme selector offers System, Light, and Dark. System is the default and follows live operating-system appearance changes; explicit overrides are saved. The legacy theme setting is ignored so existing visitors also start in System mode. `portfolioData.technologies` controls the full hero technology list, including DSA. The original portrait is rendered with an SVG silhouette clip and a CSS bottom fade; the source image remains unchanged. Onion.ai is included as a personal project based on its local README; add a public URL to its project entry when deployed. Its portfolio visual is a conceptual illustration, not an application screenshot.
