import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { ACADEMY, NAV_LINKS } from "@/lib/constants";
import { whatsappLinks } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-emerald/10 bg-navy text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="font-display text-2xl text-gold">Noor Ul Quran</p>
          <p className="mt-1 text-sm uppercase tracking-[0.18em] text-white/70">
            Online Academy
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            Premium online Quran education for children with experienced male and
            female teachers. Serving Muslim families in Europe and Gulf countries.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {NAV_LINKS.slice(0, 7).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
            Start Learning
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <Link href="/book-free-trial" className="hover:text-gold">
                Book Free Trial
              </Link>
            </li>
            <li>
              <Link href="/student-registration" className="hover:text-gold">
                Student Registration
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-gold">
                Our Courses
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="hover:text-gold">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-gold">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="hover:text-gold">
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>
              <a
                href={`mailto:${ACADEMY.email}`}
                className="inline-flex items-center gap-2 hover:text-gold"
              >
                <Mail className="h-4 w-4" aria-hidden />
                {ACADEMY.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappLinks.male}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-gold"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Male Teacher · {ACADEMY.maleTeacher.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappLinks.female}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-gold"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Female Teacher · {ACADEMY.femaleTeacher.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={ACADEMY.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-gold"
              >
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm bg-[#1877F2] text-[10px] font-bold text-white" aria-hidden>
                  f
                </span>
                Facebook Page
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {ACADEMY.name}. All rights reserved.
          </p>
          <p>Online Quran classes for children · Europe & Gulf families welcome</p>
        </Container>
      </div>
    </footer>
  );
}
