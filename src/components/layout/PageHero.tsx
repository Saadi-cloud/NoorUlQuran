import Image from "next/image";
import { Container } from "@/components/ui/Container";

type Props = {
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
};

export function PageHero({
  title,
  description,
  image = "/images/cta-background.jpg",
  imageAlt = "Islamic geometric pattern background",
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover opacity-35"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-emerald/70" />
      <Container className="relative py-16 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          Noor Ul Quran Online Academy
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
