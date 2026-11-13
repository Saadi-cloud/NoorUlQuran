import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ACADEMY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Noor Ul Quran Online Academy — 10 years of online Quran teaching experience with male and female teachers for children in Europe and Gulf countries.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Welcome to Noor Ul Quran Online Academy"
        description="Dedicated to helping children develop Quran reading skills, Islamic knowledge, and a meaningful connection with the Holy Quran."
        image="/images/about.jpg"
      />
      <section className="py-16 md:py-24">
        <Container className="grid items-start gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-navy-soft leading-relaxed">
            <p>
              Noor Ul Quran Online Academy is dedicated to helping children develop
              Quran reading skills, Islamic knowledge, and a meaningful connection
              with the Holy Quran.
            </p>
            <p>
              With {ACADEMY.experienceYears} years of online Quran teaching
              experience, our academy provides Quran education through experienced
              male and female teachers.
            </p>
            <p>
              Our teaching team has individual experience ranging from{" "}
              {ACADEMY.teacherExperienceRange} years.
            </p>
            <p>
              Over the past five years, we have taught more than{" "}
              {ACADEMY.studentsTaught} students and report a{" "}
              {ACADEMY.satisfactionRate}% parent satisfaction rate. These are
              academy-provided figures and are not independently verified.
            </p>
            <p>
              We offer Quran Nazra, Noorani Qaida, Tajweed, Hifz, Daily Duas, Salah,
              Six Kalmas, and Basic Islamic Studies.
            </p>
            <p>
              Our online classes are conducted through platforms such as Zoom,
              Google Meet, and Microsoft Teams.
            </p>
            <p>
              We welcome inquiries from Muslim families living in European and Gulf
              countries, including the United Kingdom, Germany, France, Italy,
              Spain, Saudi Arabia, the UAE, Qatar, Kuwait, Oman, and Bahrain.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <Button href="/book-free-trial" variant="gold">
                Book Free Trial
              </Button>
              <Button href="/courses" variant="outline">
                Explore Courses
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-emerald/10 shadow-lg">
            <Image
              src="/images/about.jpg"
              alt="Open Holy Quran representing Noor Ul Quran Online Academy"
              width={1000}
              height={750}
              className="h-full w-full object-cover"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
