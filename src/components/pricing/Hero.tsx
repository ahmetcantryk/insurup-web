export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#FAFAF9", paddingTop: 120 }}>
      <div className="absolute inset-0 grid-bg-light opacity-40 pointer-events-none"></div>
      <div className="absolute inset-0 pointer-events-none" style={{
        background:
          "radial-gradient(60% 40% at 50% 0%, rgba(76,110,245,.14), transparent 60%), radial-gradient(40% 30% at 80% 10%, rgba(155,107,240,.12), transparent 70%)",
      }}></div>
      <div className="relative max-w-[1100px] mx-auto px-6 pb-16 text-center reveal">
        <div className="eyebrow text-ink-900/50 mb-5">FİYATLANDIRMA</div>
        <h1 className="display text-[56px] md:text-[84px] text-ink-900 leading-[0.98] max-w-[900px] mx-auto">
          Acentenize göre{" "}
          <span style={{
            backgroundImage: "linear-gradient(90deg,#4C6EF5,#9B6BF0 60%,#14B8A6)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}>
            özel fiyat.
          </span>
        </h1>
        <p className="mt-7 text-ink-900/60 text-[18px] leading-[1.6] max-w-[620px] mx-auto">
          Sigorta satışınızı büyütmek için esnek paketlerimizle yanınızdayız. Tanışalım Paketi ile hemen ücretsiz başlayın, ihtiyaç büyüdükçe profesyonel paketlere geçin.
        </p>
        <div className="mt-8 inline-flex items-center gap-6 font-mono text-[12.5px] text-ink-900/55 flex-wrap justify-center">
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4FD1C5" }}></span>KVKK uyumlu</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4FD1C5" }}></span>Tanışalım Paketi ücretsiz</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4FD1C5" }}></span>İstediğinde iptal</span>
        </div>
      </div>
    </section>
  );
}
