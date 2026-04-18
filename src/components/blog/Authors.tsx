import { AUTHORS } from "@/data/blog";

export default function Authors() {
  return (
    <section className="relative py-20" style={{ background: "#FAFAF9" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-end justify-between mb-10 reveal">
          <div>
            <div className="eyebrow text-ink-900/45 mb-3">YAZARLARIMIZ</div>
            <h2 className="display text-[32px] md:text-[44px] text-ink-900">Ekibimizden notlar.</h2>
          </div>
          <a href="#" className="font-mono text-[12px] underline underline-offset-4 text-ink-900/60">tüm yazarlar →</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 reveal">
          {Object.values(AUTHORS).map((a) => (
            <div key={a.slug} className="card-light p-6 hover-lift flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-mono text-[14px] text-white"
                  style={{ background: a.gradient }}
                >
                  {a.initials}
                </div>
                <div>
                  <div className="text-[15px] font-semibold tracking-tight">{a.name}</div>
                  <div className="font-mono text-[11px] text-ink-900/50">{a.role}</div>
                </div>
              </div>
              <p className="text-ink-900/60 text-[13.5px] leading-[1.55]">{a.bio}</p>
              <div
                className="mt-auto pt-4 border-t flex items-center justify-between"
                style={{ borderColor: "rgba(10,15,44,.08)" }}
              >
                <span className="font-mono text-[11px] text-ink-900/55">{a.count} yazı</span>
                <div className="flex items-center gap-1.5">
                  {a.twitter && (
                    <a href={a.twitter} aria-label="Twitter" className="w-7 h-7 rounded-md flex items-center justify-center hover:bg-ink-900/[.06]" style={{ background: "#FAFAF9", border: "1px solid rgba(10,15,44,.08)" }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="rgba(10,15,44,.65)"><path d="M18 3h3l-7 8 8 10h-6l-5-6-5 6H3l7-9L2 3h6l4 5z"/></svg>
                    </a>
                  )}
                  {a.linkedin && (
                    <a href={a.linkedin} aria-label="LinkedIn" className="w-7 h-7 rounded-md flex items-center justify-center hover:bg-ink-900/[.06]" style={{ background: "#FAFAF9", border: "1px solid rgba(10,15,44,.08)" }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="rgba(10,15,44,.65)"><path d="M4 4h4v4H4zM4 10h4v10H4zM10 10h4v2c1-2 3-2 4-2 3 0 4 2 4 5v5h-4v-4c0-2 0-3-2-3s-2 1-2 3v4h-4z"/></svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
