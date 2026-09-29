# 01 — Project Setup, Git Workflow & Folder Structure

**Project:** ByteSpace New (Figma → Next.js)
**Read with:** `design-system.md` (tokens) and `landing-page-spec.md` (section content).
**Rule:** Follow this document strictly. If something here conflicts with a quick shortcut, follow this document.

---

## 1. Scope

| Figma frame | Route | Status |
|---|---|---|
| Home | `/` | **Required** (full landing page) |
| Login | `/login` | Bonus |
| Register | `/register` | Bonus |
| 404 Not Found | `not-found.tsx` | Optional, only if time remains |
| Search Page, Course Details, Course Lessons, Course Reviews, Creator Profile | — | **Out of scope.** Not requested. Do not build. |

Navbar/footer links that point to out-of-scope pages should use in-page anchors (`/#courses`, `/#creators`) or `#`. Never link to a route that does not exist.

Deadline: **October 1, 2026.** Aim to submit several hours early.

---

## 2. Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | **Next.js (App Router)** | File-based routing for `/`, `/login`, `/register`; native Vercel deploy; `next/image` and `next/font` |
| Language | **TypeScript** (strict) | Typed props, fewer bugs, expected in a professional codebase |
| Styling | **Tailwind CSS** | Design tokens map directly to utilities; fast, consistent |
| Class helpers | `clsx` + `tailwind-merge` (`cn()` helper), `class-variance-authority` | Clean variant handling for `Button`, `Chip`, `Badge` |
| Icons | `lucide-react` | Search, bag, star, check, etc. Use inline SVG for brand icons (e.g. Google) |
| Forms (bonus only) | `react-hook-form` + `zod` + `@hookform/resolvers` | Validation for Login/Register |
| Code quality | ESLint (from scaffold), Prettier + `prettier-plugin-tailwindcss`, `tsc --noEmit` | Consistent formatting and type safety |
| Package manager | **npm** | Zero extra setup |
| Hosting | **Vercel** | Required by the assessment |

**Not using (on purpose):** UI kits (shadcn, MUI, Chakra), state libraries, animation libraries, backends/CMS. The reviewer wants to see our own components, and the landing page has no data needs. Content lives in typed files under `src/data/`.

---

## 3. Prerequisites and Install

Requirements: Node.js **LTS (v20 or newer)**, npm, Git, a GitHub account.

```bash
node -v && npm -v && git --version
```

### 3.1 Scaffold

```bash
npx create-next-app@latest bytespace-new
```

Answers: **Yes** to TypeScript, ESLint, Tailwind CSS, `src/` directory, App Router, and the `@/*` import alias. Keep defaults for anything else.

```bash
cd bytespace-new

# runtime dependencies
npm install clsx tailwind-merge class-variance-authority lucide-react

# dev dependencies
npm install -D prettier prettier-plugin-tailwindcss
```

Bonus branch only (do not install earlier):

```bash
npm install react-hook-form zod @hookform/resolvers
```

### 3.2 Scripts (`package.json`)

Add next to the existing scripts:

```json
"typecheck": "tsc --noEmit",
"format": "prettier --write ."
```

### 3.3 Prettier (`.prettierrc`)

```json
{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "all",
  "printWidth": 100,
  "plugins": ["prettier-plugin-tailwindcss"],
  "tailwindStylesheet": "./src/app/globals.css"
}
```

### 3.4 Fonts

- **Poppins** (headings): load with `next/font/google`, weight 600.
- **Satoshi** (body/labels): download from https://www.fontshare.com/fonts/satoshi. Put the **Regular** and **Medium** `.woff2` files in `src/assets/fonts/` and load with `next/font/local`.

```tsx
// src/app/layout.tsx
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-poppins",
  display: "swap",
});

const satoshi = localFont({
  src: [
    { path: "../assets/fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

// <html lang="en" className={`${poppins.variable} ${satoshi.variable}`}>
// <body className="font-body text-body-m text-neutral-950 antialiased">
```

### 3.3 Design tokens in `src/app/globals.css`

Tailwind v4 is configured in CSS (there is no `tailwind.config.ts`). If the scaffold gave you Tailwind v3 instead, put the same values from `design-system.md` into `tailwind.config.ts`.

Copy **every value** from `design-system.md`. Pattern:

