import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.22em]",
            light ? "text-gold-soft" : "text-emerald",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl leading-tight md:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "gold-rule mt-4",
          align === "center" ? "mx-auto" : "mr-auto",
        )}
      />
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg",
            light ? "text-white/85" : "text-navy-soft",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
