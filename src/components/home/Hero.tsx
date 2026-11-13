import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { whatsappLinks } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden islamic-pattern">
      <div className="absolute inset-0 bg-gradient-to-br from-ivory via-ivory to-emerald/10" />
      <Container className="relative grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-14 lg:py-20">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-gold" aria-hidden />
            3 Days Free Trial
          </div>

          <h1 className="mt-6 font-display text-4xl leading-[1.12] text-navy sm:text-5xl lg:text-[3.35rem]">
            Learn the Holy Quran Online with Experienced Male & Female Teachers
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-soft md:text-lg">
            Give your child the gift of Quran education with Noor Ul Quran Online
            Academy. Learn Quran reading, Tajweed, Hifz, Duas, Salah, and essential
            Islamic knowledge from experienced teachers through convenient online
            classes.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/book-free-trial" variant="gold">
              Book Your 3-Day Free Trial
            </Button>
            <Button href="/courses" variant="outline">
              Explore Our Courses
            </Button>
            <Button
              href={whatsappLinks.male}
              variant="whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us on WhatsApp
            </Button>
          </div>

          <p className="mt-6 text-sm text-navy-soft">
            Serving Muslim families in Europe and Gulf countries · Zoom, Google Meet
            & Microsoft Teams
          </p>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "120ms" }}>
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald/20 via-gold/10 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 shadow-[0_30px_80px_-30px_rgba(16,42,67,0.55)]">
            <Image
              src="/images/hero.jpg"
              alt="Muslim child learning the Quran online through a laptop at a peaceful study desk"
              width={1200}
              height={800}
              priority
              className="h-auto w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-5">
              <p className="font-display text-xl text-white">
                Online Quran learning for children
              </p>
              <p className="text-sm text-white/80">
                Experienced teachers · Flexible schedules · Free trial classes
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
