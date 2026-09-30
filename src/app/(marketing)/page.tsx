import { Hero } from "@/sections/home/hero/Hero";
import { LogoStrip } from "@/sections/home/logo-strip/LogoStrip";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <LogoStrip />
      {/* CourseExplorer, LearningPaths, GrowthPath, CreatorTools, CreatorCta, Testimonials — added in later branches */}
    </main>
  );
}
