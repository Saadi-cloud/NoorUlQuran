import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { faqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "FAQs | Online Quran Classes Questions",
  description:
    "Frequently asked questions about courses, male and female teachers, free trials, platforms, fees, and countries served.",
  alternates: { canonical: "/faqs" },
};

export default function FaqsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        title="Frequently Asked Questions"
        description="Helpful answers for parents considering online Quran classes for their children."
      />
      <section className="py-16 md:py-24">
        <Container className="max-w-3xl space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-emerald/10 bg-white p-5 shadow-sm open:shadow-md"
            >
              <summary className="cursor-pointer list-none font-semibold text-navy">
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
          <div className="pt-8 text-center">
            <Button href="/contact" variant="primary">
              Still Have Questions? Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
