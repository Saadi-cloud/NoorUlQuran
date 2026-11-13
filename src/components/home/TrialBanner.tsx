import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function TrialBanner() {
  return (
    <section className="bg-emerald text-white">
      <Container className="flex flex-col items-start justify-between gap-5 py-6 md:flex-row md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Start Today
          </p>
          <h2 className="mt-1 font-display text-2xl md:text-3xl">
            Begin with 3 Days of Free Trial Classes
          </h2>
          <p className="mt-1 text-sm text-white/80 md:text-base">
            Explore teaching style, course fit, and class comfort before enrollment.
          </p>
        </div>
        <Button href="/book-free-trial" variant="gold" className="shrink-0">
          Request Free Trial
        </Button>
      </Container>
    </section>
  );
}
