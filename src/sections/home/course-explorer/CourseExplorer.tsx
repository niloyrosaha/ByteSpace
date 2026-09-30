import { Container } from "@/components/layout/Container";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { CategoryChips } from "@/components/sections/CategoryChips";
import { LearningPathCategories } from "@/components/sections/LearningPathCategories";
import { CourseCard } from "@/components/cards/CourseCard";
import { courses, coursesIntro, pathsIntro } from "@/data/courses";

export function CourseExplorer() {
  return (
    <section id="courses" aria-labelledby="courses-heading">
      {/* Intro — Frame 3 (.home-intro) */}
      <Container>
        <SectionIntro
          variant="home-intro"
          heading={coursesIntro.heading}
          description={coursesIntro.description}
          className="pt-[100px]"
        />
      </Container>

      {/* Category filter chips — Frames 6 & 7 */}
      <Container className="mt-10">
        <CategoryChips />
      </Container>

      {/* Course cards — Frame 8 (.course-grid, exact 3 × 373px / 40px geometry) */}
      <Container className="mt-[100px]">
        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Container>

      {/* Learning-paths intro — Frame 9 (.learning-paths) */}
      <Container>
        <SectionIntro
          variant="learning-paths"
          heading={pathsIntro.heading}
          description={pathsIntro.description}
          className="pt-[100px]"
        />
      </Container>

      {/* Learning-path category cards (6 icon tiles) */}
      <Container className="mt-10 pb-24">
        <LearningPathCategories />
      </Container>
    </section>
  );
}
