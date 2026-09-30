// Category chips (Frames 6 & 7) and learning-path category cards (screenshot).
// Copy and order are verbatim from the design guide / reference image.

export const categoryChips = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
] as const;

export const activeChip = "Featured";

export type CategoryCardData = {
  id: string;
  label: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
};

// Glyph identification from pixel analysis of the supplied Vector PNGs:
// (2) crossed tools, (3) hourglass, (4) monitor, (5) table/grid,
// (6) megaphone, (7) camera.
export const categoryCards: CategoryCardData[] = [
  { id: "design", label: "Design", icon: "/images/categories/Vector (2).png", iconWidth: 27, iconHeight: 27 },
  { id: "development", label: "Development", icon: "/images/categories/Vector (3).png", iconWidth: 24, iconHeight: 33 },
  { id: "it-software", label: "IT & Software", icon: "/images/categories/Vector (4).png", iconWidth: 36, iconHeight: 24 },
  { id: "business", label: "Business", icon: "/images/categories/Vector (5).png", iconWidth: 30, iconHeight: 27 },
  { id: "marketing", label: "Marketing", icon: "/images/categories/Vector (6).png", iconWidth: 30, iconHeight: 30 },
  { id: "photography", label: "Photography", icon: "/images/categories/Vector (7).png", iconWidth: 30, iconHeight: 27 },
] as const;
