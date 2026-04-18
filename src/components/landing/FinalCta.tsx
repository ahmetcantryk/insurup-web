export default function FinalCta() {
  return (
    <section className="relative py-32 overflow-hidden grain mesh-cta" style={{ color: "white" }}>
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <div className="relative max-w-[1100px] mx-auto px-6 text-center">
        <div className="chip chip-volt mb-6 reveal"><span className="w-1.5 h-1.5 rounded-full" style={{ background: "#7C9BFF", boxShadow: "0 0 8px #7C9BFF" }}></span>BUGÜN BAŞLA</div>
        <h2 className="display text-[72px] md:text-[104px] leading-[0.95] reveal">Bugün<br/>dijitalleşmeye başla.</h2>
        <p className="mt-7 text-[18px] text-white/65 max-w-[620px] mx-auto reveal">14 gün ücretsiz deneme. Kredi kartı istemiyoruz. İlk poliçeni 10 dakika içinde kes.</p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center reveal">
          <a href="#iletisim" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-medium btn-primary text-[15px]">
            Demo Talep Et
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="tel:+908502000000" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-medium btn-ghost-dark text-[15px]">Satış Ekibiyle Konuş</a>
        </div>
        <div className="mt-12 flex items-center justify-center gap-8 text-[12px] font-mono text-white/45 reveal">
          <span>● 1.200+ aktif acente</span>
          <span>● 30+ sigorta şirketi</span>
          <span>● 4.9/5 memnuniyet</span>
        </div>
      </div>
    </section>
  );
}
