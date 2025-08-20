<div align="center">
  <img src="public/images/logo.png" alt="Logo" width="96" height="96" />
  <h1>Monitoring Employee Dashboard</h1>
  <p>Minimal, fast, and responsive dashboard built with Next.js, TypeScript, and Tailwind CSS.</p>
  <p>
    <a href="https://nextjs.org/" target="_blank">Next.js</a> ·
    <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> ·
    <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>
  </p>
  <p>
    <img alt="Next.js" src="https://img.shields.io/badge/Framework-Next.js-000?logo=nextdotjs" />
    <img alt="TypeScript" src="https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript&logoColor=white" />
    <img alt="Tailwind CSS" src="https://img.shields.io/badge/CSS-Tailwind-38B2AC?logo=tailwindcss&logoColor=white" />
  </p>
</div>

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Overview
A single-page monitoring dashboard that presents a primary "Total Inside" card on top and four aligned stat cards below. The UI emphasizes clarity: bold labels, large numbers, and a clean header with company information and a live clock.

## Features
- Clean header with company info, date, and live clock
- Prominent "Total Inside" card + four secondary stat cards in a responsive grid
- Bold, legible labels without altering number font sizes
- Transparent-logo support with subtle blending and shadow
- App Router structure (Next.js `app/` directory)
- Tailwind-first styling with utility classes and a few custom styles

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Project Structure
```
app/
  components/
    Header.tsx
    StatCard.tsx
  globals.css
  layout.tsx
  page.tsx
public/
  images/
    logo.png
next.config.js
postcss.config.js
package.json
pnpm-lock.yaml
tailwind.config.ts
tsconfig.json
```

## Getting Started
### Prerequisites
- Node.js 18+ recommended
- npm or pnpm installed

### Installation
```bash
# install dependencies
npm install
# or
pnpm install
```

### Development
```bash
npm run dev
```
Then open http://localhost:3000 (or the next available port if 3000 is taken).

### Production
```bash
npm run build
npm start
```

## Available Scripts
- `dev` – Start the development server
- `build` – Build the application for production
- `start` – Start the production server

## Customization
- Logo: replace `public/images/logo.png`. Prefer SVG for best quality. You can also adjust the container in `app/components/Header.tsx`.
- Typography: large number size and label weights are defined in `app/components/StatCard.tsx` and complementary styles in `app/globals.css`.
- Layout: the main layout and grid live in `app/page.tsx`. Adjust gaps, padding, and responsive breakpoints as needed.

## Contributing
1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feat/your-feature`
5. Open a Pull Request

## License
This project is licensed under the MIT License.