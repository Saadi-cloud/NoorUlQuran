import {
  Award,
  BookOpenCheck,
  CalendarCheck2,
  MonitorPlay,
  Users,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Award,
    title: "10 Years of Online Quran Teaching Experience",
    text: "A decade of supporting families with structured online Quran education.",
  },
  {
    icon: Users,
    title: "Experienced Male & Female Teachers",
    text: "Parents can choose the teacher gender that best suits their family.",
  },
  {
    icon: BookOpenCheck,
    title: "Teachers with 3–25 Years of Experience",
    text: "Individual teachers bring several years of classroom and online practice.",
  },
  {
    icon: Sparkles,
    title: "Three Days of Free Trial Classes",
    text: "Experience teaching style and class comfort before deciding on enrollment.",
  },
  {
    icon: MonitorPlay,
    title: "Convenient Learning Through Online Platforms",
    text: "Classes through Zoom, Google Meet, or Microsoft Teams from home.",
  },
  {
    icon: CalendarCheck2,
    title: "Comprehensive Quran and Islamic Education",
    text: "From Noorani Qaida and Nazra to Tajweed, Hifz, Duas, Salah, and more.",
  },
];

export function WhyChoose() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Trusted Online Quran Education for Families Abroad"
          description="Built for Muslim parents seeking reliable Quran learning for their children across Europe and the Gulf."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-emerald/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald/10 text-emerald">
                <feature.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-xl text-navy">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-soft">
                {feature.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
