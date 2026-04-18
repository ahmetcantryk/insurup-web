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
          <a href="/crm" className="lg:col-span-2 card-dark hover-lift p-8 relative overflow-hidden group" style={{ minHeight: 460 }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2"><span className="chip chip-volt">01 · CRM</span></div>
              <svg className="opacity-40 group-hover:opacity-90 transition" width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5"/></svg>
            </div>
            <h3 className="display text-[38px] mt-6 max-w-[480px]">Tüm sigorta operasyonun tek ekranda.</h3>
            <p className="text-white/55 text-[15px] mt-3 max-w-[520px]">Teklif · Poliçe · Müşteri · Yenileme — hepsi gerçek zamanlı.</p>
            <div className="absolute right-6 bottom-6 left-6 md:left-auto md:w-[560px] card-dark overflow-hidden" style={{ background: "#0E1430" }}>
              <div className="win-bar"><span></span><span></span><span></span></div>
              <div className="p-4">
                <div className="grid grid-cols-4 gap-2 mb-3">
                  <div className="p-2 rounded-md" style={{ background: "rgba(110,139,255,.08)", border: "1px solid rgba(110,139,255,.2)" }}>
                    <div className="text-[10px] text-white/50 font-mono">BUGÜN</div>
                    <div className="text-[18px] font-semibold tnum">47 <span className="text-[11px] text-white/50 font-normal">teklif</span></div>
                  </div>
                  <div className="p-2 rounded-md border border-white/5"><div className="text-[10px] text-white/50 font-mono">POLİÇE</div><div className="text-[18px] font-semibold tnum">18</div></div>
                  <div className="p-2 rounded-md border border-white/5"><div className="text-[10px] text-white/50 font-mono">YENİLEME</div><div className="text-[18px] font-semibold tnum">12</div></div>
                  <div className="p-2 rounded-md border border-white/5"><div className="text-[10px] text-white/50 font-mono">CIRO</div><div className="text-[18px] font-semibold tnum">₺84K</div></div>
                </div>
                <div className="space-y-1.5 text-[11.5px]">
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md" style={{ background: "rgba(255,255,255,.02)" }}>
                    <span className="w-1 h-1 rounded-full" style={{ background: "#4FD1C5" }}></span>
                    <span className="text-white/85">Mehmet Y. · Kasko · Anadolu</span>
                    <span className="ml-auto font-mono text-white/50 tnum">₺4.280</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md" style={{ background: "rgba(255,255,255,.02)" }}>
                    <span className="w-1 h-1 rounded-full" style={{ background: "#4FD1C5" }}></span>
                    <span className="text-white/85">Ayşe K. · DASK · AXA</span>
                    <span className="ml-auto font-mono text-white/50 tnum">₺312</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md" style={{ background: "rgba(255,255,255,.02)" }}>
                    <span className="w-1 h-1 rounded-full" style={{ background: "#7C9BFF" }}></span>
                    <span className="text-white/85">Ali D. · Trafik · HDI</span>
                    <span className="ml-auto font-mono text-white/50 tnum">₺1.840</span>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <div className="grid grid-rows-2 gap-4">
            <a id="web" href="/web-satis" className="card-dark hover-lift p-7 relative overflow-hidden group" style={{ minHeight: 222 }}>
              <div className="flex items-center justify-between">
                <span className="chip chip-dark" style={{ borderColor: "rgba(155,107,240,.4)", color: "#C9A6FF" }}>02 · WEB SATIŞ</span>
                <svg className="opacity-40 group-hover:opacity-90 transition" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5"/></svg>
              </div>
              <h3 className="display text-[24px] mt-4 max-w-[300px]">Kendi branded satış sitenle online teklif.</h3>
              <div className="absolute right-4 bottom-4 w-[220px] card-dark overflow-hidden" style={{ background: "#0E1430" }}>
                <div className="win-bar"><span></span><span></span><span></span>
                  <div className="ml-2 flex-1 bg-white/5 rounded text-[9px] text-white/50 font-mono px-2 py-0.5 truncate">acenteniz.insurup.co</div>
                </div>
                <div className="p-2.5">
                  <div className="text-[9px] text-white/40 font-mono mb-1">TRAFİK TEKLİFİ</div>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="text-[11px] text-white">2019 Ford Focus</div>
                    <div className="text-[14px] font-semibold tnum" style={{ color: "#4FD1C5" }}>₺ 1.840</div>
                  </div>
                  <div className="h-1 w-full rounded-full" style={{ background: "linear-gradient(90deg,#9B6BF0,#4FD1C5)" }}></div>
                  <div className="mt-1.5 text-[9px] font-mono text-white/40">5 şirketten 12 teklif</div>
                </div>
              </div>
            </a>

            <a id="chat" href="/insurchat" className="card-dark hover-lift p-7 relative overflow-hidden group" style={{ minHeight: 222 }}>
              <div className="flex items-center justify-between">
                <span className="chip chip-green">03 · INSURCHAT</span>
                <svg className="opacity-40 group-hover:opacity-90 transition" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5"/></svg>
              </div>
              <h3 className="display text-[24px] mt-4 max-w-[300px]">WhatsApp üzerinden satış yap.</h3>
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
