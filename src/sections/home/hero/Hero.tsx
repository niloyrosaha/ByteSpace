import { Container } from "@/components/layout/Container";
import { HeroSearch } from "./HeroSearch";
import { HeroShapes } from "./HeroShapes";
import { HeroVisual } from "./HeroVisual";
import { hero } from "@/data/hero";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-primary-800 bg-grid-hero lg:h-[1024px]"
    >
      {/* Text column */}
      <Container className="relative z-20 flex flex-col items-center pt-32 text-center lg:pt-[168px]">
        <h1
          id="hero-heading"
          className="w-[935px] max-w-full font-heading text-heading-s font-semibold tracking-[-0.01em] text-white md:text-heading-m lg:text-heading-l"
        >
          {hero.title}
        </h1>
        <p className="mt-8 max-w-[819px] px-6 text-body-m text-neutral-100 md:px-0 lg:text-body-l">
          {hero.subtitle}
        </p>
        <HeroSearch />
      </Container>

      {/* Visual block — semicircle + student + cards */}
      <HeroVisual />

      {/* Decorative shapes — sit above the disc, below the text */}
      <HeroShapes />
    </section>
  );
}
