export const ACADEMY = {
  name: "Noor Ul Quran Online Academy",
  shortName: "Noor Ul Quran",
  email: "muhammadsaadm95@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=61591516899199",
  experienceYears: 10,
  studentsTaught: 75,
  teacherExperienceRange: "3–25",
  satisfactionRate: 98,
  freeTrialDays: 3,
  platforms: ["Google Meet", "Zoom", "Microsoft Teams"] as const,
  regions: {
    europe: [
      "United Kingdom",
      "Germany",
      "France",
      "Italy",
      "Spain",
      "and other European countries",
    ],
    gulf: [
      "Saudi Arabia",
      "United Arab Emirates",
      "Qatar",
      "Kuwait",
      "Oman",
      "Bahrain",
    ],
  },
  maleTeacher: {
    label: "Male Quran Teacher",
    phoneDisplay: "+92 316 4021265",
    phoneE164: "923164021265",
  },
  femaleTeacher: {
    label: "Female Quran Teacher",
    phoneDisplay: "+92 322 7536446",
    phoneE164: "923227536446",
  },
} as const;

export const MALE_WHATSAPP_MESSAGE =
  "Assalamu Alaikum! I am interested in online Quran classes with a male Quran teacher at Noor Ul Quran Online Academy. Please share course details, monthly fees, and information about the 3-day free trial.";

export const FEMALE_WHATSAPP_MESSAGE =
  "Assalamu Alaikum! I am interested in online Quran classes with a female Quran teacher at Noor Ul Quran Online Academy. Please share course details, monthly fees, and information about the 3-day free trial.";

export const MALE_FEE_MESSAGE =
  "Assalamu Alaikum! I would like to inquire about monthly fees for online Quran classes with a male Quran teacher at Noor Ul Quran Online Academy. Please share available courses, class arrangements, and fee details.";

export const FEMALE_FEE_MESSAGE =
  "Assalamu Alaikum! I would like to inquire about monthly fees for online Quran classes with a female Quran teacher at Noor Ul Quran Online Academy. Please share available courses, class arrangements, and fee details.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://noorulquran.online";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/courses", label: "Our Courses" },
  { href: "/teachers", label: "Our Teachers" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/reviews", label: "Parent Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact Us" },
] as const;
