export type Course = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  objectives: string[];
  image: string;
  seoTitle: string;
  seoDescription: string;
};

export const courses: Course[] = [
  {
    slug: "noorani-qaida",
    name: "Noorani Qaida",
    shortDescription:
      "Learn Arabic letters, pronunciation, and foundational Quran reading skills.",
    description:
      "Noorani Qaida builds the foundation for Quran reading. Children learn Arabic letters, correct pronunciation, joining letters, and early reading skills that prepare them for Quran Nazra.",
    objectives: [
      "Recognize Arabic letters with confidence",
      "Practice clear letter pronunciation",
      "Learn foundational joining and reading skills",
      "Prepare for Quran Nazra classes",
    ],
    image: "/images/courses/noorani-qaida.jpg",
    seoTitle: "Noorani Qaida Online for Kids | Noor Ul Quran Online Academy",
    seoDescription:
      "Learn Noorani Qaida online with experienced male and female Quran teachers. Start with a 3-day free trial for children in Europe and Gulf countries.",
  },
  {
    slug: "quran-nazra",
    name: "Quran Nazra",
    shortDescription:
      "Develop Quran reading fluency through guided recitation.",
    description:
      "Quran Nazra helps students improve reading fluency through guided recitation with an experienced teacher. Classes focus on steady progress, clarity, and confidence in reading the Holy Quran.",
    objectives: [
      "Build reading fluency with guided practice",
      "Improve accuracy and pacing",
      "Receive supportive teacher feedback",
      "Develop a consistent Quran reading habit",
    ],
    image: "/images/courses/quran-nazra.jpg",
    seoTitle: "Online Quran Nazra Classes for Kids | Noor Ul Quran",
    seoDescription:
      "Online Quran Nazra classes for children with experienced teachers. Convenient learning through Zoom, Google Meet, or Microsoft Teams.",
  },
  {
    slug: "quran-with-tajweed",
    name: "Quran with Tajweed",
    shortDescription:
      "Learn Tajweed rules and improve Quran pronunciation.",
    description:
      "Quran with Tajweed introduces essential Tajweed rules and pronunciation practice so students can recite with greater clarity and care, step by step, at a pace suited to their level.",
    objectives: [
      "Understand essential Tajweed concepts",
      "Improve pronunciation and articulation",
      "Apply rules during guided recitation",
      "Build confidence in careful Quran reading",
    ],
    image: "/images/courses/tajweed.jpg",
    seoTitle: "Online Tajweed Classes for Children | Noor Ul Quran",
    seoDescription:
      "Learn Quran with Tajweed online from experienced male and female teachers. Book a 3-day free trial with Noor Ul Quran Online Academy.",
  },
  {
    slug: "quran-memorization-hifz",
    name: "Quran Memorization — Hifz",
    shortDescription:
      "Develop Quran memorization skills through structured learning and revision.",
    description:
      "Our Hifz pathway supports structured memorization and regular revision. Teachers help students build sustainable habits suited to age, capacity, and family schedule.",
    objectives: [
      "Follow a structured memorization plan",
      "Strengthen revision and retention",
      "Build consistent daily practice habits",
      "Progress at a supportive, realistic pace",
    ],
    image: "/images/courses/hifz.jpg",
    seoTitle: "Online Hifz Classes for Kids | Quran Memorization",
    seoDescription:
      "Online Quran memorization (Hifz) classes with structured learning and revision. Experienced teachers and a 3-day free trial available.",
  },
  {
    slug: "daily-islamic-duas",
    name: "Daily Islamic Duas",
    shortDescription: "Learn authentic daily Islamic supplications.",
    description:
      "Children learn commonly taught daily Islamic duas for morning, evening, meals, travel, and everyday moments — helping families nurture remembrance of Allah in daily life.",
    objectives: [
      "Learn commonly taught daily duas",
      "Practice clear memorization and meaning",
      "Connect duas to everyday routines",
      "Build a habit of remembrance",
    ],
    image: "/images/courses/duas.jpg",
    seoTitle: "Daily Islamic Duas for Children Online | Noor Ul Quran",
    seoDescription:
      "Help your child learn authentic daily Islamic duas online with experienced Quran teachers. Start with a free trial class.",
  },
  {
    slug: "namaz-salah",
    name: "Namaz / Salah",
    shortDescription:
      "Learn the essential steps and recitations of Salah.",
    description:
      "This course helps children learn the essential steps of Salah, key recitations, and respectful practice so they can grow in understanding and confidence in prayer.",
    objectives: [
      "Learn the essential steps of Salah",
      "Practice key prayer recitations",
      "Understand respectful prayer manners",
      "Build confidence through guided practice",
    ],
    image: "/images/courses/salah.jpg",
    seoTitle: "Online Salah Classes for Kids | Learn Namaz",
    seoDescription:
      "Online Namaz and Salah classes for children with experienced male and female teachers at Noor Ul Quran Online Academy.",
  },
  {
    slug: "six-kalmas",
    name: "Six Kalmas",
    shortDescription:
      "Learn and memorize the Kalmas commonly taught in foundational Islamic education.",
    description:
      "Students learn and memorize the Six Kalmas commonly taught in foundational Islamic education, with clear pronunciation support and age-appropriate guidance.",
    objectives: [
      "Learn the Six Kalmas with clarity",
      "Practice memorization with teacher support",
      "Strengthen foundational Islamic knowledge",
      "Build confidence through repetition",
    ],
    image: "/images/courses/kalmas.jpg",
    seoTitle: "Six Kalmas Online for Children | Noor Ul Quran",
    seoDescription:
      "Learn and memorize the Six Kalmas online with supportive Quran teachers. Ideal for foundational Islamic education for children.",
  },
  {
    slug: "basic-islamic-studies",
    name: "Basic Islamic Studies",
    shortDescription:
      "Learn essential Islamic beliefs, manners, and everyday practices.",
    description:
      "Basic Islamic Studies introduces essential beliefs, manners, and everyday practices in a clear, age-appropriate way — supporting both Quran learning and character development.",
    objectives: [
      "Learn essential Islamic beliefs",
      "Understand everyday Islamic manners",
      "Connect knowledge with daily practice",
      "Grow with respectful, age-appropriate lessons",
    ],
    image: "/images/courses/islamic-studies.jpg",
    seoTitle: "Basic Islamic Studies for Kids Online | Noor Ul Quran",
    seoDescription:
      "Online Basic Islamic Studies for children covering essential beliefs, manners, and everyday practices with experienced teachers.",
  },
];

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}
