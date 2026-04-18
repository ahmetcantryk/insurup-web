const POSTS = [
  {
    tag: "DİJİTAL DÖNÜŞÜM",
    tagChip: "chip-volt",
    gradient: "linear-gradient(135deg,#0A0F2C,#2A3360)",
    title: "Geleneksel acenteden dijital acenteye: 90 günde nasıl geçtik?",
    summary: "Bir Ankara acentesinin 3 katlık ciro artışının arkasındaki operasyon değişiklikleri.",
    meta: "7 dk okuma · 12 Nisan",
  },
  {
    tag: "SATIŞ STRATEJİLERİ",
    tagChip: "",
    tagStyle: { background: "rgba(155,107,240,.3)", color: "white", border: "1px solid rgba(255,255,255,.3)" },
    gradient: "linear-gradient(135deg,#1A2247,#9B6BF0)",
    title: "Yenileme dönemi yaklaşırken 5 otomatik hatırlatma şablonu.",
    summary: "SMS, WhatsApp ve e-postada en iyi performans gösteren mesaj kalıpları.",
    meta: "5 dk okuma · 08 Nisan",
  },
  {
    tag: "WHATSAPP PAZARLAMA",
    tagChip: "",
    tagStyle: { background: "rgba(255,255,255,.2)", color: "white", border: "1px solid rgba(255,255,255,.35)" },
    gradient: "linear-gradient(135deg,#0F8E7F,#4FD1C5)",
    title: "WhatsApp üzerinden satışta dönüşüm oranını %40 artıran 7 kural.",
    summary: "AI asistan ve insan müdahalesinin doğru dengede kurgulanması.",
    meta: "9 dk okuma · 02 Nisan",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative py-28" style={{ background: "#F2F1EE" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-end justify-between mb-12 reveal">
          <div>
            <div className="eyebrow text-ink-900/50 mb-4">KAYNAKLAR</div>
            <h2 className="display text-[48px] md:text-[60px] text-ink-900">Acenteler için rehberler.</h2>
          </div>
          <a href="#" className="font-mono text-[13px] underline underline-offset-4">tüm yazılar →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {POSTS.map((p) => (
            <a key={p.title} href="#" className="card-light hover-lift overflow-hidden reveal">
              <div className="h-[180px] relative" style={{ background: p.gradient }}>
                <div className="absolute inset-0 grid-bg opacity-40"></div>
                <div className="absolute bottom-3 left-4 chip" style={p.tagStyle ?? undefined}>
                  {p.tagChip ? <span className={`chip ${p.tagChip}`} style={{ padding: 0, border: "none", background: "none" }}>{p.tag}</span> : p.tag}
                </div>
                <div className="absolute top-4 right-4 font-mono text-[10px] text-white/60">01 / 2026</div>
              </div>
              <div className="p-6">
                <h3 className="text-[18px] font-semibold tracking-tight leading-[1.3]">{p.title}</h3>
                <p className="mt-2 text-ink-900/55 text-[13.5px] leading-[1.55]">{p.summary}</p>
                <div className="mt-4 flex items-center gap-2 text-[11.5px] font-mono text-ink-900/45">{p.meta}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
