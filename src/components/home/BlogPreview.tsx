import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BlogPreview() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="bg-ivory-deep py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Blog & Learning Resources"
          title="Guidance for Muslim Parents"
          description="Practical articles on online Quran learning, Tajweed, Hifz habits, and supporting Islamic education at home."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-2xl border border-emerald/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Link href={`/blog/${post.slug}`} className="block">
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
                    {post.readingTime} read
                  </p>
                  <h3 className="mt-2 font-display text-xl text-navy">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-navy-soft">{post.excerpt}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/blog" variant="secondary">
            Visit Blog
          </Button>
        </div>
      </Container>
    </section>
  );
}
