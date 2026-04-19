# JCC.lk — Jayathissa City Center

Premium multi-page business website for Jayathissa Lanka Enterprises (PVT) LTD.

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- Framer Motion
- Wouter (routing)
- Radix UI + shadcn-style components

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for Production

```bash
npm run build
npm run preview
```

The production build is output to `dist/`.

## Deploy

### Vercel
1. Import the repo in Vercel.
2. Framework preset: **Vite**.
3. Build command: `npm run build`
4. Output directory: `dist`

### Render / Netlify / Static Host
- Build command: `npm run build`
- Publish directory: `dist`
- For SPA routing, add a redirect rule sending all paths to `/index.html`.

## Project Structure

```
src/
  components/   UI + section components
  pages/        Route pages
  data/         Static content (divisions, etc.)
  hooks/        React hooks
  lib/          Utilities (whatsapp, cn, ...)
  App.tsx       App shell + routes
  main.tsx      Entry point
  index.css     Tailwind + design tokens
public/         Static assets (favicon, opengraph)
index.html      HTML entry
```
