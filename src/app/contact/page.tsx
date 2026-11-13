import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ACADEMY } from "@/lib/constants";
import { whatsappLinks } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Noor Ul Quran Online Academy by email or WhatsApp. Separate male and female teacher lines available for course and fee inquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Noor Ul Quran Online Academy"
        description="Reach us by email or WhatsApp. We welcome inquiries from Muslim families in Europe and Gulf countries."
        image="/images/contact.jpg"
      />
      <section className="py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="overflow-hidden rounded-[1.5rem] border border-emerald/10 shadow-md">
              <Image
                src="/images/contact.jpg"
                alt="Contact desk prepared for online Quran academy inquiries"
                width={1200}
                height={700}
                className="h-56 w-full object-cover"
              />
            </div>
            <div className="mt-8 space-y-4">
              <h2 className="font-display text-3xl text-navy">{ACADEMY.name}</h2>
              <a
                href={`mailto:${ACADEMY.email}`}
                className="flex items-center gap-3 rounded-xl border border-emerald/10 bg-white px-4 py-3 text-navy hover:border-emerald"
              >
                <Mail className="h-5 w-5 text-emerald" />
                {ACADEMY.email}
              </a>
              <a
                href={whatsappLinks.male}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-emerald/10 bg-white px-4 py-3 text-navy hover:border-[#25D366]"
              >
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
                Male WhatsApp: {ACADEMY.maleTeacher.phoneDisplay}
              </a>
              <a
                href={whatsappLinks.female}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-emerald/10 bg-white px-4 py-3 text-navy hover:border-[#25D366]"
              >
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
                Female WhatsApp: {ACADEMY.femaleTeacher.phoneDisplay}
              </a>
              <a
                href={ACADEMY.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-emerald/10 bg-white px-4 py-3 text-navy hover:border-emerald"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-[#1877F2] text-xs font-bold text-white" aria-hidden>
                  f
                </span>
                Facebook Page
              </a>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button href={`mailto:${ACADEMY.email}`} variant="outline">
                  Email Us
                </Button>
                <Button
                  href={whatsappLinks.male}
                  variant="whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Male Teacher WhatsApp
                </Button>
                <Button
                  href={whatsappLinks.female}
                  variant="whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Female Teacher WhatsApp
                </Button>
              </div>
              <p className="text-sm text-navy-soft">
                We do not publish a physical academy address on this website.
              </p>
            </div>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
