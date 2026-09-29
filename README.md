# ByteSpace

A pixel-faithful implementation of the ByteSpace learning platform landing page, built from Figma to production.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Class helpers | `clsx` + `tailwind-merge` (`cn()`), `class-variance-authority` |
| Icons | `lucide-react` |
| Forms (bonus) | `react-hook-form` + `zod` + `@hookform/resolvers` |
| Hosting | Vercel |

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Type-check
npm run typecheck

# Lint
npm run lint

# Format
npm run format
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

```
src/
├── app/
│   ├── (marketing)/     # Home page (Navbar + Footer wrapper)
│   ├── (auth)/          # Login / Register (bonus)
│   ├── layout.tsx       # <html>, fonts, metadata
│   └── globals.css      # Tailwind import + all design tokens
├── assets/fonts/        # Satoshi-Regular.woff2, Satoshi-Medium.woff2
├── components/
│   ├── ui/              # Button, Chip, Badge, Input, Logo, ...
│   ├── layout/          # Container, Navbar, Footer
│   └── cards/           # FloatingCard, CourseCard, CategoryCard, TestimonialCard
├── sections/home/       # One folder per landing page section
├── data/                # Typed content arrays (never hard-coded in JSX)
├── lib/cn.ts            # clsx + tailwind-merge helper
└── types/               # Shared TypeScript interfaces
```

## Design System

Colors, typography, and spacing come from the Figma design file. All tokens are defined in `src/app/globals.css` using Tailwind v4's `@theme` directive. No raw hex values or arbitrary sizes are used in components.

- **Headings:** Poppins SemiBold (600) via `next/font/google`
- **Body / Labels:** Satoshi Regular (400) & Medium (500) via `next/font/local`

## Assumptions

- All assets (images, font files) are sourced from the provided Figma file and Fontshare.
- Satoshi font `.woff2` files must be placed in `src/assets/fonts/` before running the dev server.
- Out-of-scope routes (Search, Course Details, Creator Profile) are not implemented.

## What Was Skipped

- Search Page, Course Details, Course Lessons, Course Reviews, Creator Profile (explicitly out of scope).
- 404 page (optional; added only if time allows).

## Deployment

Deployed on Vercel. Every branch push generates a Preview URL. The `main` branch is the Production deployment.
