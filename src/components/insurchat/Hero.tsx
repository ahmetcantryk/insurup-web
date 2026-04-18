import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="relative overflow-hidden grain" style={{ background: "#050818", color: "white", paddingTop: 104 }}>
      <div className="absolute inset-0 grid-bg opacity-50"></div>
      <div className="mesh-orb" style={{ width: 620, height: 620, left: -180, top: -120, background: "radial-gradient(circle,#7C3AED,transparent 60%)", opacity: .55 }}></div>
      <div className="mesh-orb" style={{ width: 520, height: 520, right: -120, top: 80, background: "radial-gradient(circle,#14B8A6,transparent 60%)", opacity: .4 }}></div>

      <div className="relative max-w-[1280px] mx-auto px-6 pt-14 pb-28">
        <div className="flex items-center gap-2 text-[12px] font-mono text-white/45 reveal">
          <a href="/" className="hover:text-white">/</a>
          <span>·</span><span>ürünler</span><span>·</span>
          <span className="text-white/80">insurchat</span>
        </div>

        <div className="mt-8 grid lg:grid-cols-[1fr_1.2fr] gap-14 items-center">
          {/* Left copy */}
          <div className="reveal">
            <div className="chip chip-ai mb-6">
              <span className="ai-orb" style={{ width: 8, height: 8 }}></span>
              ✨ YAPAY ZEKA DESTEKLİ
            </div>
            <h1 className="display display-hero text-[76px] leading-[0.98] tracking-tight">
              Sigorta satışında <span className="ai-grad">AI asistan.</span>
            </h1>
            <p className="mt-7 text-white/70 text-[18px] leading-[1.6] max-w-[540px]">
              InsurChat ile müşterilerinize 7/24 yapay zeka destekli hizmet sunun; anında teklif, poliçe ve müşteri desteği sağlayın.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#iletisim" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium btn-ai">
                AI Asistanımı Kur
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="#canli-demo" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium btn-ghost-dark">Canlı Demo Dene →</a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-[12.5px] text-white/55 font-mono flex-wrap">
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ background: "#14B8A6" }}></span>Web + WhatsApp</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ background: "#7C3AED" }}></span>InsurAI altyapısı</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ background: "#A78BFA" }}></span>Türkçe dil desteği</div>
            </div>
          </div>

          {/* Right: modern AI observability deck + live WhatsApp */}
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
