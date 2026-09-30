import { cn } from "@/lib/cn";

interface SectionIntroProps {
  heading: string;
  description: string;
  /** Guide variant: 44px title (.home-intro) or 36px title (.learning-paths). */
  variant?: "home-intro" | "learning-paths";
  className?: string;
}

/**
 * Centered heading + description used to introduce landing-page sections.
 * Styling comes from the CSS guide (.home-intro / .learning-paths blocks).
 */
export function SectionIntro({
  heading,
  description,
  variant = "home-intro",
  className,
}: SectionIntroProps) {
  const block = variant === "home-intro" ? "home-intro" : "learning-paths";

  return (
    <div className={cn(block, "mx-auto", className)}>
      <h2 className={`${block}__title`}>{heading}</h2>
      <p className={`${block}__description`}>{description}</p>
    </div>
  );
}
