import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { ACADEMY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Noor Ul Quran Online Academy website inquiries, contact forms, and communication practices. Editable draft for review.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="This page is an editable draft for academy review and does not claim verified legal compliance."
      />
      <section className="py-16 md:py-24">
        <Container className="prose-academy max-w-3xl space-y-6 text-navy-soft leading-relaxed">
          <p>
            {ACADEMY.name} (“we”, “our”, or “the academy”) respects the privacy of
            parents and families who contact us through this website.
          </p>
          <h2 className="font-display text-2xl text-navy">Information We Collect</h2>
          <p>
            When you submit a free trial, contact, or registration form, we may
            collect parent name, email address, WhatsApp number, country, student
            age or name, course preference, teacher preference, preferred class
            time, and additional notes you choose to share.
          </p>
          <h2 className="font-display text-2xl text-navy">How We Use Information</h2>
          <p>
            We use inquiry information to respond to your request, discuss class
            arrangements, share fee details privately, and follow up about the
            services you asked about. We do not sell personal information.
          </p>
          <h2 className="font-display text-2xl text-navy">Children’s Information</h2>
          <p>
            Please share only the student details needed to arrange classes.
            Parents or guardians should submit inquiries on behalf of children.
            Avoid sending unnecessary sensitive information through website forms.
          </p>
          <h2 className="font-display text-2xl text-navy">Communication Channels</h2>
          <p>
            We may contact you by email or WhatsApp using the details you provide.
            WhatsApp communications are also subject to WhatsApp’s own policies.
          </p>
          <h2 className="font-display text-2xl text-navy">Storage and Security</h2>
          <p>
            Form submissions are processed on our server and may be stored for
            follow-up. If email delivery is configured, inquiries may also be sent
            to {ACADEMY.email}. No website can guarantee absolute security; we take
            reasonable steps to protect information in transit and at rest.
          </p>
          <h2 className="font-display text-2xl text-navy">Your Choices</h2>
          <p>
            You may request updates or ask us to stop follow-up communication by
            contacting {ACADEMY.email} or messaging either academy WhatsApp number.
          </p>
          <h2 className="font-display text-2xl text-navy">Policy Updates</h2>
          <p>
            This draft may be updated as the academy’s processes evolve. Please
            review it periodically. For legal compliance advice, consult a
            qualified professional in your jurisdiction.
          </p>
          <p className="text-sm">Last updated: review draft for publication.</p>
        </Container>
      </section>
    </>
  );
}
