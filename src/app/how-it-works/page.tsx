import type { Metadata } from "next";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "How It Works | Online Quran Classes Process",
  description:
    "Learn how online Quran classes work at Noor Ul Quran Online Academy — choose a course, request a free trial, confirm schedule, and begin learning.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        title="How Online Classes Work"
        description="A clear four-step process from course selection to your child’s first online Quran class."
        image="/images/how-it-works.jpg"
      />
      <HowItWorks />
      <section className="pb-20">
        <Container className="text-center">
          <Button href="/book-free-trial" variant="gold">
            Request Your 3-Day Free Trial
          </Button>
        </Container>
      </section>
    </>
  );
}
