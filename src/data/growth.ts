// Professional Growth / creator section content (Frame 15) — copy verbatim
// from the design-to-code output; assets live in /public/images/growth/.

export const growthIntro = {
  heading: "Your Path to Professional Growth Starts Here!",
  description:
    "Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.",
} as const;

export const growthStats = [
  { id: "students", value: "12K", label: "Students" },
  { id: "courses", value: "70+", label: "Courses" },
  { id: "creators", value: "16", label: "Creators" },
] as const;

export const creatorIntro = {
  heading: "Create & Manage Courses Easily.",
  lead: "ByteSpace",
  description:
    "ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.",
} as const;

export const creatorChecklist = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
] as const;

/* Revenue cards (blue) — exact copy from the plugin output. */
export const revenue = {
  total: { title: "Total Revenue", period: "July 1-28", value: "$120.29", delta: "+12$", barFill: 56 },
  year: { title: "Year to Date", period: "2023", value: "$1,200.38", delta: "+12$", barFill: 56 },
} as const;

/* Learning-progress card (white) — exact copy from the plugin output. */
export const learningProgress = {
  label: "Learning Progress",
  value: "55%",
  displayValue: 55,
  barFill: 56,
} as const;

export const happyStudents = {
  title: "Happy Students",
  rating: "4.5 (240)",
  extra: "2K+",
} as const;

/* Assets — filenames must not change. */
export const growthAssets = {
  miniCourseCover: "/images/growth/Frame.png",
  student: "/images/growth/Image.png",
  swirlMale: { base: "/images/growth/Image(1).png", mask: "/images/growth/Mask.png" },
  creator: "/images/growth/Image(2).png",
  swirlFemale: { base: "/images/growth/Image(3).png", mask: "/images/growth/Mask(1).png" },
  avatars: [
    "/images/growth/Ellipse(4).png",
    "/images/growth/Ellipse(5).png",
    "/images/growth/Ellipse(6).png",
    "/images/growth/Ellipse(7).png",
    "/images/growth/Ellipse(8).png",
    "/images/growth/Ellipse(9).png",
    "/images/growth/Ellipse(10).png",
  ],
} as const;
