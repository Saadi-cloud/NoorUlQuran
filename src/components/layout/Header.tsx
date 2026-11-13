"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { ACADEMY, NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const primaryLinks = NAV_LINKS.filter((link) =>
  ["/", "/about", "/courses", "/teachers", "/how-it-works", "/blog", "/contact"].includes(
    link.href,
  ),
);

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-emerald/10 bg-ivory/90 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-4 py-3">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald text-gold shadow-md transition group-hover:scale-105">
            <BookOpen className="h-5 w-5" aria-hidden />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg text-navy sm:text-xl">
              Noor Ul Quran
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald">
              Online Academy
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {primaryLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition",
                  active
                    ? "bg-emerald/10 text-emerald"
                    : "text-navy-soft hover:bg-emerald/5 hover:text-emerald",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/book-free-trial" variant="gold" className="px-4 py-2.5">
            Book Free Trial
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex rounded-lg border border-emerald/20 p-2 text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-emerald/10 bg-ivory lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium",
                  pathname === link.href
                    ? "bg-emerald text-white"
                    : "text-navy hover:bg-emerald/10",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-free-trial"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-navy"
            >
              Book Your 3-Day Free Trial
            </Link>
            <p className="px-3 pt-2 text-xs text-navy-soft">
              {ACADEMY.name} · Experienced male & female teachers
            </p>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
