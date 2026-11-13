import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "gold" | "outline" | "whatsapp";

const variants: Record<Variant, string> = {
  primary:
    "bg-emerald text-white hover:bg-emerald-deep shadow-[0_10px_30px_-12px_rgba(7,94,69,0.65)]",
  secondary:
    "bg-navy text-white hover:bg-navy-soft shadow-[0_10px_30px_-12px_rgba(16,42,67,0.55)]",
  gold: "bg-gold text-navy hover:bg-gold-soft shadow-[0_10px_30px_-12px_rgba(212,175,55,0.55)]",
  outline:
    "border border-emerald/30 bg-white/80 text-emerald hover:border-emerald hover:bg-ivory",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1ebe57] shadow-[0_10px_30px_-12px_rgba(37,211,102,0.55)]",
};

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold tracking-wide transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    className,
  );

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
