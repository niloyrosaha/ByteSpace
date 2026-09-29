# ByteSpace New — Landing Page Spec

Companion to `design-system.md` (colors, typography, grid). Use the tokens from that file. Do not invent new colors or type sizes.

Content below is transcribed from Figma screenshots. Items marked **(assumed)** were not clearly visible and should be checked against the design.

---

## Global

- Desktop frame: **1440px** wide. Hero frame is 1440 × 1024.
- Grid: 12 columns, 120px margin, 40px gutter (1200px content width). Make it responsive for tablet and mobile.
- Hero and creator-CTA backgrounds: Primary 800 `#003BE2`, with a faint light grid-line overlay.
- Accent / CTA buttons: Secondary lime (`#cbfc01` / Secondary 500 family), dark text.
- Light sections: near-white background with soft blurred lime and blue gradient blobs.
- Cards: white, large rounded corners (about 16px), thin light border or soft shadow.
- Chips / pills: fully rounded, light gray fill (Neutral 100 range). Active chip is lime.

### Section order (top to bottom)
1. Navbar + Hero
2. Logo strip
3. Course explorer
4. Learning paths (categories)
5. "Your Path to Professional Growth"
6. "Create & Manage Courses Easily"
7. Creator CTA banner (blue) **(order relative to 6 assumed)**
8. Testimonials
9. Footer

---

## 1. Navbar + Hero

**Navbar**
- Left: ByteSpace logo (lime "b" icon + "ByteSpace" wordmark, white).
- Center: `Home` (active), `Courses`, `Creators`.
- Right: `Sign In`, `Join Us`, shopping-bag icon.

**Hero** (blue `#003BE2`)
- Headline (Heading L, white, centered): **Get Access to Hundreds of Courses Available**
- Subtext (Body, white/light, centered): "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses."
- Search bar: white pill input with search icon, placeholder `Course, topic, creator`, plus lime pill button `Search`.
- Below the search: a large lime semicircle with a cut-out photo of a smiling student with headphones holding a laptop.
- Floating white cards around the photo:
  - **UI/UX Design** — "200 Courses • 1000+ Students"
  - **Learning Progress** — big "55%" with a lime progress bar
  - **Happy Students** — "4.5 (240) ★", avatar stack, lime "2K+" circle
- Decorative 3D assets: lime squiggle (top-left), white small squiggle, lime/white cylinder (top-right), white cone, white ring (bottom-left), white squiggle (bottom-right).

## 2. Logo strip

- Light gray band, 5 placeholder logos in a row, each "Logoipsum" with a different icon, gray tone.

## 3. Course explorer

- Heading (Heading M, centered): **Discover Your Passion, Build Your Skills**
- Description (Body, gray, centered): "At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
- Filter chips (wrapping, centered). `Featured` is active (lime):
  Featured, Music, Drawing & Painting, Marketing, Animation, Social Media, UI/UX Design, Creative Marketing, Digital Illustration, Film & Video, Crafts, Freelance & Entrepreneurship, Graphic Design, Photography, Productivity, Web Development, Data Science, Cooking, and a blue text link `+ More`.
- Course grid: **3 columns**, at least 2 rows (6 cards visible). Whether more rows or a "load more" exists is unknown.

**CourseCard** (reusable)
- Top image, rounded, with three translucent pills overlaid at the bottom: `17 Lessons`, `2 hours 16 mins`, `59 Comments`.
- Title (Heading XS, single line, truncated with ellipsis).
- Rating on the right: `4.5 ★`.
- "by purepearl studio" (small, blue).
- Level badge `Beginner` (with bar icon), avatar stack with lime `26+` circle.
- Price: `$25` (bold, blue) + `/lifetime` (small gray).

Course titles as shown in the design:

| # | Title shown | Image (from design) |
|---|-------------|---------------------|
| 1 | Learn Figma from Basic | UX sketches / sticky notes |
| 2 | Build Digital Asset | Icon pattern on gray |
| 3 | the Power of Big Data | Analytics dashboard |
| 4 | Balancing Productivity an… (truncated) | Desk with "DO MORE." monitor |
| 5 | Mastering Money Manage… (truncated) | Stock chart |
| 6 | From Idea to Startup Succ… (truncated) | Team at whiteboard |

Full titles for 4–6 are cut off in the design. Use CSS `truncate` and any sensible full text.

## 4. Learning paths

