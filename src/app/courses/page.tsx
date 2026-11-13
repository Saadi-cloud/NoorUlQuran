import type { Metadata } from "next";
import { CourseCard } from "@/components/courses/CourseCard";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Our Courses | Online Quran Classes for Kids",
  description:
    "Explore Noorani Qaida, Quran Nazra, Tajweed, Hifz, Daily Duas, Salah, Six Kalmas, and Basic Islamic Studies online for children.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        title="Our Quran Courses"
        description="Structured online Quran and Islamic education for children, taught by experienced male and female teachers."
      />
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {courses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
