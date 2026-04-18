import Link from "next/link";
import Cover from "./Cover";
import { AUTHORS, categoryMeta, type Post } from "@/data/blog";

type Variant = "default" | "compact" | "featured";

export default function PostCard({ post, variant = "default" }: { post: Post; variant?: Variant }) {
  const author = AUTHORS[post.authorKey];
  const cat = categoryMeta(post.category);

  if (variant === "featured") {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group card-light overflow-hidden hover-lift flex flex-col h-full"
      >
        <div className="relative">
          <Cover post={post} height={360} />
          <span
            className="absolute top-4 left-4 chip font-mono"
            style={{ background: cat.color, color: "white", border: "none", fontSize: 10.5, padding: "4px 10px" }}
          >
            {cat.label.toUpperCase()}
          </span>
        </div>
        <div className="p-7 flex flex-col flex-1">
          <h3 className="display text-[28px] md:text-[32px] leading-[1.12] tracking-tight text-ink-900 group-hover:text-ink-950">
            {post.title}
          </h3>
          <p className="mt-3 text-ink-900/60 text-[15px] leading-[1.55] max-w-[560px]">
            {post.excerpt}
          </p>
          <div className="mt-6 flex items-center gap-3 pt-5 border-t" style={{ borderColor: "rgba(10,15,44,.08)" }}>
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-mono text-[11px] text-white"
              style={{ background: author.gradient }}
            >
              {author.initials}
            </div>
            <div className="text-[13px]">
              <div className="font-medium">{author.name}</div>
              <div className="font-mono text-[11px] text-ink-900/50">
                {post.date} · {post.readMinutes} dk okuma
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group card-light overflow-hidden hover-lift flex"
        style={{ minHeight: 160 }}
      >
        <div className="relative shrink-0 w-[140px]">
          <Cover post={post} className="h-full w-full" />
          <span
            className="absolute top-2 left-2 chip font-mono"
            style={{ background: cat.color, color: "white", border: "none", fontSize: 9, padding: "2px 7px" }}
          >
            {cat.label.toUpperCase()}
          </span>
        </div>
        <div className="p-4 flex flex-col justify-between flex-1">
          <h4 className="text-[15px] font-semibold tracking-tight leading-[1.28] text-ink-900 line-clamp-3">
            {post.title}
          </h4>
          <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-ink-900/55">
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center font-mono text-[9px] text-white"
              style={{ background: author.gradient }}
            >
              {author.initials}
            </div>
            <span className="truncate">{author.name}</span>
            <span>·</span>
            <span>{post.readMinutes} dk</span>
          </div>
        </div>
      </Link>
    );
  }

  // default grid card
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group card-light overflow-hidden hover-lift flex flex-col h-full"
    >
      <div className="relative">
        <Cover post={post} height={200} />
        <span
          className="absolute top-3 left-3 chip font-mono"
          style={{ background: cat.color, color: "white", border: "none", fontSize: 10, padding: "3px 9px" }}
        >
          {cat.label.toUpperCase()}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-[18px] font-semibold tracking-tight leading-[1.3] text-ink-900 line-clamp-2">
          {post.title}
        </h3>
        <p className="mt-2 text-ink-900/55 text-[13.5px] leading-[1.55] line-clamp-2">
          {post.excerpt}
        </p>
        <div
          className="mt-auto pt-4 flex items-center gap-2 text-[11.5px] font-mono text-ink-900/55 border-t mt-5"
          style={{ borderColor: "rgba(10,15,44,.06)" }}
        >
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center font-mono text-[9.5px] text-white"
            style={{ background: author.gradient }}
          >
            {author.initials}
          </div>
          <span className="truncate">{author.name}</span>
          <span>·</span>
          <span>{post.date}</span>
          <span className="ml-auto">{post.readMinutes} dk</span>
        </div>
      </div>
    </Link>
  );
}