```css
@import "tailwindcss";

/* Fonts reference next/font CSS variables */
@theme inline {
  --font-heading: var(--font-poppins), ui-sans-serif, system-ui, sans-serif;
  --font-body: var(--font-satoshi), ui-sans-serif, system-ui, sans-serif;
}

@theme {
  /* Enforce the design system: remove Tailwind's default colors and text sizes */
  --color-*: initial;
  --text-*: initial;

  --color-white: #ffffff;
  --color-black: #000000;

  /* Neutral (all 11 shades from design-system.md) */
  --color-neutral-50: #f5f5f6;
  /* ... 100 to 900 ... */
  --color-neutral-950: #242528;

  /* Primary (all 11 shades) */
  --color-primary-50: #e7f6ff;
  /* ... */
  --color-primary-800: #003be2;
  --color-primary-950: #071e5f;

  /* Secondary (all 11 shades) */
  --color-secondary-50: #fdffe4;
  /* ... */
  --color-secondary-400: #d4fb20;
  --color-secondary-500: #cbfc01;
  --color-secondary-950: #243300;

  /* Type scale (size + line height) */
  --text-heading-l: 72px;   --text-heading-l--line-height: 1.2;
  --text-heading-m: 44px;   --text-heading-m--line-height: 1.2;
  --text-heading-s: 36px;   --text-heading-s--line-height: 1.2;
  --text-heading-xs: 20px;  --text-heading-xs--line-height: 1.2;
  --text-body-l: 18px;      --text-body-l--line-height: 1.6;
  --text-body-m: 16px;      --text-body-m--line-height: 1.6;
  --text-body-s: 14px;      --text-body-s--line-height: 1.6;
  --text-body-xs: 12px;     --text-body-xs--line-height: 1.6;
  --text-label-l: 18px;     --text-label-l--line-height: 1.2;
  --text-label-m: 16px;     --text-label-m--line-height: 1.2;
  --text-label-s: 14px;     --text-label-s--line-height: 1.2;
  --text-label-xs: 12px;    --text-label-xs--line-height: 1.2;
}
```

Font weight is applied with utilities: headings use `font-heading font-semibold`; body uses `font-body font-normal`; labels use `font-body font-medium`.

Usage examples: `text-heading-l font-heading font-semibold`, `text-body-m`, `text-label-s font-medium`, `bg-primary-800`, `text-neutral-950`.

---

## 4. Create the GitHub Repository

1. github.com → **New repository**.
2. Name: `bytespace-new`.
3. Visibility: **Public** (required by the assessment).
4. **Do not** add a README, `.gitignore` or license (the scaffold already has them).
5. Click **Create repository**, then run in your project folder:

```bash
git remote add origin https://github.com/<your-username>/bytespace-new.git
git branch -M main
git push -u origin main
```

`create-next-app` already ran `git init` and made the first commit. Confirm on GitHub that the files appear on `main`.

### Connect Vercel early

1. vercel.com → **Add New → Project** → import `bytespace-new` from GitHub.
2. Framework preset is detected automatically (Next.js). Click **Deploy**.
3. From now on, every branch and PR gets its own **Preview URL**. Paste it into each PR.
4. `main` is the **Production** deployment. This is the link you submit.

---

## 5. Branching and Pull Request Strategy

### 5.1 Principles

- `main` is always deployable. **Never commit directly to `main`.** All work goes through a branch and a Pull Request.
- **Vertical slices:** split the work by *section* (landing page) and by *page* (auth). Each PR must render something visible on its Vercel preview.
- Shared components are created in the first branch that needs them. Do **not** create a giant "all components" branch first.
- Keep each PR small (roughly under 400 changed lines, excluding assets).
- Branch names: `type/short-kebab-description`.
- Commits follow **Conventional Commits**: `feat:`, `fix:`, `chore:`, `style:`, `refactor:`, `docs:`. Commit often, one logical change per commit.
  Example: `feat(hero): add search form and floating stat cards`

### 5.2 Branch plan (in this order)

