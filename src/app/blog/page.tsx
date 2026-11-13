import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Islamic Education Resources for Parents",
  description:
    "Articles on online Quran learning, Noorani Qaida, Tajweed, Hifz tips, Salah, duas, and supporting Islamic education at home.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Islamic Education Blog"
        description="Practical guidance for Muslim parents supporting Quran learning at home and online."
      />
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="overflow-hidden rounded-2xl border border-emerald/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald">
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}{" "}
                      · {post.readingTime}
                    </p>
                    <h2 className="mt-2 font-display text-2xl text-navy">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-navy-soft">{post.excerpt}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
