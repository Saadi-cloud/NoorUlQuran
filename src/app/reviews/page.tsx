import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ACADEMY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Parent Reviews",
  description:
    "Parent satisfaction information for Noor Ul Quran Online Academy. Genuine testimonials will be published once provided and approved.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        title="Trusted by Parents"
        description={`Academy-reported ${ACADEMY.satisfactionRate}% parent satisfaction rate. We only publish genuine, approved feedback.`}
      />
      <section className="py-16 md:py-24">
        <Container className="max-w-3xl text-center">
          <div className="rounded-2xl border border-dashed border-emerald/25 bg-white p-10 shadow-sm">
            <h2 className="font-display text-3xl text-navy">
              Verified Testimonials Coming Soon
            </h2>
            <p className="mt-4 text-navy-soft leading-relaxed">
              We do not invent testimonials, parent names, countries, or star
              ratings. When parents provide approved feedback, their reviews will
              appear on this page.
            </p>
            <p className="mt-4 text-sm text-navy-soft">
              The {ACADEMY.satisfactionRate}% satisfaction figure is
              academy-reported and not independently verified.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/contact" variant="primary">
                Share Parent Feedback
              </Button>
              <Button href="/book-free-trial" variant="gold">
                Book Free Trial
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
