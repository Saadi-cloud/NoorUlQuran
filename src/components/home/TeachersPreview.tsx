import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whatsappLinks } from "@/lib/whatsapp";

export function TeachersPreview() {
  return (
    <section className="bg-navy py-16 text-white md:py-24">
      <Container>
        <SectionHeading
          light
          eyebrow="Meet Our Teachers"
          title="Learn from Experienced Male & Female Quran Teachers"
          description="Professional online Quran education with teacher gender options for family comfort. Individual profiles can be added as they are approved."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/teachers-male.jpg"
                alt="Educational illustration representing male Quran teachers for online classes"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl text-gold">Male Quran Teachers</h3>
              <p className="mt-2 text-sm text-white/80">
                Experienced male teachers for Quran reading, Tajweed, Hifz support,
                and foundational Islamic studies.
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

          <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/teachers-female.jpg"
                alt="Educational illustration representing female Quran teachers for online classes"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl text-gold">
                Female Quran Teachers
              </h3>
              <p className="mt-2 text-sm text-white/80">
                Experienced female teachers for children and families who prefer
                female-led Quran and Islamic studies classes.
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
        <div className="mt-8 text-center">
          <Button href="/teachers" variant="gold">
            View Teachers Page
          </Button>
        </div>
      </Container>
    </section>
  );
}
