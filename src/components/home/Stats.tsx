"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { ACADEMY } from "@/lib/constants";

const stats = [
  {
    value: `${ACADEMY.experienceYears}+`,
    label: "Years",
    detail: "Online Quran Teaching Experience",
  },
  {
    value: `${ACADEMY.studentsTaught}+`,
    label: "Students",
    detail: "Taught in the Last 5 Years",
  },
  {
    value: ACADEMY.teacherExperienceRange,
    label: "Years",
    detail: "Individual Teacher Experience",
  },
  {
    value: `${ACADEMY.satisfactionRate}%`,
    label: "Satisfaction",
    detail: "Parent Satisfaction Rate",
  },
];

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-ivory-deep py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald">
            Trust & Experience
          </p>
          <h2 className="mt-3 font-display text-3xl text-navy md:text-4xl">
            Academy-Provided Experience Highlights
          </h2>
          <p className="mt-4 text-navy-soft">
            Supporting Quran learning through experienced teachers and convenient
            online education.
          </p>
          <p className="mt-2 text-xs text-navy-soft/80">
            Figures below are academy-provided and not independently verified.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.detail}
              className={`rounded-2xl border border-emerald/10 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
                visible ? "animate-count" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <p className="font-display text-4xl text-emerald">{stat.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                {stat.label}
              </p>
              <p className="mt-3 text-sm text-navy-soft">{stat.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