| # | Branch | Contents | PR title |
|---|---|---|---|
| 1 | `chore/project-setup` | Scaffold cleanup, dependencies, tokens, fonts, folder skeleton, `cn()` helper, Prettier, PR template, README skeleton | `chore: project setup, design tokens and folder structure` |
| 2 | `feat/navbar-hero` | `Container`, `Logo`, `Button`, `Navbar` (+ mobile menu), `Hero`, `FloatingCard`, `AvatarStack`, `ProgressBar`, `LogoStrip` | `feat: navbar, hero and logo strip` |
| 3 | `feat/course-explorer` | `Chip`, `Badge`, `RatingStar`, `CourseCard`, filter chips, course grid, `data/courses.ts` | `feat: course explorer section` |
| 4 | `feat/learning-and-growth-sections` | `CategoryCard`, `LearningPaths`, `GrowthPath`, `CreatorTools` | `feat: learning paths, growth and creator tools sections` |
| 5 | `feat/creator-cta-testimonials` | `CreatorCta`, `TestimonialCard`, `Testimonials` | `feat: creator CTA and testimonials` |
| 6 | `feat/footer` | `Footer` (newsletter form and link columns) | `feat: footer` |
| 7 | `style/responsive-polish` | Responsive QA at 1440 / 1024 / 768 / 390, spacing fixes, accessibility pass | `style: responsive and accessibility polish` |
| 8 | `docs/readme-and-metadata` | README, page title and meta description, favicon | `docs: readme and metadata` |
| Bonus | `feat/auth-pages` | `AuthShell`, Login, Register, validation | `feat: login and register pages` |

**Cut line:** If time is tight, finish branches 1–8 first. The bonus only counts if the landing page is polished and deployed.

**Fallback:** If you run out of time, collapse everything into a single branch `feat/landing-page` with one PR. That still satisfies the assessment.

### 5.3 Workflow for every branch

```bash
git switch main && git pull
git switch -c feat/navbar-hero
# ... build, commit often ...
npm run lint && npm run typecheck && npm run build
git push -u origin feat/navbar-hero
# open the Pull Request on GitHub (base: main)
# review your own diff, check the Vercel preview, then merge
git switch main && git pull
git branch -d feat/navbar-hero
```

**Merge method:** use **Create a merge commit** so the individual commits stay visible to reviewers.

### 5.4 PR template (`.github/pull_request_template.md`)

```md
## What
<!-- One or two sentences -->

## Figma reference
<!-- Frame / section name -->

## Screenshots
<!-- Desktop (1440) and mobile (390) -->

## Checklist
- [ ] Matches Figma at 1440px
- [ ] Responsive at 1024 / 768 / 390
- [ ] `npm run lint`, `npm run typecheck` and `npm run build` pass
- [ ] No console errors
- [ ] Vercel preview opens
```

---

## 6. Folder Structure

```
bytespace-new/
├── .github/
│   └── pull_request_template.md
├── public/
│   └── images/
│       ├── brand/           logo-white.svg, logo-dark.svg
│       ├── hero/            student.png, shape-*.png
│       ├── courses/         course-01.jpg ... course-06.jpg
│       ├── avatars/         avatar-01.jpg ...
│       ├── categories/      design.svg, development.svg ...
│       ├── growth/          section images
│       ├── creators/        section images
│       ├── testimonials/    sarah.jpg, james.jpg, alex.jpg
│       └── auth/            auth page images
├── src/
│   ├── app/
│   │   ├── (marketing)/
│   │   │   ├── layout.tsx        # Navbar + Footer wrapper
│   │   │   └── page.tsx          # Home: only composes sections
│   │   ├── (auth)/
│   │   │   ├── layout.tsx
│   │   │   ├── login/page.tsx
│   │   │   └── register/page.tsx
│   │   ├── layout.tsx            # <html>, fonts, metadata
│   │   ├── globals.css           # Tailwind import + design tokens
│   │   └── not-found.tsx         # optional
│   ├── assets/
│   │   └── fonts/                # Satoshi-Regular.woff2, Satoshi-Medium.woff2
│   ├── components/
│   │   ├── ui/                   # small reusable primitives
│   │   │   ├── Button.tsx  Chip.tsx  Badge.tsx  Input.tsx  Logo.tsx
│   │   │   ├── ProgressBar.tsx  AvatarStack.tsx  RatingStar.tsx  SectionHeading.tsx
│   │   ├── layout/
│   │   │   ├── Container.tsx  Navbar.tsx  NavbarMobileMenu.tsx  Footer.tsx
│   │   └── cards/
│   │       ├── FloatingCard.tsx  CourseCard.tsx  CategoryCard.tsx  TestimonialCard.tsx
│   ├── sections/
│   │   ├── home/
│   │   │   ├── hero/             Hero.tsx  HeroSearch.tsx  HeroVisual.tsx  HeroShapes.tsx  hero.config.ts
│   │   │   ├── logo-strip/       LogoStrip.tsx
│   │   │   ├── course-explorer/  CourseExplorer.tsx  CourseFilters.tsx  CourseGrid.tsx
│   │   │   ├── learning-paths/   LearningPaths.tsx
│   │   │   ├── growth-path/      GrowthPath.tsx
│   │   │   ├── creator-tools/    CreatorTools.tsx
│   │   │   ├── creator-cta/      CreatorCta.tsx
│   │   │   └── testimonials/     Testimonials.tsx
│   │   └── auth/                 AuthShell.tsx  LoginForm.tsx  RegisterForm.tsx
│   ├── data/                     # all copy and content, typed
│   │   ├── nav.ts  hero.ts  courses.ts  categories.ts  stats.ts
│   │   ├── testimonials.ts  footer.ts  logos.ts
│   ├── lib/
│   │   └── cn.ts                 # clsx + tailwind-merge
│   └── types/
│       └── course.ts  testimonial.ts ...
├── .prettierrc
├── README.md
└── package.json
```

