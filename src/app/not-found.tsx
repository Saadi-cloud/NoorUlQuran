import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald">
          404
        </p>
        <h1 className="mt-3 font-display text-4xl text-navy">Page not found</h1>
        <p className="mt-4 text-navy-soft">
          The page you are looking for is unavailable. Return home or book a free
          trial to get started.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" variant="primary">
            Go Home
          </Button>
          <Button href="/book-free-trial" variant="gold">
            Book Free Trial
          </Button>
        </div>
      </Container>
    </section>
  );
}
