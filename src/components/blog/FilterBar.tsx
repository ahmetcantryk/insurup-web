import Link from "next/link";
import { CATEGORIES } from "@/data/blog";

export default function FilterBar({ active = "all" }: { active?: string }) {
  return (
    <div className="sticky top-16 z-30 backdrop-blur" style={{ background: "rgba(250,250,249,.85)", borderBottom: "1px solid rgba(10,15,44,.06)" }}>
      <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center gap-3 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
        <div className="flex items-center gap-2 flex-1 min-w-0 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {CATEGORIES.map((c) => {
            const isActive = c.key === active;
            return (
              <Link
                key={c.key}
                href={c.key === "all" ? "/blog" : `/blog?category=${c.key}`}
                scroll={false}
                className="chip whitespace-nowrap transition"
                style={
                  isActive
                    ? { background: c.color, color: "white", border: `1px solid ${c.color}`, fontSize: 12, padding: "6px 14px" }
                    : { background: "white", color: "rgba(10,15,44,.7)", border: "1px solid rgba(10,15,44,.12)", fontSize: 12, padding: "6px 14px" }
                }
              >
                {c.label}
              </Link>
            );
          })}
        </div>

        <div className="shrink-0 hidden md:flex items-center gap-2 text-[12px] font-mono text-ink-900/60">
          <span>Sırala:</span>
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md" style={{ background: "white", border: "1px solid rgba(10,15,44,.12)", color: "rgba(10,15,44,.8)" }}>
            En Yeniler
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 3 L5 7 L9 3" stroke="currentColor" strokeWidth="1.4"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
