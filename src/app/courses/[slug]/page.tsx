import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { courses, getCourse } from "@/lib/courses";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return {
    title: course.seoTitle,
    description: course.seoDescription,
    alternates: { canonical: `/courses/${course.slug}` },
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <>
      <PageHero title={course.name} description={course.shortDescription} image={course.image} />
      <section className="py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[1.75rem] border border-emerald/10 shadow-lg">
            <Image
              src={course.image}
              alt={`${course.name} course visual`}
              width={1000}
              height={750}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-navy-soft leading-relaxed">{course.description}</p>
            <h2 className="mt-8 font-display text-2xl text-navy">Learning Objectives</h2>
            <ul className="mt-4 space-y-2 text-navy-soft">
              {course.objectives.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/book-free-trial" variant="gold">
                Book Free Trial
              </Button>
              <Button href="/contact" variant="outline">
                Ask a Question
              </Button>
            </div>
            <p className="mt-4 text-sm text-navy-soft">
              Monthly fees are shared privately on WhatsApp and are not listed on
              this website.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
