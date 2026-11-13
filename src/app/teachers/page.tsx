import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ACADEMY } from "@/lib/constants";
import { whatsappLinks } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Our Teachers | Male & Female Quran Teachers Online",
  description:
    "Learn from experienced male and female Quran teachers with 3–25 years of individual teaching experience at Noor Ul Quran Online Academy.",
  alternates: { canonical: "/teachers" },
};

export default function TeachersPage() {
  return (
    <>
      <PageHero
        title="Learn from Experienced Male & Female Quran Teachers"
        description="Online Quran education with teacher gender options, broad course coverage, and individual teaching experience ranging from 3 to 25 years."
      />
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Male Quran Teachers",
              "Female Quran Teachers",
              `${ACADEMY.teacherExperienceRange} Years Individual Experience`,
              "Online Quran Education",
              "Multiple Quran & Islamic Studies Courses",
              "3-Day Free Trial Available",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-emerald/10 bg-white p-5 text-center font-semibold text-navy shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <article className="overflow-hidden rounded-2xl border border-emerald/10 bg-white shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/teachers-male.jpg"
                  alt="Professional educational illustration for male Quran teachers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-7">
                <h2 className="font-display text-3xl text-navy">Male Teachers</h2>
                <p className="mt-3 text-navy-soft">
                  Contact our male Quran teachers for course guidance, fee details,
                  and free trial arrangements. Real teacher profiles can be added
                  here once names, photos, and biographies are approved for
                  publication. We do not invent teacher identities.
                </p>
                <p className="mt-3 text-sm text-navy-soft">
                  WhatsApp: {ACADEMY.maleTeacher.phoneDisplay}
                </p>
                <Button
                  href={whatsappLinks.male}
                  variant="whatsapp"
                  className="mt-5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Male Quran Teacher
                </Button>
              </div>
            </article>

            <article className="overflow-hidden rounded-2xl border border-emerald/10 bg-white shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/teachers-female.jpg"
                  alt="Respectful professional illustration for female Quran teachers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-7">
                <h2 className="font-display text-3xl text-navy">Female Teachers</h2>
                <p className="mt-3 text-navy-soft">
                  Contact our female Quran teachers for course guidance, fee
                  details, and free trial arrangements. Approved teacher profiles
                  may be published later. Illustrations shown here are not
                  photographs of actual academy teachers.
                </p>
                <p className="mt-3 text-sm text-navy-soft">
                  WhatsApp: {ACADEMY.femaleTeacher.phoneDisplay}
                </p>
                <Button
                  href={whatsappLinks.female}
                  variant="whatsapp"
                  className="mt-5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Female Quran Teacher
                </Button>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
