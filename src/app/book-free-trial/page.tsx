import type { Metadata } from "next";
import Image from "next/image";
import { FreeTrialForm } from "@/components/forms/FreeTrialForm";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Book Your 3-Day Free Trial",
  description:
    "Start your Quran learning journey with 3 days of free trial classes at Noor Ul Quran Online Academy. Request male or female teachers online.",
  alternates: { canonical: "/book-free-trial" },
};

export default function BookFreeTrialPage() {
  return (
    <>
      <PageHero
        title="Start Your Quran Learning Journey with 3 Days of Free Trial Classes"
        description="Explore online Quran learning with Noor Ul Quran Online Academy before deciding on enrollment."
        image="/images/free-trial.jpg"
      />
      <section className="py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="overflow-hidden rounded-[1.5rem] border border-emerald/10 shadow-md">
              <Image
                src="/images/free-trial.jpg"
                alt="Study desk prepared for a free trial online Quran class"
                width={1200}
                height={700}
                className="h-64 w-full object-cover"
              />
            </div>
            <div className="mt-6 space-y-3 text-navy-soft">
              <p>
                Share your preferred course, teacher gender, and contact details.
                Our team will contact you to discuss free trial arrangements.
              </p>
              <p className="text-sm">
                Please note: we do not guarantee a specific class time until it is
                confirmed with an available teacher.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Experienced male and female teachers</li>
                <li>• Classes via Zoom, Google Meet, or Microsoft Teams</li>
                <li>• Suitable for families in Europe and Gulf countries</li>
              </ul>
            </div>
          </div>
          <FreeTrialForm />
        </Container>
      </section>
    </>
  );
}
