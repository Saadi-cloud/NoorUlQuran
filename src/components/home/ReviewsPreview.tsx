import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ACADEMY } from "@/lib/constants";

export function ReviewsPreview() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Parent Satisfaction"
          title="Trusted by Parents"
          description={`We report a ${ACADEMY.satisfactionRate}% academy-reported parent satisfaction rate. Genuine parent testimonials will be published here once provided and approved.`}
        />
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-dashed border-emerald/25 bg-ivory-deep p-8 text-center">
          <p className="font-display text-2xl text-navy">
            Verified parent reviews coming soon
          </p>
          <p className="mt-3 text-sm leading-relaxed text-navy-soft">
            We do not invent testimonials, parent names, countries, or star ratings.
            If you are a parent who has studied with us and would like to share
            feedback for publication, please contact the academy.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/reviews" variant="outline">
              Parent Reviews Page
            </Button>
            <Button href="/contact" variant="primary">
              Share Feedback
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
