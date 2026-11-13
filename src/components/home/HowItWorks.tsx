import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    step: "01",
    title: "Choose Your Course",
    text: "Select from Noorani Qaida, Quran Nazra, Tajweed, Hifz, Duas, Salah, Six Kalmas, or Basic Islamic Studies.",
  },
  {
    step: "02",
    title: "Request Your 3-Day Free Trial",
    text: "Share parent and student details so our team can understand your learning needs.",
  },
  {
    step: "03",
    title: "Discuss Teacher Availability and Class Schedule",
    text: "We contact you to confirm teacher preference, timing, and online platform arrangements.",
  },
  {
    step: "04",
    title: "Begin Learning Online",
    text: "Start classes through Zoom, Google Meet, or Microsoft Teams with an experienced teacher.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="How Online Classes Work"
          title="A Clear Path from Inquiry to First Class"
          description="Simple steps designed for busy parents seeking reliable online Quran education."
        />
        <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-emerald/10 shadow-lg">
          <Image
            src="/images/how-it-works.jpg"
            alt="Laptop and open Quran prepared for an online Quran class"
            width={1400}
            height={700}
            className="h-56 w-full object-cover md:h-72"
          />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((item) => (
            <article
              key={item.step}
              className="rounded-2xl border border-emerald/10 bg-white p-6 shadow-sm"
            >
              <p className="font-display text-3xl text-gold">{item.step}</p>
              <h3 className="mt-3 font-display text-xl text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-soft">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
