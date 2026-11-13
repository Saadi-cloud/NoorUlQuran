import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { ACADEMY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions draft for Noor Ul Quran Online Academy website use, inquiries, free trials, and class arrangements.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms and Conditions"
        description="Editable draft for academy review. This page does not claim verified legal compliance."
      />
      <section className="py-16 md:py-24">
        <Container className="max-w-3xl space-y-6 text-navy-soft leading-relaxed">
          <p>
            By using the {ACADEMY.name} website, you agree to these terms as a
            general guide for website use and inquiry handling.
          </p>
          <h2 className="font-display text-2xl text-navy">Website Purpose</h2>
          <p>
            This website provides information about online Quran courses, teachers,
            free trial inquiries, and contact options. Content is educational and
            informational.
          </p>
          <h2 className="font-display text-2xl text-navy">Inquiries and Free Trials</h2>
          <p>
            Submitting a form expresses interest only. It does not guarantee class
            placement, teacher assignment, or a specific schedule until confirmed
            by the academy.
          </p>
          <h2 className="font-display text-2xl text-navy">Fees</h2>
          <p>
            Monthly fees are not displayed on the website. Fee details are shared
            privately through WhatsApp or other approved communication after
            inquiry.
          </p>
          <h2 className="font-display text-2xl text-navy">No Guaranteed Outcomes</h2>
          <p>
            Progress in Quran learning varies by student age, consistency, practice,
            and other factors. The academy does not guarantee specific learning
            results.
          </p>
          <h2 className="font-display text-2xl text-navy">Academy Statistics</h2>
          <p>
            Experience figures, student counts, and satisfaction rates shown on the
            website are academy-provided and should not be treated as independently
            audited claims unless separately verified.
          </p>
          <h2 className="font-display text-2xl text-navy">Acceptable Use</h2>
          <p>
            Do not misuse forms, attempt unauthorized access, or submit false or
            harmful information. We may ignore or remove spam and abusive
            submissions.
          </p>
          <h2 className="font-display text-2xl text-navy">Contact</h2>
          <p>
            Questions about these terms may be sent to {ACADEMY.email} or the
            academy WhatsApp numbers listed on the Contact page.
          </p>
          <p className="text-sm">Last updated: review draft for publication.</p>
        </Container>
      </section>
    </>
  );
}
