import { faqs } from "@/lib/faqs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FaqPreview() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="FAQs"
          title="Common Questions from Parents"
          description="Clear answers about courses, teachers, free trials, platforms, and fees."
        />
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.slice(0, 5).map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-emerald/10 bg-white p-5 shadow-sm open:shadow-md"
            >
              <summary className="cursor-pointer list-none font-semibold text-navy marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-gold transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-navy-soft">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/faqs" variant="outline">
            View All FAQs
          </Button>
        </div>
      </Container>
    </section>
  );
}
