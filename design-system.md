# ByteSpace New — Design System Spec

Source: Figma design file (ByteSpace New). Use these values **exactly**. Do not substitute colors, fonts, sizes, or line heights.

---

## 01 Colors

Each palette has 11 shades: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950.

### Neutral — "Black"

| Shade | Hex |
|-------|---------|
| 50 | `#f5f5f6` |
| 100 | `#e5e6e8` |
| 200 | `#ced0d3` |
| 300 | `#abaeb5` |
| 400 | `#82868e` |
| 500 | `#666973` |
| 600 | `#585a62` |
| 700 | `#4b4c53` |
| 800 | `#424348` |
| 900 | `#3a3b3f` |
| 950 | `#242528` |

### Primary — "Electric Violet" (blue hues)

| Shade | Hex |
|-------|---------|
| 50 | `#e7f6ff` |
| 100 | `#d3eeff` |
| 200 | `#b0ddff` |
| 300 | `#81c5ff` |
| 400 | `#4f9dff` |
| 500 | `#2872ff` |
| 600 | `#0445ff` |
| 700 | `#0043ff` |
| 800 | `#003be2` |
| 900 | `#0b36a4` |
| 950 | `#071e5f` |

### Secondary — "Crimson" (lime/yellow-green hues)

| Shade | Hex |
|-------|---------|
| 50 | `#fdffe4` |
| 100 | `#faffc5` |
| 200 | `#f2ff92` |
| 300 | `#e4ff54` |
| 400 | `#d4fb20` |
| 500 | `#cbfc01` |
| 600 | `#8cb400` |
| 700 | `#6a8902` |
| 800 | `#546b09` |
| 900 | `#465a0d` |
| 950 | `#243300` |

> Note: The palette names ("Electric Violet", "Crimson") come from the Figma file, but the actual colors are blue and lime. Always use the **hex values**, not the names.

---

## 02 Typography

### Fonts

| Font | Use | Source |
|------|-----|--------|
| **Poppins** | Headings | Google Fonts |
| **Satoshi** | Body and labels | https://www.fontshare.com/fonts/satoshi |

Make sure the right version of Satoshi is installed / loaded (Regular and Medium weights).

Sample text used in the design: "We ignite opportunity by setting the world in motion." / `0123456789`

### Headings — Poppins SemiBold (600), line height 120%

| Style | Size | Line height |
|-------|------|-------------|
| Heading L | 72px | 120% |
| Heading M | 44px | 120% |
| Heading S | 36px | 120% |
| Heading XS | 20px | 120% |

### Body — Satoshi Regular (400), line height 160%

| Style | Size | Line height |
|-------|------|-------------|
| Body L | 18px | 160% |
| Body M | 16px | 160% |
| Body S | 14px | 160% |
| Body XS | 12px | 160% |

> The Figma file spells this "Satoshi Reguler"; it means Satoshi Regular.

### Labels — Satoshi Medium (500), line height 120%

| Style | Size | Line height |
|-------|------|-------------|
| Label L | 18px | 120% |
| Label M | 16px | 120% |
| Label S | 14px | 120% |
| Label XS | 12px | 120% |

---

## 03 Layout Grid

| Property | Value |
|----------|-------|
| Columns | 12 |
| Margin | 120px |
| Gutter | 40px |

Derived values (assuming a 1440px desktop frame, inferred from the grid image, not stated in the Figma file):

- Content width: 1440 − (2 × 120) = **1200px**
- Column width: (1200 − 11 × 40) / 12 ≈ **63.33px**

---

## Implementation Guidance for the Agent

Suggested mapping (Next.js + Tailwind), not part of the Figma spec:

```ts
// tailwind.config.ts (theme.extend)
colors: {
  neutral: {
    50: '#f5f5f6', 100: '#e5e6e8', 200: '#ced0d3', 300: '#abaeb5',
    400: '#82868e', 500: '#666973', 600: '#585a62', 700: '#4b4c53',
    800: '#424348', 900: '#3a3b3f', 950: '#242528',
  },
  primary: {
    50: '#e7f6ff', 100: '#d3eeff', 200: '#b0ddff', 300: '#81c5ff',
    400: '#4f9dff', 500: '#2872ff', 600: '#0445ff', 700: '#0043ff',
    800: '#003be2', 900: '#0b36a4', 950: '#071e5f',
  },
  secondary: {
    50: '#fdffe4', 100: '#faffc5', 200: '#f2ff92', 300: '#e4ff54',
    400: '#d4fb20', 500: '#cbfc01', 600: '#8cb400', 700: '#6a8902',
    800: '#546b09', 900: '#465a0d', 950: '#243300',
  },
},
fontFamily: {
  heading: ['Poppins', 'sans-serif'],
  body: ['Satoshi', 'sans-serif'],
},
fontSize: {
  'heading-l':  ['72px', { lineHeight: '120%', fontWeight: '600' }],
  'heading-m':  ['44px', { lineHeight: '120%', fontWeight: '600' }],
  'heading-s':  ['36px', { lineHeight: '120%', fontWeight: '600' }],
  'heading-xs': ['20px', { lineHeight: '120%', fontWeight: '600' }],
  'body-l':  ['18px', { lineHeight: '160%', fontWeight: '400' }],
  'body-m':  ['16px', { lineHeight: '160%', fontWeight: '400' }],
  'body-s':  ['14px', { lineHeight: '160%', fontWeight: '400' }],
  'body-xs': ['12px', { lineHeight: '160%', fontWeight: '400' }],
  'label-l':  ['18px', { lineHeight: '120%', fontWeight: '500' }],
  'label-m':  ['16px', { lineHeight: '120%', fontWeight: '500' }],
  'label-s':  ['14px', { lineHeight: '120%', fontWeight: '500' }],
  'label-xs': ['12px', { lineHeight: '120%', fontWeight: '500' }],
},
```

Rules:

1. Headings use `font-heading` (Poppins SemiBold). Body text and labels use `font-body` (Satoshi).
2. Use only the type styles listed above. Do not invent new sizes.
3. Use only palette colors (Neutral, Primary, Secondary). Avoid arbitrary hex values.
4. Layout: 12-column grid, 40px gutters, 120px side margins on desktop (1200px content width). Scale margins down sensibly for tablet and mobile.
5. Load Satoshi via Fontshare (or self-host the font files in `/public/fonts` with `next/font/local`). Load Poppins via `next/font/google`.
