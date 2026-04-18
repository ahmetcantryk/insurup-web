export default function SpecialCta() {
  return (
    <section className="relative py-20" style={{ background: "#FAFAF9" }}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="relative overflow-hidden rounded-[22px] p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8 reveal" style={{ background: "linear-gradient(135deg,#0A0F2C 0%,#1A2247 45%,#4C6EF5 100%)", color: "white" }}>
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
          <div className="absolute pointer-events-none" style={{ width: 360, height: 360, right: -80, top: -140, background: "radial-gradient(circle,#9B6BF0,transparent 60%)", filter: "blur(30px)", opacity: 0.55 }}></div>
          <div className="absolute pointer-events-none" style={{ width: 320, height: 320, left: -60, bottom: -160, background: "radial-gradient(circle,#14B8A6,transparent 60%)", filter: "blur(30px)", opacity: 0.4 }}></div>

          <div className="relative flex-1">
            <div className="eyebrow text-white/60 mb-3">ÖZEL HİZMET</div>
            <h3 className="display text-[32px] md:text-[40px] leading-[1.1] max-w-[560px]">Büyük ölçekli operasyonlar için size özel çözümler.</h3>
            <p className="mt-4 text-white/70 text-[15px] leading-[1.55] max-w-[560px]">
              Özel entegrasyonlar, SLA taahhütleri ve kurumsal ölçekte ihtiyaçlar için ekibimizle konuşun. Acente operasyonunuzu analiz edelim, size en uygun teklifi hazırlayalım.
            </p>
          </div>
          <a
            href="#iletisim"
            className="relative shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-medium btn-primary text-[14.5px]"
          >
            İletişime Geç
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
