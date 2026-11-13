import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { courses } from "@/lib/courses";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/courses",
    "/teachers",
    "/how-it-works",
    "/why-choose-us",
    "/reviews",
    "/blog",
    "/faqs",
    "/contact",
    "/book-free-trial",
    "/student-registration",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...courses.map((course) => ({
      url: `${SITE_URL}/courses/${course.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogPosts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