- Heading (Heading XS/S, centered): **Explore Diverse Learning Paths at Bytespace**
- Description (small, gray, centered): "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
- Row of 6 rounded `CategoryCard`s, each with a lime circular icon above a label:
  `Design`, `Development`, `IT & Software`, `Business`, `Marketing`, `Photography`

## 5. Your Path to Professional Growth

- Background: light with blurred lime and blue blobs.
- Left text:
  - Heading (Heading M): **Your Path to Professional Growth Starts Here!**
  - Body: "Explore our curated selection of courses tailored to enhance your professional skills and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need."
  - Stats row: **12K** Students · **70+** Courses · **16** Creators
- Right visual: student photo (same cut-out as hero) with a course card behind it (`Learn Figma from Basic`, `$25/lifetime`, Beginner badge), a `Learning Progress 55%` card, and a lime squiggle.

## 6. Create & Manage Courses Easily

- Left visual: woman with headphones holding a tablet, with:
  - Blue card **Total Revenue** — `$120.29` with a progress bar
  - Blue card **Year to Date** — `$1,200.38` with a small badge
  - White **Happy Students** card with avatars and `2K+`
  - Lime squiggle
- Right text:
  - Heading (Heading M): **Create & Manage Courses Easily.**
  - Body: "ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses."
  - Checklist (lime/blue check icons):
    - Share Your Expertise
    - Monetize Your Passion
    - Flexibility and Autonomy
    - Build a Community

## 7. Creator CTA banner

- Full-width blue (`#003BE2`) band with grid overlay.
- Heading (Heading M, white, centered): **Unlock Your Potential as a Creator with ByteSpace**
- Body (white, centered): "Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library."
- Button: lime pill `Join as Creator`.
- Decorative 3D assets: lime squiggle (top-left), white squiggle, lime cone (top-right), white cylinder (right), lime squiggle (bottom-right), white cone (left), lime ring (bottom-left).

## 8. Testimonials

- Background: light with lime and blue blurred blobs.
- Top row: heading on the left, paragraph on the right.
  - Heading (Heading M): **Discover What Our Community Is Saying**
  - Paragraph: "At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators."
- 3 white rounded `TestimonialCard`s, top-aligned, heights follow content. Each has a circular avatar, name (bold), role (blue), and quote.

| Name | Role | Quote |
|------|------|-------|
| Sarah M. | Enthusiastic Learner | "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning." |
| James L. | Lifelong Learner | "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development." |
| Alex B. | Inspired Creator | "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally." |

## 9. Footer

- White background.
- Left column:
  - ByteSpace logo (dark wordmark, lime icon)
  - "Stay Up to date with our latest features and releases by joining our newsletter."
  - Email input (rounded pill), placeholder `Enter your email`, lime pill button (labeled `Search` in the design)
  - Fine print: "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company."
- Right: 3 link columns
  - Col 1: Featured Courses, Featured Categories, Business, IT, Design
  - Col 2: Development, Marketing, Photography, Finance, Sport
  - Col 3: Become a Creator, Affiliate Program, Contact, Help, About
- Divider line.
- Bottom bar: "© 2023 ByteSpace. All rights reserved." on the left; `Privacy Policy`, `Terms of Service`, `Cookies Settings` on the right.

---

## Suggested components

```
components/
  layout/    Navbar, Footer, Container
  ui/        Button, Chip, Badge, RatingStar, AvatarStack, SectionHeading,
             StatItem, CheckListItem, SearchInput
  cards/     CourseCard, CategoryCard, FloatingStatCard, TestimonialCard
  sections/  Hero, LogoStrip, CourseExplorer, LearningPaths, GrowthPath,
             CreatorTools, CreatorCTA, Testimonials
data/        courses.ts, categories.ts, testimonials.ts, footerLinks.ts
```

Reuse notes:
- `FloatingStatCard` appears in the hero, growth section, and create-and-manage section.
- `CourseCard` renders from `data/courses.ts` (map over an array).
- The blue band styling is shared by the Hero and the Creator CTA.

## Assets to export from Figma

- Student photo (transparent cut-out), woman-with-tablet photo, 3 testimonial avatars, avatar images for stacks
- 3D shapes: lime and white squiggles, ring, cone, cylinder
- Logo (lime-on-dark and dark-on-light versions), category icons, 6 course images
- Icons: search, bag, star, check, lessons/comments/duration

If an asset isn't exportable, use a placeholder and note it in the PR/reviewer notes.

## Bonus (not yet provided)

Login and Signup screens: add a spec once screenshots are available.
