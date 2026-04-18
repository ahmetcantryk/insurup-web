import { POSTS } from "@/data/blog";
import PostCard from "./PostCard";

export default function FeaturedPosts() {
  const hero = POSTS.find((p) => p.hero) ?? POSTS[0];
  const sides = POSTS.filter((p) => p.featured && p.slug !== hero.slug).slice(0, 2);

  return (
    <section className="relative py-16" style={{ background: "#FAFAF9" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-end justify-between mb-8 reveal">
          <div className="eyebrow text-ink-900/45">ÖNE ÇIKANLAR</div>
          <a href="#son-yazilar" className="font-mono text-[12px] underline underline-offset-4 text-ink-900/60">tüm yazılar ↓</a>
        </div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-5 reveal">
          <div className="h-full">
            <PostCard post={hero} variant="featured" />
          </div>
          <div className="grid grid-rows-2 gap-5 h-full">
            {sides.map((p) => (
              <PostCard key={p.slug} post={p} variant="compact" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
