import Image from "next/image";
import { cn } from "@/lib/cn";

interface MaskedArtworkProps {
  /** Base artwork PNG (line art with transparency). */
  base: string;
  /** Mask PNG whose alpha defines the fill shape. */
  mask: string;
  /** Fill color class (e.g. bg-secondary-400). */
  fillClassName: string;
  width: number;
  height: number;
  className?: string;
}

/**
 * Renders the FigRoot base artwork plus a color overlay shaped by the supplied
 * mask PNG (same technique as HeroShapes), so the artwork takes the exact
 * design color. Decorative: ignores pointer events and selection.
 */
export function MaskedArtwork({
  base,
  mask,
  fillClassName,
  width,
  height,
  className,
}: MaskedArtworkProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none select-none", className)}
      style={{ width, height }}
    >
      <Image
        src={base}
        alt=""
        width={width}
        height={height}
        draggable={false}
        className="pointer-events-none absolute inset-0 size-full max-w-none select-none"
      />
      <div
        className={cn("pointer-events-none absolute inset-0 select-none", fillClassName)}
        style={{
          maskImage: `url("${mask}")`,
          WebkitMaskImage: `url("${mask}")`,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      />
    </div>
  );
}
