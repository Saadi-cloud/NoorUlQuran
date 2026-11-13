import type { Metadata } from "next";
import { RegistrationForm } from "@/components/forms/RegistrationForm";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Student Registration",
  description:
    "Register your interest in online Quran classes at Noor Ul Quran Online Academy. Our team will contact you about arrangements and next steps.",
  alternates: { canonical: "/student-registration" },
};

export default function StudentRegistrationPage() {
  return (
    <>
      <PageHero
        title="Student Registration"
        description="Share your details to begin enrollment discussions. Class schedules and fees are confirmed after personal contact."
      />
      <section className="py-16 md:py-24">
        <Container className="max-w-4xl">
          <p className="mb-8 text-center text-navy-soft">
            Prefer to try first?{" "}
            <a href="/book-free-trial" className="font-semibold text-emerald underline">
              Book a 3-day free trial
            </a>{" "}
            before full enrollment.
          </p>
          <RegistrationForm />
        </Container>
      </section>
    </>
  );
}
