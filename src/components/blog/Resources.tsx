const ITEMS = [
  {
    kind: "E-KİTAP",
    title: "Sigorta Acenteleri için Dijital Dönüşüm Rehberi",
    desc: "80 sayfa · PDF · Ücretsiz indir",
    cta: "İndir",
    gradient: "linear-gradient(135deg,#0A0F2C,#4C6EF5)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
  },
  {
    kind: "WEBINAR",
    title: "Aylık canlı oturumlarımıza katılın",
    desc: "Her ayın ilk Çarşamba · 20:00",
    cta: "Kayıt Ol",
    gradient: "linear-gradient(135deg,#9B6BF0,#14B8A6)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7">
        <rect x="3" y="6" width="14" height="12" rx="2" />
        <path d="M17 10l4-2v8l-4-2z" />
      </svg>
    ),
  },
  {
    kind: "PODCAST",
    title: "InsurUp Podcast",
    desc: "24 bölüm · Spotify + Apple Podcasts",
    cta: "Dinle",
    gradient: "linear-gradient(135deg,#0F8E7F,#4FD1C5)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7">
        <rect x="9" y="3" width="6" height="12" rx="3" />
        <path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8" />
      </svg>
    ),
  },
];

export default function Resources() {
  return (
    <section className="relative py-20" style={{ background: "#FAFAF9" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="mb-10 reveal">
          <div className="eyebrow text-ink-900/45 mb-3">DAHA FAZLA KAYNAK</div>
          <h2 className="display text-[32px] md:text-[44px] text-ink-900">Blog dışında keşfet.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 reveal">
          {ITEMS.map((i) => (
            <a
              key={i.kind}
              href="#"
              className="relative overflow-hidden rounded-[20px] p-7 hover-lift text-white flex flex-col min-h-[200px]"
              style={{ background: i.gradient }}
            >
              <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none"></div>
              <div className="relative flex items-center justify-between">
                <span className="chip" style={{ background: "rgba(255,255,255,.15)", color: "white", border: "1px solid rgba(255,255,255,.25)", fontSize: 10 }}>
                  {i.kind}
                </span>
                <span
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.2)" }}
                >
                  {i.icon}
                </span>
              </div>
              <div className="relative mt-auto">
                <h3 className="display text-[22px] leading-[1.2] mt-10 max-w-[280px]">{i.title}</h3>
                <div className="mt-2 font-mono text-[12px] text-white/70">{i.desc}</div>
                <div className="mt-5 inline-flex items-center gap-2 font-medium text-[13.5px]">
                  {i.cta}
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
