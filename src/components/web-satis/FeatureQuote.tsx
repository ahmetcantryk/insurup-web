const CHECK = (
  <span className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(155,107,240,.14)" }}>
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 5 L4 8 L9 2" stroke="#9B6BF0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </span>
);

export default function FeatureQuote() {
  return (
    <section className="relative py-28" style={{ background: "#FAFAF9" }}>
      <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal float1">
          <div className="card-light overflow-hidden" style={{ boxShadow: "0 40px 80px -30px rgba(10,15,44,.25)" }}>
            <div className="flex items-center gap-1.5 px-4 py-3 border-b" style={{ borderColor: "rgba(10,15,44,.08)" }}>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }}></span>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEBC2E" }}></span>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }}></span>
              <span className="ml-3 text-[11px] font-mono text-ink-900/40">acenteniz.com.tr · teklif</span>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3 rounded-lg bg-white border" style={{ borderColor: "rgba(10,15,44,.08)" }}>
                  <div className="text-[10px] font-mono text-ink-900/40">TC KİMLİK</div>
                  <div className="text-[14px] font-mono font-semibold tnum mt-0.5">1234••••••123</div>
                </div>
                <div className="p-3 rounded-lg bg-white border" style={{ borderColor: "rgba(10,15,44,.08)" }}>
                  <div className="text-[10px] font-mono text-ink-900/40">PLAKA</div>
                  <div className="text-[14px] font-mono font-semibold mt-0.5">34 ABC 123</div>
                </div>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="text-[12px] font-mono text-ink-900/50">6 branş · 30+ şirket · 300+ ürün</div>
                <div className="chip" style={{ background: "rgba(79,209,197,.12)", color: "#0F8E7F", border: "1px solid rgba(79,209,197,.3)" }}>● 1.2s</div>
              </div>
              <div className="space-y-1.5">
                {[
                  { k: "ANA", label: "Anadolu Sigorta", badge: "EN İYİ FİYAT", price: "₺ 4.280", best: true },
                  { k: "AXA", label: "AXA Sigorta", price: "₺ 4.710" },
                  { k: "HDI", label: "HDI Sigorta", price: "₺ 4.920" },
                  { k: "ALL", label: "Allianz", price: "₺ 5.140" },
                  { k: "MAP", label: "Mapfre", price: "₺ 5.290" },
                ].map((r) => (
                  <div key={r.k} className="flex items-center gap-3 p-2.5 rounded-lg" style={r.best ? { background: "rgba(155,107,240,.05)", border: "1px solid rgba(155,107,240,.3)" } : { border: "1px solid rgba(10,15,44,.08)" }}>
                    <div className="w-8 h-8 rounded-md flex items-center justify-center font-mono text-[9px] font-semibold" style={r.best ? { background: "#9B6BF0", color: "white" } : { background: "#F2F1EE", color: "#0A0F2C" }}>{r.k}</div>
                    <div className="flex-1 text-[12.5px] font-medium">{r.label}</div>
                    {r.badge && <span className="chip chip-plum" style={{ fontSize: 9, padding: "2px 7px" }}>{r.badge}</span>}
                    <div className="text-[14px] font-semibold tnum">{r.price}</div>
                    <button className={`px-2.5 py-1 rounded-md text-[10.5px] font-semibold ${r.best ? "btn-primary text-white" : ""}`} style={!r.best ? { background: "#FAFAF9", border: "1px solid rgba(10,15,44,.1)" } : undefined}>Seç</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="reveal">
          <div className="eyebrow mb-4" style={{ color: "#9B6BF0" }}>KARŞILAŞTIRMALI TEKLİF</div>
          <h2 className="display text-[48px] md:text-[58px] text-ink-900">Anında Teklif.</h2>
          <p className="mt-5 text-ink-900/60 text-[17px] leading-[1.6] max-w-[540px]">
            Müşterilerinize 6 branşta 30+ şirketin 300+ sigorta ürünü için anında online teklif sunun.
          </p>
          <ul className="mt-8 space-y-3.5 text-[15.5px]">
            <li className="flex gap-3">{CHECK} Online saniyeler içinde teklif.</li>
            <li className="flex gap-3">{CHECK} 300+ ürün, 30+ şirket.</li>
            <li className="flex gap-3">{CHECK} Offline talep toplama.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
