import { Hero } from "@/sections/home/hero/Hero";
import { LogoStrip } from "@/sections/home/logo-strip/LogoStrip";
import { CourseExplorer } from "@/sections/home/course-explorer/CourseExplorer";
import { GrowthSection } from "@/sections/home/growth/GrowthSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <LogoStrip />
      <CourseExplorer />
      <GrowthSection />
      {/* CreatorTools, CreatorCta, Testimonials — added in later branches */}
    </main>
  );
}
