import { MessageCircle } from "lucide-react";
import { ACADEMY } from "@/lib/constants";
import { whatsappLinks } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhatsAppContactCards() {
  return (
    <section className="bg-ivory-deep py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="WhatsApp Contact"
          title="Speak Directly with Male or Female Quran Teachers"
          description="Use the correct WhatsApp line for your preferred teacher gender. Ask about courses, class arrangements, monthly fees, and the free trial."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-emerald/10 bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/15 text-[#128C7E]">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-2xl text-navy">
              Contact Male Quran Teacher
            </h3>
            <p className="mt-2 text-navy-soft">
              WhatsApp: {ACADEMY.maleTeacher.phoneDisplay}
            </p>
            <Button
              href={whatsappLinks.male}
              variant="whatsapp"
              className="mt-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message Male Teacher
            </Button>
          </article>

          <article className="rounded-2xl border border-emerald/10 bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/15 text-[#128C7E]">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-2xl text-navy">
              Contact Female Quran Teacher
            </h3>
            <p className="mt-2 text-navy-soft">
              WhatsApp: {ACADEMY.femaleTeacher.phoneDisplay}
            </p>
            <Button
              href={whatsappLinks.female}
              variant="whatsapp"
              className="mt-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message Female Teacher
            </Button>
          </article>
        </div>

        <div className="mt-8 rounded-2xl border border-gold/30 bg-white p-7 text-center shadow-sm">
          <h3 className="font-display text-2xl text-navy">
            Affordable Quran Learning — Contact Us for Fee Details
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-navy-soft">
            Contact Noor Ul Quran Online Academy to discuss available Quran courses,
            class arrangements, and monthly fees. Fees are shared privately on
            WhatsApp and are not displayed on this website.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button
              href={whatsappLinks.maleFees}
              variant="whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ask Male Teacher About Fees
            </Button>
            <Button
              href={whatsappLinks.femaleFees}
              variant="whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ask Female Teacher About Fees
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
