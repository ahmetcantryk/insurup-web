import { POSTS, type Category } from "@/data/blog";
import PostCard from "./PostCard";
import Newsletter from "./Newsletter";

export default function BlogGrid({ active = "all" }: { active?: string }) {
  const posts =
    active === "all" ? POSTS : POSTS.filter((p) => p.category === (active as Category));

  // Exclude the featured hero + side featured for the main grid if showing all
  const heroSlugs = new Set(
    active === "all" ? POSTS.filter((p) => p.hero || p.featured).slice(0, 3).map((p) => p.slug) : [],
  );
  const visible = posts.filter((p) => !heroSlugs.has(p.slug));

  // Inject newsletter after the 5th card
  const before = visible.slice(0, 5);
  const after = visible.slice(5);

  return (
    <section id="son-yazilar" className="relative py-16" style={{ background: "#FAFAF9" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-end justify-between mb-8 reveal">
          <h2 className="display text-[32px] md:text-[40px] text-ink-900">
            Son yazılar
            <span className="ml-3 text-ink-900/40 font-mono text-[14px] font-normal">{visible.length} makale</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {before.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
          <Newsletter />
          {after.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
