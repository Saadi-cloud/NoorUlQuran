import type { Metadata } from "next";
import { WhyChoose } from "@/components/home/WhyChoose";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Why Choose Us | Online Quran Academy Advantages",
  description:
    "Why parents choose Noor Ul Quran Online Academy: experienced male and female teachers, free trial classes, and comprehensive Quran education.",
  alternates: { canonical: "/why-choose-us" },
};

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        title="Why Choose Noor Ul Quran Online Academy"
        description="Experience, teacher options, convenient platforms, and a supportive free trial for Muslim families abroad."
      />
      <WhyChoose />
      <FinalCta />
    </>
  );
}
