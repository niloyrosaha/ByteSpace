// Course explorer section content — from the design-to-code output (Frame3/Frame8/Frame9)
// and the CSS guide. Stats pills are from the guide: "17 Lessons / 2 hours 16 mins /
// 59 Comments" on every card.

export const coursesIntro = {
  heading: "Discover Your Passion, Build Your Skills",
  description:
    "At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.",
} as const;

export const pathsIntro = {
  heading: "Explore Diverse Learning Paths at Bytespace",
  description:
    "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.",
} as const;

export type CourseCardData = {
  id: string;
  title: string;
  creator: string;
  image: string;
  avatars: string[];
  /** Stat pills overlaid on the cover image (guide: same on all cards). */
  stats: [string, string, string];
  extraLabel: string;
  price: string;
  per: string;
  rating: string;
  /** Truncation width from the plugin output; omit for single-line titles. */
  titleWidth?: 275 | 280;
};

export const courses: CourseCardData[] = [
  {
    id: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    creator: "by purepearl studio",
    image: "/images/categories/Frame.png",
    avatars: [
      "/images/categories/Ellipse.png",
      "/images/categories/Ellipse(1).png",
      "/images/categories/Ellipse(2).png",
      "/images/categories/Ellipse(3).png",
    ],
    stats: ["17 Lessons", "2 hours 16 mins", "59 Comments"],
    extraLabel: "26+",
    price: "$25",
    per: "/lifetime",
    rating: "4.5",
  },
  {
    id: "build-digital-asset",
    title: "Build Digital Asset",
    creator: "by purepearl studio",
    image: "/images/categories/Frame(1).png",
    avatars: [
      "/images/categories/Ellipse(4).png",
      "/images/categories/Ellipse(5).png",
      "/images/categories/Ellipse(6).png",
      "/images/categories/Ellipse(7).png",
    ],
    stats: ["17 Lessons", "2 hours 16 mins", "59 Comments"],
    extraLabel: "26+",
    price: "$25",
    per: "/lifetime",
    rating: "4.5",
  },
  {
    id: "the-power-of-big-data",
    title: "the Power of Big Data",
    creator: "by purepearl studio",
    image: "/images/categories/Frame(2).png",
    avatars: [
      "/images/categories/Ellipse(8).png",
      "/images/categories/Ellipse(9).png",
      "/images/categories/Ellipse(10).png",
      "/images/categories/Ellipse(11).png",
    ],
    stats: ["17 Lessons", "2 hours 16 mins", "59 Comments"],
    extraLabel: "26+",
    price: "$25",
    per: "/lifetime",
    rating: "4.5",
    titleWidth: 275,
  },
  {
    id: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self-Care",
    creator: "by purepearl studio",
    image: "/images/categories/Frame(3).png",
    avatars: [
      "/images/categories/Ellipse(12).png",
      "/images/categories/Ellipse(13).png",
      "/images/categories/Ellipse(14).png",
      "/images/categories/Ellipse(15).png",
    ],
    stats: ["17 Lessons", "2 hours 16 mins", "59 Comments"],
    extraLabel: "26+",
    price: "$25",
    per: "/lifetime",
    rating: "4.5",
    titleWidth: 280,
  },
  {
    id: "mastering-money-management",
    title: "Mastering Money Management",
    creator: "by purepearl studio",
    image: "/images/categories/Frame(4).png",
    avatars: [
      "/images/categories/Ellipse(16).png",
      "/images/categories/Ellipse(17).png",
      "/images/categories/Ellipse(18).png",
      "/images/categories/Ellipse(19).png",
    ],
    stats: ["17 Lessons", "2 hours 16 mins", "59 Comments"],
    extraLabel: "26+",
    price: "$25",
    per: "/lifetime",
    rating: "4.5",
    titleWidth: 280,
  },
  {
    id: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    creator: "by purepearl studio",
    image: "/images/categories/Frame(5).png",
    avatars: [
      "/images/categories/Ellipse(20).png",
      "/images/categories/Ellipse(21).png",
      "/images/categories/Ellipse(22).png",
      "/images/categories/Ellipse(23).png",
    ],
    stats: ["17 Lessons", "2 hours 16 mins", "59 Comments"],
    extraLabel: "26+",
    price: "$25",
    per: "/lifetime",
    rating: "4.5",
    titleWidth: 280,
  },
] as const;
