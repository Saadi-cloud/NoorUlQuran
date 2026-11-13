import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { blogPosts, getPost } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      images: [post.image],
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = post.relatedSlugs
    .map((relatedSlug) => getPost(relatedSlug))
    .filter(Boolean);

  return (
    <>
      <PageHero title={post.title} description={post.excerpt} image={post.image} />
      <article className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <div className="overflow-hidden rounded-[1.5rem] border border-emerald/10 shadow-md">
            <Image
              src={post.image}
              alt=""
              width={1200}
              height={700}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <p className="mt-6 text-sm text-navy-soft">
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            · {post.readingTime} read
          </p>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-navy-soft md:text-lg">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-gold/30 bg-ivory-deep p-6 text-center">
            <h2 className="font-display text-2xl text-navy">
              Ready to begin Quran learning online?
            </h2>
            <p className="mt-2 text-sm text-navy-soft">
              Book a 3-day free trial with experienced male or female teachers.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Button href="/book-free-trial" variant="gold">
                Book Free Trial
              </Button>
              <Button href="/courses" variant="outline">
                Explore Courses
              </Button>
            </div>
          </div>

          {related.length ? (
            <div className="mt-12">
              <h2 className="font-display text-2xl text-navy">Related Articles</h2>
              <ul className="mt-4 space-y-2">
                {related.map((item) =>
                  item ? (
                    <li key={item.slug}>
                      <Link
                        href={`/blog/${item.slug}`}
                        className="font-medium text-emerald hover:underline"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ) : null,
                )}
              </ul>
            </div>
          ) : null}
        </Container>
      </article>
    </>
  );
}
