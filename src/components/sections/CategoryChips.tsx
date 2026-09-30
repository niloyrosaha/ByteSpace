import { cn } from "@/lib/cn";
import { activeChip, categoryChips } from "@/data/categories";

interface CategoryChipsProps {
  /** Currently active chip label. Static for now (design shows Featured). */
  active?: string;
  className?: string;
}

/**
 * Wrapping row of category filter pills (Frames 6 & 7 from the CSS guide),
 * ending with a "+ More" text link.
 */
export function CategoryChips({ active = activeChip, className }: CategoryChipsProps) {
  return (
    <nav aria-label="Course categories" className={cn("flex flex-wrap justify-center gap-4", className)}>
      {categoryChips.map((chip) => (
        <button
          key={chip}
          type="button"
          aria-pressed={chip === active}
          className={cn(
            "category-chip",
            "cursor-pointer",
            chip === active && "category-chip--active",
          )}
        >
          {chip}
        </button>
      ))}
      <button type="button" className="category-chip category-chip--more cursor-pointer">
        + More
      </button>
    </nav>
  );
}
