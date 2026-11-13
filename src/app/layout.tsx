import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { ACADEMY, SITE_URL } from "@/lib/constants";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${ACADEMY.name} | Online Quran Classes for Kids`,
    template: `%s | ${ACADEMY.name}`,
  },
  description:
    "Learn the Holy Quran online with experienced male and female teachers. Noorani Qaida, Tajweed, Hifz, Duas, Salah, and Islamic Studies for children in Europe and Gulf countries. 3-day free trial.",
  keywords: [
    "Online Quran Classes",
    "Online Quran Teacher",
    "Quran Classes for Kids",
    "Female Quran Teacher Online",
    "Male Quran Teacher Online",
    "Noorani Qaida Online",
    "Online Tajweed Classes",
    "Online Hifz Classes",
    "Quran Classes UK",
    "Online Quran Teacher Germany",
    "Quran Classes UAE",
    "Online Quran Classes Saudi Arabia",
    "Online Quran Teacher Qatar",
    "Online Quran Learning Europe",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: ACADEMY.name,
    title: `${ACADEMY.name} | Online Quran Classes for Kids`,
    description:
      "Premium online Quran education with experienced male and female teachers. Book a 3-day free trial.",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 800, alt: ACADEMY.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${ACADEMY.name} | Online Quran Classes for Kids`,
    description:
      "Experienced male and female Quran teachers. Free 3-day trial for children in Europe and Gulf countries.",
    images: ["/images/hero.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: ACADEMY.name,
    url: SITE_URL,
    email: ACADEMY.email,
    sameAs: [ACADEMY.facebook],
    description:
      "Online Quran academy offering Noorani Qaida, Nazra, Tajweed, Hifz, Duas, Salah, and Basic Islamic Studies for children.",
    areaServed: ["Europe", "Gulf Cooperation Council"],
  };

  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
