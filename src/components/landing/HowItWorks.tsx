export default function HowItWorks() {
  return (
    <section id="nasil" className="relative py-28" style={{ background: "var(--bone-50)" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center reveal">
          <div className="eyebrow text-ink-900/50 mb-4">NASIL ÇALIŞIR</div>
          <h2 className="display text-[56px] md:text-[72px] text-ink-900 max-w-[900px] mx-auto">Dakikalar içinde dijitalleşin.</h2>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-0 relative">
          <div className="hidden md:block absolute top-[52px] left-[16%] right-[16%] h-px stepper-line-light"></div>

          <div className="reveal text-center px-6">
            <div className="relative mx-auto w-[104px] h-[104px] rounded-2xl mb-6 flex items-center justify-center" style={{ background: "white", border: "1px solid rgba(10,15,44,.08)", boxShadow: "0 12px 30px -12px rgba(10,15,44,.12)" }}>
              <span className="font-mono text-[11px] absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-white" style={{ background: "#0A0F2C" }}>01</span>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0A0F2C" strokeWidth="1.6"><path d="M9 11V7a3 3 0 0 1 6 0v4M5 11h14v10H5z"/><circle cx="12" cy="16" r="1.5" fill="#0A0F2C"/></svg>
            </div>
            <h3 className="text-[22px] font-semibold tracking-tight mb-2">Bağlan</h3>
            <p className="text-ink-900/60 text-[15px] leading-[1.6] max-w-[280px] mx-auto">CRM&apos;ini 5 dakikada kur, sigorta şirketlerini tek tıkla aktive et.</p>
            <div className="mt-5 font-mono text-[11px] text-ink-900/45">~5 dk kurulum</div>
          </div>

          <div className="reveal text-center px-6 mt-10 md:mt-0">
            <div className="relative mx-auto w-[104px] h-[104px] rounded-2xl mb-6 flex items-center justify-center" style={{ background: "white", border: "1px solid rgba(10,15,44,.08)", boxShadow: "0 12px 30px -12px rgba(10,15,44,.12)" }}>
              <span className="font-mono text-[11px] absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-white" style={{ background: "#0A0F2C" }}>02</span>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0A0F2C" strokeWidth="1.6"><path d="M3 6h18M3 12h18M3 18h12"/><circle cx="20" cy="18" r="2" fill="#4C6EF5" stroke="none"/></svg>
            </div>
            <h3 className="text-[22px] font-semibold tracking-tight mb-2">Sat</h3>
            <p className="text-ink-900/60 text-[15px] leading-[1.6] max-w-[280px] mx-auto">Tek ekrandan teklif al, karşılaştır, poliçeleştir. Ortalama 1.2 saniye.</p>
            <div className="mt-5 font-mono text-[11px] text-ink-900/45">8 şirket paralel sorgulama</div>
          </div>

          <div className="reveal text-center px-6 mt-10 md:mt-0">
            <div className="relative mx-auto w-[104px] h-[104px] rounded-2xl mb-6 flex items-center justify-center" style={{ background: "white", border: "1px solid rgba(10,15,44,.08)", boxShadow: "0 12px 30px -12px rgba(10,15,44,.12)" }}>
              <span className="font-mono text-[11px] absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-white" style={{ background: "#0A0F2C" }}>03</span>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0A0F2C" strokeWidth="1.6"><path d="M3 17 L9 11 L13 15 L21 7"/><path d="M16 7 H21 V12"/></svg>
            </div>
            <h3 className="text-[22px] font-semibold tracking-tight mb-2">Büyü</h3>
            <p className="text-ink-900/60 text-[15px] leading-[1.6] max-w-[280px] mx-auto">Otomatik yenileme, AI asistan, müşteri takibi — uyurken bile satış.</p>
            <div className="mt-5 font-mono text-[11px] text-ink-900/45">3x ciro artışı · 12 ay</div>
          </div>
        </div>
      </div>
    </section>
  );
}
