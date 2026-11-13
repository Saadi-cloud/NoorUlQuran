import { AboutPreview } from "@/components/home/AboutPreview";
import { BlogPreview } from "@/components/home/BlogPreview";
import { CoursesPreview } from "@/components/home/CoursesPreview";
import { FaqPreview } from "@/components/home/FaqPreview";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ReviewsPreview } from "@/components/home/ReviewsPreview";
import { Stats } from "@/components/home/Stats";
import { TeachersPreview } from "@/components/home/TeachersPreview";
import { TrialBanner } from "@/components/home/TrialBanner";
import { WhatsAppContactCards } from "@/components/home/WhatsAppContactCards";
import { WhyChoose } from "@/components/home/WhyChoose";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrialBanner />
      <Stats />
      <AboutPreview />
      <CoursesPreview />
      <WhyChoose />
      <TeachersPreview />
      <HowItWorks />
      <WhatsAppContactCards />
      <ReviewsPreview />
      <BlogPreview />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
