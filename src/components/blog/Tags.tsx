import { TAG_CLOUD } from "@/data/blog";

export default function Tags() {
  return (
    <section className="relative py-20" style={{ background: "#F2F1EE" }}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex items-end justify-between mb-8 reveal">
          <div>
            <div className="eyebrow text-ink-900/45 mb-3">POPÜLER KONULAR</div>
            <h2 className="display text-[32px] md:text-[44px] text-ink-900">Keşfetmeye başla.</h2>
          </div>
          <a href="#" className="font-mono text-[12px] underline underline-offset-4 text-ink-900/60">tüm etiketler →</a>
        </div>

        <div className="flex flex-wrap gap-2 reveal">
          {TAG_CLOUD.map((t) => (
            <a
              key={t}
              href={`/blog?q=${encodeURIComponent(t)}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-mono text-[12px] transition hover:bg-ink-900 hover:text-white"
              style={{ background: "white", border: "1px solid rgba(10,15,44,.1)", color: "rgba(10,15,44,.75)" }}
            >
              <span className="opacity-50">#</span>
              {t}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
