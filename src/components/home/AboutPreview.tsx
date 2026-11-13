import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutPreview() {
  return (
    <section className="py-16 md:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-emerald/10 shadow-lg">
          <Image
            src="/images/about.jpg"
            alt="Open Holy Quran on a wooden stand with elegant Islamic ambiance"
            width={1000}
            height={750}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <SectionHeading
            align="left"
            eyebrow="About Our Academy"
            title="Welcome to Noor Ul Quran Online Academy"
            description="Noor Ul Quran Online Academy is dedicated to helping children develop Quran reading skills, Islamic knowledge, and a meaningful connection with the Holy Quran."
          />
          <div className="mt-6 space-y-4 text-navy-soft">
            <p>
              With 10 years of online Quran teaching experience, our academy provides
              Quran education through experienced male and female teachers. Our
              teaching team has individual experience ranging from 3 to 25 years.
            </p>
            <p>
              Over the past five years, we have taught more than 75 students and
              report a 98% parent satisfaction rate. These are academy-provided
              figures.
            </p>
            <p>
              We offer Quran Nazra, Noorani Qaida, Tajweed, Hifz, Daily Duas, Salah,
              Six Kalmas, and Basic Islamic Studies through Zoom, Google Meet, and
              Microsoft Teams.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/about" variant="primary">
              Learn More About Us
            </Button>
            <Button href="/book-free-trial" variant="outline">
              Book Free Trial
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
