import Image from "next/image";
import { cn } from "@/lib/cn";
import { categoryCards } from "@/data/categories";

interface LearningPathCategoriesProps {
  className?: string;
}

/**
 * Row of 6 learning-path category cards (guide: .featured-categories__grid /
 * .category-card) with lime icon tiles using the supplied Vector glyphs.
 */
export function LearningPathCategories({ className }: LearningPathCategoriesProps) {
  return (
    <div className={cn("flex justify-center", className)}>
      <div className="featured-categories__grid">
        {categoryCards.map((category) => (
          <a key={category.id} href="#" className="category-card">
            <div className="category-card__content">
              <span className="category-card__icon">
                <Image
                  src={category.icon}
                  alt=""
                  aria-hidden
                  width={category.iconWidth}
                  height={category.iconHeight}
                  className="category-card__icon-img"
                />
              </span>
              <span className="category-card__label">{category.label}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
