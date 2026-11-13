import Image from "next/image";
import { Button } from "@/components/ui/Button";
import type { Course } from "@/lib/courses";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-emerald/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={course.image}
          alt={`${course.name} course illustration`}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-2xl text-navy">{course.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-soft">
          {course.shortDescription}
        </p>
        <ul className="mt-4 space-y-1.5 text-sm text-navy-soft">
          {course.objectives.slice(0, 3).map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <Button
            href={`/courses/${course.slug}`}
            variant="outline"
            className="px-4 py-2.5 text-xs"
          >
            Learn More
          </Button>
          <Button
            href="/book-free-trial"
            variant="primary"
            className="px-4 py-2.5 text-xs"
          >
            Book Free Trial
          </Button>
        </div>
      </div>
    </article>
  );
}
