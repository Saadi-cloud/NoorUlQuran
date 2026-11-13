import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { whatsappLinks } from "@/lib/whatsapp";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/cta-background.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-emerald/90 to-navy/90" />
      <Container className="relative py-20 text-center text-white md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          Final Enrollment Invitation
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl leading-tight md:text-5xl">
          Give Your Child the Gift of Quran Education
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-white/85 md:text-lg">
          Join Noor Ul Quran Online Academy and explore Quran learning with
          experienced male and female teachers. Start with our 3-day free trial.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/book-free-trial" variant="gold">
            Book Your Free Trial
          </Button>
          <Button
            href={whatsappLinks.male}
            variant="whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Male Teacher
          </Button>
          <Button
            href={whatsappLinks.female}
            variant="whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Female Teacher
          </Button>
        </div>
      </Container>
    </section>
  );
}
