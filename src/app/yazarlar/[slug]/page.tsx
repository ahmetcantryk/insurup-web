import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostCard from "@/components/blog/PostCard";
import { AUTHORS, POSTS } from "@/data/blog";
import { getAuthorMetadata } from "@/utils/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.values(AUTHORS).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const author = AUTHORS[slug];
  if (!author) return { title: "Yazar bulunamadı" };
  const count = POSTS.filter((p) => p.authorKey === slug).length || author.count;
  return getAuthorMetadata(
    { name_surname: author.name, desc: author.bio, link: author.slug },
    count,
  );
}

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params;
  const author = AUTHORS[slug];
  if (!author) notFound();
  const posts = POSTS.filter((p) => p.authorKey === slug);

  return (
    <>
      <Navbar />

      <section className="relative pt-28 pb-14" style={{ background: "#FAFAF9" }}>
        <div className="absolute inset-0 grid-bg-light opacity-30 pointer-events-none"></div>
        <div className="relative max-w-[900px] mx-auto px-6">
          <Link href="/yazarlar" className="font-mono text-[12px] text-ink-900/60 underline underline-offset-4">
            ← tüm yazarlar
          </Link>
          <div className="mt-6 flex items-center gap-5">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center font-mono text-[22px] text-white"
              style={{ background: author.gradient }}
            >
              {author.initials}
            </div>
            <div>
              <div className="font-mono text-[11px] text-ink-900/50 tracking-wider">YAZAR</div>
              <h1 className="display text-[40px] md:text-[56px] text-ink-900 leading-[1]">{author.name}</h1>
              <div className="font-mono text-[13px] text-ink-900/55 mt-1">{author.role}</div>
            </div>
          </div>
          <p className="mt-6 text-ink-900/70 text-[17px] leading-[1.6] max-w-[620px]">{author.bio}</p>

          <div className="mt-6 flex items-center gap-2">
            {author.twitter && (
              <a href={author.twitter} aria-label="Twitter" className="w-9 h-9 rounded-md flex items-center justify-center" style={{ background: "white", border: "1px solid rgba(10,15,44,.08)", color: "rgba(10,15,44,.65)" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18 3h3l-7 8 8 10h-6l-5-6-5 6H3l7-9L2 3h6l4 5z"/></svg>
              </a>
            )}
            {author.linkedin && (
              <a href={author.linkedin} aria-label="LinkedIn" className="w-9 h-9 rounded-md flex items-center justify-center" style={{ background: "white", border: "1px solid rgba(10,15,44,.08)", color: "rgba(10,15,44,.65)" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h4v4H4zM4 10h4v10H4zM10 10h4v2c1-2 3-2 4-2 3 0 4 2 4 5v5h-4v-4c0-2 0-3-2-3s-2 1-2 3v4h-4z"/></svg>
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="relative py-12" style={{ background: "#FAFAF9" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <h2 className="display text-[24px] md:text-[32px] text-ink-900">
              {posts.length} yazı
            </h2>
          </div>
          {posts.length === 0 ? (
            <div className="text-ink-900/55 text-[14px]">Bu yazarın henüz yazısı yok.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
