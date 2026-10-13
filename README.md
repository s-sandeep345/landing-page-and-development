# Launchly — Responsive Landing Page

A polished landing page built with React, TypeScript, Vite, and Tailwind CSS. The design uses a warm off-white canvas, deep evergreen text, and lime accents, with custom CSS for a more art-directed responsive layout.

## Sections
1. Responsive navbar with mobile menu
2. Hero section with product dashboard illustration and CTAs
3. About / introduction and product metrics
4. Feature card grid
5. Three-step “How it works” section
6. Customer testimonials
7. Pricing with monthly/yearly billing toggle
8. FAQ accordion, final CTA, newsletter form, and footer

## Run locally

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Notes
- The project uses reusable `Navbar` and `SectionHeading` components; feature, step, testimonial, and pricing cards are data-driven.
- Newsletter signup is a front-end demo interaction; connect it to a mailing service/API before production.
- Pricing CTA buttons open an email draft. Replace the sample `hello@launchly.example` address with your real contact address.
- Tailwind is configured and available for additional utility-based styling; custom component styling lives in `src/styles.css`.
