import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostCard from "@/components/blog/PostCard";
import ReadingProgress from "@/components/blog/ReadingProgress";
import ShareButtons from "@/components/blog/ShareButtons";
import { POSTS, AUTHORS, categoryMeta } from "@/data/blog";
import { getBlogMetadata } from "@/utils/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Yazı bulunamadı" };
  const author = AUTHORS[post.authorKey];
  return getBlogMetadata({
    title: post.title,
    desc: post.excerpt,
    link: post.slug,
    author_id: { name_surname: author.name },
    date: post.date,
  });
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();
  const author = AUTHORS[post.authorKey];
  const cat = categoryMeta(post.category);
  const related = POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const relatedFallback = related.length < 3
    ? [...related, ...POSTS.filter((p) => p.slug !== post.slug && !related.includes(p)).slice(0, 3 - related.length)]
    : related;

  const contentParagraphs = buildMockContent(post.title, post.excerpt);

  return (
    <>
      <Navbar />
      <ReadingProgress />

      <article className="relative" style={{ background: "#FAFAF9" }}>
        {/* Meta + title (no cover banner) */}
        <div className="relative max-w-[720px] mx-auto px-6 pt-28 pb-8">
          <Link href="/blog" className="inline-flex items-center gap-1.5 font-mono text-[12px] text-ink-900/55 mb-6 hover:text-ink-900">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M6 2L2 5l4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            tüm yazılar
          </Link>
          <div className="flex items-center gap-2 flex-wrap">
            <Link
              href={`/blog?category=${post.category}`}
              className="chip font-mono"
              style={{ background: cat.color, color: "white", border: "none", fontSize: 10.5, padding: "4px 10px" }}
            >
              {cat.label.toUpperCase()}
            </Link>
            <span className="font-mono text-[11px] text-ink-900/50">
              {post.date} · {post.readMinutes} dk okuma
            </span>
          </div>
          <h1 className="display text-[40px] md:text-[56px] leading-[1.05] tracking-tight text-ink-900 mt-4">
            {post.title}
          </h1>
          <p className="mt-5 text-[18px] leading-[1.55] text-ink-900/70">{post.excerpt}</p>

          <div className="mt-8 pt-6 border-t flex items-center gap-3" style={{ borderColor: "rgba(10,15,44,.08)" }}>
            <Link
              href={`/yazarlar/${author.slug}`}
              className="w-10 h-10 rounded-full flex items-center justify-center font-mono text-[12px] text-white"
              style={{ background: author.gradient }}
            >
              {author.initials}
            </Link>
            <div>
              <Link href={`/yazarlar/${author.slug}`} className="text-[14px] font-semibold">
                {author.name}
              </Link>
              <div className="font-mono text-[11px] text-ink-900/50">{author.role}</div>
            </div>
          </div>
        </div>

        {/* Body with side share */}
        <div className="relative max-w-[1080px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[60px_1fr] gap-8 pb-20">
          <ShareButtons title={post.title} />
          <div className="prose-body max-w-[720px]">
            {contentParagraphs.map((p, i) => (
              <p key={i} className="text-[17px] leading-[1.72] text-ink-900/85 mb-5" style={{ fontFamily: "var(--font-geist-sans)" }}>
                {p}
              </p>
            ))}

            <div className="my-10 rounded-2xl p-7 text-white" style={{ background: "linear-gradient(135deg,#0A0F2C,#4C6EF5)" }}>
              <div className="eyebrow text-white/60 mb-2">UYGULAMAYA KOY</div>
              <h3 className="display text-[24px] leading-[1.15] max-w-[380px]">Bu konuyu InsurUp ile pratikte dene.</h3>
              <Link href="/#iletisim" className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium btn-primary text-[13.5px]">
                Demo Talep Et →
              </Link>
            </div>

            <p className="text-[17px] leading-[1.72] text-ink-900/85 mb-5" style={{ fontFamily: "var(--font-geist-sans)" }}>
              Görüşlerinizi paylaşmak ister misiniz? Bize{" "}
              <a href="mailto:contact@insurup.com" className="underline underline-offset-4" style={{ color: "#4C6EF5" }}>
                contact@insurup.com
              </a>{" "}
              adresinden yazın — editörlerimiz okur, doğru kişiye yönlendirir.
            </p>
          </div>
        </div>
      </article>

      {/* Author block */}
      <section className="relative py-16" style={{ background: "#F2F1EE" }}>
        <div className="max-w-[720px] mx-auto px-6">
          <div className="card-light p-7 flex items-start gap-5">
            <Link
              href={`/yazarlar/${author.slug}`}
              className="w-16 h-16 shrink-0 rounded-full flex items-center justify-center font-mono text-[18px] text-white"
              style={{ background: author.gradient }}
            >
              {author.initials}
            </Link>
            <div>
              <div className="text-[11px] font-mono text-ink-900/50 tracking-wider">YAZAR</div>
              <Link href={`/yazarlar/${author.slug}`} className="text-[18px] font-semibold tracking-tight">
                {author.name}
              </Link>
              <div className="text-[13px] text-ink-900/60 mt-1">{author.bio}</div>
              <Link
                href={`/yazarlar/${author.slug}`}
                className="mt-3 inline-flex items-center gap-2 font-mono text-[12px]"
                style={{ color: "#4C6EF5" }}
              >
                {author.count} yazının tümünü gör →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="relative py-16" style={{ background: "#FAFAF9" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <h2 className="display text-[28px] md:text-[36px] text-ink-900">Daha fazla oku</h2>
            <Link href="/blog" className="font-mono text-[12px] underline underline-offset-4 text-ink-900/60">
              tüm yazılar →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedFallback.map((r) => (
              <PostCard key={r.slug} post={r} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function buildMockContent(title: string, excerpt: string): string[] {
  return [
    excerpt,
    `Bu yazıda "${title}" başlığı altında Türkiye pazarındaki sigorta acentelerinin bugün yaşadığı pratik sorunları, bu sorunlara hangi dijital araçların çözüm ürettiğini ve küçük-orta ölçekli ekiplerin 90 günlük bir geçiş planıyla neler başarabileceğini ele alıyoruz.`,
    `Birinci bölümde, geleneksel iş akışının tek tek adımlarını çıkartıp her adımın ne kadar zaman harcadığını ölçüyoruz. İkinci bölümde, bu ölçümleri tek platformlu bir yapıda yeniden modelleyerek nerelerde kazanç olduğunu net sayılarla gösteriyoruz.`,
    `Üçüncü bölüm, karar vericilere yönelik bir checklist sunuyor: hangi sorular sorulmalı, hangi metrikler takip edilmeli, pilot aşamasında hangi risklere dikkat edilmeli. Bu listeyi ekip toplantılarınızda doğrudan kullanabilirsiniz.`,
    `Son olarak, InsurUp müşterilerinden topladığımız 6 pratik öğrenimle yazıyı kapatıyoruz. Bu öğrenimler bir "ideal senaryo" sunmuyor — tam tersine, ilk 90 günde sık yapılan hataları ve bunlardan nasıl dönüleceğini anlatıyor.`,
    `Sorularınızı ve kendi deneyimlerinizi bizimle paylaşabilirsiniz — bu yazı bir başlangıç noktası, son söz değil.`,
  ];
}
