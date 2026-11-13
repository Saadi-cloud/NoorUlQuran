import { courses } from "@/lib/courses";
import { CourseCard } from "@/components/courses/CourseCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CoursesPreview() {
  return (
    <section className="bg-ivory-deep py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Quran Courses"
          title="Comprehensive Quran & Islamic Education"
          description="Explore foundational and advanced learning paths designed for children, with experienced male and female teachers."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/courses" variant="secondary">
            View All Courses
          </Button>
        </div>
      </Container>
    </section>
  );
}