Home page composition (only composition, no markup or copy):

```tsx
// src/app/(marketing)/page.tsx
export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <CourseExplorer />
      <LearningPaths />
      <GrowthPath />
      <CreatorTools />
      <CreatorCta />
      <Testimonials />
    </>
  );
}
```

### Mapping rules (Figma → code)

| Figma | Code location |
|---|---|
| A page frame (Home, Login, Register) | A route in `src/app/` |
| A big block of a page (Hero, Testimonials) | A folder in `src/sections/<page>/<section>/` |
| An element repeated in several places (button, chip, card) | `src/components/ui` or `src/components/cards` |
| Navbar / Footer (shared shell) | `src/components/layout`, rendered by the route-group `layout.tsx` |
| Text content, lists, prices, names | `src/data/*.ts` (typed arrays), never hard-coded in JSX |
| Colors, fonts, type scale | `globals.css` tokens only |
| Images and icons | `public/images/<area>/` |

### Naming

- Component files: `PascalCase.tsx`; one exported component per file, named export.
- Data, lib and config files: `camelCase.ts`.
- Folders: `kebab-case` inside `sections/`, lowercase elsewhere.
- Imports use the `@/` alias (`@/components/ui/Button`). No deep relative paths.

---

## 7. Coding Standards

1. Server Components by default. Add `"use client"` only where needed (mobile menu, search input, chip filtering, forms).
2. Every component has typed props (`interface XProps`). No `any`.
3. Use only design tokens (`bg-primary-800`, `text-body-m`). No raw hex values or ad-hoc font sizes. Arbitrary values (`w-[1146px]`) are allowed only for one-off geometry of decorative shapes and pixel-exact hero layout.
4. No inline `style` props, except computed geometry for decorative shapes if unavoidable.
5. Use `next/image` for all images with real `width` and `height`; use `priority` only on above-the-fold images that are always visible. Decorative images: `alt=""`.
6. Semantic HTML: one `<h1>` per page, `<section aria-labelledby>`, `<nav>`, `<footer>`, real `<button>` and `<a>`.
7. Write full class strings. Never build Tailwind classes by string concatenation (they will not be generated).
8. Build **mobile-first**: base styles for mobile, then `md:`, `lg:`, `xl:`.
9. Do not commit `node_modules`, `.next`, `.env*`, or unoptimized huge images. Keep each image reasonably small (prefer WebP/optimized PNG).
10. No dead code, no commented-out blocks, no `console.log`.

---

## 8. Definition of Done and Submission Checklist

**Per PR**
- Matches the Figma at 1440px (compare side by side or with an overlay).
- Looks right at 1024, 768 and 390.
- `npm run lint`, `npm run typecheck` and `npm run build` pass.
- Vercel preview opens; PR has screenshots.

**Before submitting**
- [ ] Repo is **public**, all PRs merged (or the final PR open with a description)
- [ ] No commits made directly to `main`
- [ ] Production URL opens in an **incognito window**
- [ ] Images load, no broken links or console errors
- [ ] README includes: overview, tech stack, setup/run steps, folder structure, assumptions (e.g. assets taken from the provided Figma), and what was skipped
- [ ] Submit on the portal: **Vercel URL** in *Submission Link*; **GitHub repo link** plus notes (PR links, bonus pages status) in *Submission Details*
