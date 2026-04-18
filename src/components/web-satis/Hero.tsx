export default function Hero() {
  return (
    <section className="relative overflow-hidden grain" style={{ background: "#0A0F2C", color: "white", paddingTop: 104 }}>
      <div className="absolute inset-0 grid-bg opacity-60"></div>
      <div className="mesh-orb" style={{ width: 620, height: 620, left: -180, top: -120, background: "radial-gradient(circle,#9B6BF0,transparent 60%)" }}></div>
      <div className="mesh-orb" style={{ width: 520, height: 520, right: -120, top: 40, background: "radial-gradient(circle,#4FD1C5,transparent 60%)", opacity: .35 }}></div>

      <div className="relative max-w-[1280px] mx-auto px-6 pt-14 pb-24">
        <div className="flex items-center gap-2 text-[12px] font-mono text-white/45 reveal">
          <a href="/" className="hover:text-white">/</a>
          <span>·</span><span>ürünler</span><span>·</span>
          <span className="text-white/80">web satış platformu</span>
        </div>

        <div className="mt-8 grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
          <div className="reveal">
            <div className="chip chip-plum mb-6">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A6FF", boxShadow: "0 0 8px #B794F6" }}></span>
              ONLINE SİGORTA SATIŞ SİSTEMİ
            </div>
            <h1 className="display display-hero text-[72px] leading-[0.98] tracking-tight">
              Sigorta Web Satış Platformu
            </h1>
            <div className="mt-4 display text-[28px] md:text-[34px] leading-[1.1]" style={{ backgroundImage: "linear-gradient(90deg,#B794F6 0%,#4FD1C5 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              Kendi online satış siteniz — dakikalar içinde canlıda.
            </div>
            <p className="mt-7 text-white/65 text-[17px] leading-[1.6] max-w-[560px]">
              Şablon seçin, özelleştirin, yayına alın. Müşterileriniz 7/24 online teklif alsın, 3D Secure ile poliçeleştirsin.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#sablonlar" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium btn-primary">
                Şablonları Keşfet
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="#canli-ornek" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium btn-ghost-dark">Canlı Örnek Gör</a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-[12.5px] text-white/50 font-mono flex-wrap">
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4FD1C5" }}></span>4dk 32sn ort. kurulum</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ background: "#B794F6" }}></span>3D Secure</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ background: "#7C9BFF" }}></span>BDDK uyumlu</div>
            </div>
          </div>

          <div className="relative reveal" style={{ perspective: 1600 }}>
            {/* confetti dot pattern */}
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: "radial-gradient(#7C9BFF 1.2px, transparent 1.2px), radial-gradient(#B794F6 1.2px, transparent 1.2px), radial-gradient(#4FD1C5 1.2px, transparent 1.2px)",
              backgroundSize: "120px 120px, 180px 180px, 240px 240px",
              backgroundPosition: "0 0, 60px 60px, 30px 90px",
              opacity: .22,
            }}></div>

            {/* laptop */}
            <div className="relative" style={{ transform: "rotateY(-8deg) rotateX(4deg)" }}>
              <div className="card-dark overflow-hidden" style={{ background: "#0E1430", boxShadow: "0 60px 120px -40px rgba(155,107,240,.45), 0 0 0 1px rgba(255,255,255,.06)" }}>
                <div className="win-bar"><span></span><span></span><span></span>
                  <div className="ml-auto font-mono text-[10px] text-white/40">acenteniz.com.tr / kasko</div>
                </div>
                <div className="p-5" style={{ background: "linear-gradient(180deg,#0E1430,#0A0F2C)" }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-[13px] font-semibold tracking-tight">Yıldız Sigorta</div>
                    <div className="flex gap-3 text-[10.5px] text-white/55 font-mono">
                      <span>ANASAYFA</span><span>KASKO</span><span>TRAFİK</span><span>GİRİŞ</span>
                    </div>
                  </div>
                  <div className="rounded-xl p-5 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#1A2247,#2A3360)", border: "1px solid rgba(155,107,240,.2)" }}>
                    <div className="text-[10px] font-mono text-white/55 mb-2">HIZLI KASKO TEKLİFİ</div>
                    <div className="text-[22px] font-semibold tracking-tight mb-4">3 soruda fiyat al.</div>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="p-2.5 rounded-md" style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)" }}>
                        <div className="text-[9px] font-mono text-white/45">PLAKA</div>
                        <div className="text-[13px] font-semibold">34 ABC 123</div>
                      </div>
                      <div className="p-2.5 rounded-md" style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)" }}>
                        <div className="text-[9px] font-mono text-white/45">TC</div>
                        <div className="text-[13px] font-semibold tnum">••••••••123</div>
                      </div>
                    </div>
                    <button className="w-full py-2.5 rounded-lg font-medium text-[13px] btn-primary">Teklifleri Göster</button>
                  </div>
                  <div className="mt-3 space-y-1.5 text-[11px]">
                    {[
                      { k: "ANA", l: "Anadolu", p: "₺4.280", best: true },
                      { k: "AXA", l: "AXA", p: "₺4.710" },
                      { k: "HDI", l: "HDI", p: "₺4.920" },
                    ].map((r) => (
                      <div key={r.k} className="flex items-center gap-2 px-2 py-1.5 rounded-md" style={r.best ? { background: "rgba(79,209,197,.08)", border: "1px solid rgba(79,209,197,.3)" } : { background: "rgba(255,255,255,.02)" }}>
                        <span className="w-5 h-5 rounded text-[8px] font-mono flex items-center justify-center" style={{ background: "#0A0F2C", color: "white" }}>{r.k}</span>
                        <span className="text-white/85">{r.l}</span>
                        <span className="ml-auto font-mono tnum font-semibold" style={r.best ? { color: "#4FD1C5" } : { color: "rgba(255,255,255,.7)" }}>{r.p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* phone */}
            <div className="absolute -left-8 -bottom-10 rounded-[28px] p-2 float1 hidden md:block" style={{ background: "#0A0F2C", boxShadow: "0 30px 60px -20px rgba(0,0,0,.6)", width: 170 }}>
              <div className="rounded-[22px] overflow-hidden" style={{ background: "#0E1430" }}>
                <div className="px-3 py-2 flex items-center justify-between text-[8px] font-mono text-white/55">
                  <span>9:41</span>
                  <span>acenteniz.com.tr</span>
                </div>
                <div className="p-3">
                  <div className="text-[9px] font-mono text-white/45">KASKO</div>
                  <div className="text-[13px] font-semibold mt-0.5">3 soruda teklif</div>
                  <div className="mt-2 space-y-1.5">
                    <div className="h-6 rounded-md" style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)" }}></div>
                    <div className="h-6 rounded-md" style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)" }}></div>
                    <div className="h-7 rounded-md btn-primary"></div>
                  </div>
                  <div className="mt-3 space-y-1">
                    {["ANA","AXA","HDI"].map((k, i) => (
                      <div key={k} className="flex items-center gap-1.5 px-1.5 py-1 rounded" style={i === 0 ? { background: "rgba(79,209,197,.1)", border: "1px solid rgba(79,209,197,.3)" } : { background: "rgba(255,255,255,.04)" }}>
                        <span className="w-3.5 h-3.5 rounded text-[6px] font-mono flex items-center justify-center" style={{ background: "#0A0F2C", color: "white" }}>{k}</span>
                        <span className="text-[9px] text-white/80">{k === "ANA" ? "Anadolu" : k === "AXA" ? "AXA" : "HDI"}</span>
                        <span className="ml-auto font-mono text-[8.5px]" style={i === 0 ? { color: "#4FD1C5" } : { color: "rgba(255,255,255,.55)" }}>₺{i === 0 ? "4.280" : i === 1 ? "4.710" : "4.920"}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* domain badge */}
            <div className="absolute -right-6 top-6 card-dark p-3 float2" style={{ background: "rgba(14,20,48,.96)", boxShadow: "0 20px 40px -10px rgba(0,0,0,.5)" }}>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "rgba(79,209,197,.14)", border: "1px solid rgba(79,209,197,.35)" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4FD1C5" strokeWidth="2"><path d="M12 2 L4 6 V12 C4 17 7.5 21 12 22 C16.5 21 20 17 20 12 V6 Z"/></svg>
                </span>
                <div>
                  <div className="font-mono text-[9.5px] text-white/45">DOMAIN</div>
                  <div className="font-mono text-[12px] text-white/90">.acenteniz.com.tr</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
