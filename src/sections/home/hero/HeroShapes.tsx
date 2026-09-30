import Image from "next/image";
import { heroShapes } from "./hero.config";

/**
 * Decorative shape layer for the hero.
 *
 * Each group renders the FigRoot base artwork and a masked fill overlay so the
 * shape takes the exact colour from the source design. The whole layer is
 * decorative: it ignores pointer events, is not selectable and is clipped by
 * the hero's `overflow-hidden`.
 */
export function HeroShapes() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 left-1/2 z-10 hidden w-[1440px] -translate-x-1/2 select-none lg:block"
    >
      {heroShapes.map((shape) => (
        <div key={shape.id} className={`absolute ${shape.className}`}>
          <Image
            src={shape.image}
            alt=""
            width={shape.size}
            height={shape.size}
            draggable={false}
            className="pointer-events-none absolute inset-0 size-full max-w-none select-none"
          />
          <div
            aria-hidden
            className={`pointer-events-none absolute inset-0 select-none ${shape.color}`}
            style={{
              maskImage: `url("${shape.mask}")`,
              WebkitMaskImage: `url("${shape.mask}")`,
              maskSize: "100% 100%",
              WebkitMaskSize: "100% 100%",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
            }}
          />
        </div>
      ))}
    </div>
  );
}
