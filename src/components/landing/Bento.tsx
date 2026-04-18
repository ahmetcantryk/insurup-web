export default function Bento() {
  return (
    <section id="urunler" className="relative py-28 grain overflow-hidden" style={{ background: "#06081A", color: "white" }}>
      <div className="absolute inset-0 grid-bg opacity-40"></div>
      <div className="mesh-orb" style={{ width: 500, height: 500, right: -100, top: "10%", background: "radial-gradient(circle,#4C6EF5,transparent 60%)", opacity: .3 }}></div>
      <div className="relative max-w-[1280px] mx-auto px-6">
        <div className="flex items-end justify-between mb-12 reveal">
          <div>
            <div className="eyebrow text-white/50 mb-4">ÜRÜNLER</div>
            <h2 className="display text-[56px] md:text-[72px] max-w-[800px]">Tek platform,<br/> üç güçlü çözüm.</h2>
          </div>
          <p className="hidden md:block max-w-[320px] text-white/55 text-[15px] leading-[1.6] pb-3">
            CRM, web satış ve AI asistan — ayrı ayrı kullan ya da birbirine bağla. Hepsi tek veritabanında konuşur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* CRM — 2 cols tall card, full-width dashboard at bottom */}
          <a href="/crm" className="lg:col-span-2 card-dark hover-lift p-8 relative overflow-hidden group flex flex-col" style={{ minHeight: 460 }}>
            <div className="flex items-center justify-between">
              <span className="chip chip-volt">01 · CRM</span>
              <svg className="opacity-40 group-hover:opacity-90 transition" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5"/></svg>
            </div>
            <h3 className="display text-[28px] md:text-[32px] mt-4 max-w-[460px] leading-[1.1]">Tüm sigorta operasyonun tek ekranda.</h3>
            <p className="text-white/55 text-[14px] mt-2.5 max-w-[440px]">Teklif · Poliçe · Müşteri · Yenileme — hepsi gerçek zamanlı.</p>

            {/* Full-width dashboard — bottom anchored, fits card width */}
            <div className="absolute left-6 right-6 bottom-6 card-dark overflow-hidden" style={{ background: "#0E1430" }}>
              <div className="win-bar"><span></span><span></span><span></span>
                <div className="ml-auto text-[9.5px] font-mono text-white/40">app.insurup.co / dashboard</div>
              </div>
              <div className="p-4">
                {/* Stat pills row */}
                <div className="grid grid-cols-4 gap-2 mb-3">
                  <div className="p-2.5 rounded-md" style={{ background: "rgba(110,139,255,.08)", border: "1px solid rgba(110,139,255,.2)" }}>
                    <div className="text-[9px] text-white/50 font-mono tracking-wider">BU HAFTA</div>
                    <div className="text-[15px] font-semibold tnum mt-0.5">₺ 2.84M</div>
                    <div className="text-[9.5px] font-mono" style={{ color: "#4FD1C5" }}>+34%</div>
                  </div>
                  <div className="p-2.5 rounded-md border border-white/5">
                    <div className="text-[9px] text-white/50 font-mono tracking-wider">POLİÇE</div>
                    <div className="text-[15px] font-semibold tnum mt-0.5">18</div>
                    <div className="text-[9.5px] font-mono text-white/40">bugün</div>
                  </div>
                  <div className="p-2.5 rounded-md border border-white/5">
                    <div className="text-[9px] text-white/50 font-mono tracking-wider">YENİLEME</div>
                    <div className="text-[15px] font-semibold tnum mt-0.5">12</div>
                    <div className="text-[9.5px] font-mono text-white/40">7 gün</div>
                  </div>
                  <div className="p-2.5 rounded-md border border-white/5">
                    <div className="text-[9px] text-white/50 font-mono tracking-wider">TEKLİF</div>
                    <div className="text-[15px] font-semibold tnum mt-0.5">47</div>
                    <div className="text-[9.5px] font-mono" style={{ color: "#4FD1C5" }}>+12</div>
                  </div>
                </div>

                {/* Activity feed */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md" style={{ background: "rgba(255,255,255,.03)" }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4FD1C5" }}></span>
                    <span className="text-[11.5px] text-white/85">Mehmet Yıldız · Kasko · Anadolu</span>
                    <span className="ml-auto chip chip-green" style={{ fontSize: 9, padding: "1px 6px" }}>KESİLDİ</span>
                    <span className="font-mono text-[11px] text-white/55 tnum w-16 text-right">₺ 4.280</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md" style={{ background: "rgba(255,255,255,.03)" }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#7C9BFF" }}></span>
                    <span className="text-[11.5px] text-white/85">Ayşe Kara · DASK · AXA</span>
                    <span className="ml-auto chip chip-dark" style={{ fontSize: 9, padding: "1px 6px" }}>TEKLİF</span>
                    <span className="font-mono text-[11px] text-white/55 tnum w-16 text-right">₺ 312</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md" style={{ background: "rgba(255,255,255,.03)" }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#B794F6" }}></span>
                    <span className="text-[11.5px] text-white/85">Ali Demir · Trafik · HDI</span>
                    <span className="ml-auto chip chip-volt" style={{ fontSize: 9, padding: "1px 6px" }}>YENİLEME</span>
                    <span className="font-mono text-[11px] text-white/55 tnum w-16 text-right">₺ 1.840</span>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <div className="grid grid-rows-2 gap-4">
            {/* Web Satış — button instead of mockup */}
            <a id="web" href="/web-satis" className="card-dark hover-lift p-7 relative overflow-hidden group flex flex-col" style={{ minHeight: 222 }}>
              <div className="flex items-center justify-between">
                <span className="chip chip-plum">02 · WEB SATIŞ</span>
                <svg className="opacity-40 group-hover:opacity-90 transition" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5"/></svg>
              </div>
              <h3 className="display text-[22px] mt-4 max-w-[280px] leading-[1.15]">Kendi branded satış sitenle online teklif.</h3>
              <p className="text-white/55 text-[13px] mt-2 max-w-[280px] leading-[1.5]">Şablon seç, özelleştir, yayına al. Müşterilerin 7/24 online teklif alsın.</p>

              <span className="mt-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-medium text-[13px] w-fit" style={{ background: "rgba(155,107,240,.14)", color: "#C9A6FF", border: "1px solid rgba(155,107,240,.4)" }}>
                Şablonları Keşfet
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </a>

            {/* InsurChat — keep as-is, same simple style */}
            <a id="chat" href="/insurchat" className="card-dark hover-lift p-7 relative overflow-hidden group" style={{ minHeight: 222 }}>
              <div className="flex items-center justify-between">
                <span className="chip chip-green">03 · INSURCHAT</span>
                <svg className="opacity-40 group-hover:opacity-90 transition" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5"/></svg>
              </div>
              <h3 className="display text-[22px] mt-4 max-w-[280px] leading-[1.15]">WhatsApp üzerinden satış yap.</h3>
              <div className="absolute right-4 bottom-4 w-[220px] space-y-1.5">
                <div className="text-[11px] py-1.5 px-2.5 rounded-xl rounded-bl-sm text-ink-900" style={{ background: "#E7E5E0", maxWidth: "78%" }}>Kasko fiyatı?</div>
                <div className="ml-auto text-[11px] py-1.5 px-2.5 rounded-xl rounded-br-sm text-white" style={{ background: "#25D366", maxWidth: "88%" }}>
                  Plakayı gönderir misin? <span className="dot" style={{ background: "white" }}></span><span className="dot" style={{ background: "white" }}></span><span className="dot" style={{ background: "white" }}></span>
                </div>
                <div className="ml-auto text-[11px] py-1.5 px-2.5 rounded-xl rounded-br-sm text-white" style={{ background: "#25D366", maxWidth: "92%" }}>
                  8 şirketten teklif hazır 🔗
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
