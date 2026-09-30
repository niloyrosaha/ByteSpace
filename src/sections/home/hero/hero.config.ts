// Decorative hero shapes — faithful to the FigRoot export.
//
// Every group is a composition of the supplied Figma assets:
//   · `image`  — the base artwork exported from the frame (grayscale silhouette).
//   · `mask`   — the silhouette layer, used as a CSS `mask-image` so the fill
//                colour shows only inside the shape.
//   · `color`  — the FigRoot fill (`#F5F5F6` neutral-50 / `#D4FB20` lime).
//
// Asset filenames are the exact FigRoot names and must not be renamed.
// Positions are stage coordinates inside the centered 1440px hero.
// Write complete Tailwind class strings — never concatenate class fragments.

export interface HeroShapeGroup {
  id: string;
  /** Base artwork — exact FigRoot asset filename */
  image: string;
  /** Silhouette used as the CSS mask — exact FigRoot asset filename */
  mask: string;
  /** Fill colour class for the masked overlay */
  color: string;
  /** Rendered size (all exported files are square and used at native size) */
  size: number;
  /** Absolute stage placement — full Tailwind class string */
  className: string;
}

export const heroShapes: HeroShapeGroup[] = [
  {
    id: "white-squiggle-sm",
    image: "/images/hero/Image(3).png",
    mask: "/images/hero/Mask(2).png",
    color: "bg-[#F5F5F6]",
    size: 176,
    className: "left-[184px] top-[478px] w-44 h-44",
  },
  {
    id: "white-ring",
    image: "/images/hero/Cone_012.png",
    mask: "/images/hero/Cone_011.png",
    color: "bg-[#F5F5F6]",
    size: 344,
    className: "left-[15px] top-[682px] w-[344px] h-[344px]",
  },
  {
    id: "white-cone",
    image: "/images/hero/Cone_012(2).png",
    mask: "/images/hero/Cone_011(2).png",
    color: "bg-[#F5F5F6]",
    size: 189,
    className: "left-[1105px] top-[464px] w-[189px] h-[189px]",
  },
  {
    id: "white-squiggle-lg",
    image: "/images/hero/Image(1).png",
    mask: "/images/hero/Mask.png",
    color: "bg-[#F5F5F6]",
    size: 332,
    className: "left-[1125px] top-[673px] w-[332px] h-[332px]",
  },
  {
    id: "lime-squiggle",
    image: "/images/hero/Image(2).png",
    mask: "/images/hero/Mask(1).png",
    color: "bg-[#D4FB20]",
    size: 387,
    className: "left-[-122px] top-[222px] w-[387px] h-[387px]",
  },
  {
    id: "lime-cylinder",
    image: "/images/hero/Cone_012(1).png",
    mask: "/images/hero/Cone_011(1).png",
    color: "bg-[#D4FB20]",
    size: 372,
    className: "left-[1228px] top-[221px] w-[372px] h-[372px]",
  },
];
