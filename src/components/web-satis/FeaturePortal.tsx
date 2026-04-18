const CHECK = (
  <span className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(76,110,245,.12)" }}>
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 5 L4 8 L9 2" stroke="#4C6EF5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </span>
);

export default function FeaturePortal() {
  return (
    <section className="relative py-28" style={{ background: "#F2F1EE" }}>
      <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal order-2 lg:order-1">
          <div className="eyebrow mb-4" style={{ color: "#4C6EF5" }}>SİGORTALI GİRİŞ</div>
          <h2 className="display text-[48px] md:text-[58px] text-ink-900">Müşteri Portalı.</h2>
          <p className="mt-5 text-ink-900/60 text-[17px] leading-[1.6] max-w-[540px]">
            Müşterilerinize poliçelerine erişebilecekleri, 7/24 her cihazdan görebilecekleri kişiselleştirilmiş bir portal sunun.
          </p>
          <ul className="mt-8 space-y-3.5 text-[15.5px]">
            <li className="flex gap-3">{CHECK} 7/24 poliçe erişimi.</li>
            <li className="flex gap-3">{CHECK} Kişisel bilgi yönetimi.</li>
            <li className="flex gap-3">{CHECK} Sigorta geçmişi görüntüleme.</li>
          </ul>
        </div>

        <div className="reveal order-1 lg:order-2 float2">
          <div className="card-light overflow-hidden" style={{ boxShadow: "0 40px 80px -30px rgba(10,15,44,.25)" }}>
            <div className="flex items-center gap-1.5 px-4 py-3 border-b" style={{ borderColor: "rgba(10,15,44,.08)" }}>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }}></span>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEBC2E" }}></span>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }}></span>
              <span className="ml-3 text-[11px] font-mono text-ink-900/40">acenteniz.com.tr / policelerim</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6 pb-5 border-b" style={{ borderColor: "rgba(10,15,44,.08)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-mono text-[15px]" style={{ background: "linear-gradient(135deg,#6E8BFF,#9B6BF0)", color: "white" }}>AY</div>
                <div>
                  <div className="text-[11px] font-mono text-ink-900/50">HOŞ GELDİNİZ</div>
                  <div className="text-[18px] font-semibold tracking-tight">Ahmet Bey</div>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-[18px] font-semibold tnum">4</div>
                  <div className="text-[10px] font-mono text-ink-900/50">AKTİF POLİÇE</div>
                </div>
              </div>
              <div className="text-[11px] font-mono text-ink-900/45 mb-3">POLİÇELERİM</div>
              <div className="space-y-2">
                {[
                  { k: "ANA", title: "Kasko · 2018 Renault Clio", sub: "34 ABC 123", exp: "Kal. 284 gün", color: "#0A0F2C" },
                  { k: "HDI", title: "Trafik · 2018 Renault Clio", sub: "34 ABC 123", exp: "Kal. 284 gün", color: "#0A0F2C" },
                  { k: "AXA", title: "DASK · Kadıköy Konut", sub: "Konut · 120m²", exp: "Yenilenir · 5 gün", warn: true, color: "#9B6BF0" },
                  { k: "ALL", title: "TSS · Bireysel", sub: "Premium paket", exp: "Kal. 180 gün", color: "#0A0F2C" },
                ].map((p) => (
                  <div key={p.k + p.title} className="flex items-center gap-3 p-3 rounded-lg border" style={p.warn ? { borderColor: "rgba(155,107,240,.3)", background: "rgba(155,107,240,.04)" } : { borderColor: "rgba(10,15,44,.08)" }}>
                    <div className="w-9 h-9 rounded-md flex items-center justify-center font-mono text-[10px] font-semibold" style={{ background: p.color, color: "white" }}>{p.k}</div>
                    <div className="flex-1">
                      <div className="text-[13px] font-medium">{p.title}</div>
                      <div className="text-[11px] font-mono text-ink-900/50">{p.sub}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[11px] font-mono" style={p.warn ? { color: "#9B6BF0" } : { color: "rgba(10,15,44,.55)" }}>{p.exp}</div>
                      <button className="mt-1 text-[11px] font-semibold" style={{ color: "#4C6EF5" }}>Detay →</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-[11px]">
                <button className="py-2 rounded-md font-medium" style={{ background: "rgba(76,110,245,.08)", color: "#4C6EF5", border: "1px solid rgba(76,110,245,.25)" }}>Yenile</button>
                <button className="py-2 rounded-md font-medium" style={{ background: "#FAFAF9", border: "1px solid rgba(10,15,44,.08)" }}>Hasar ihbarı</button>
                <button className="py-2 rounded-md font-medium" style={{ background: "#FAFAF9", border: "1px solid rgba(10,15,44,.08)" }}>Destek</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
