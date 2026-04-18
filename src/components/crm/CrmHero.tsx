import Link from "next/link";

export default function CrmHero() {
  return (
    <section className="relative overflow-hidden grain" style={{ background: "#0A0F2C", color: "white", paddingTop: 104 }}>
      <div className="absolute inset-0 grid-bg opacity-60"></div>
      <div className="mesh-orb" style={{ width: 620, height: 620, left: -180, top: -120, background: "radial-gradient(circle,#4C6EF5,transparent 60%)" }}></div>
      <div className="mesh-orb" style={{ width: 520, height: 520, right: -120, top: 40, background: "radial-gradient(circle,#6E8BFF,transparent 60%)", opacity: .4 }}></div>

      <div className="relative max-w-[1280px] mx-auto px-6 pt-14 pb-24">
        <div className="flex items-center gap-2 text-[12px] font-mono text-white/45 reveal">
          <Link href="/" className="hover:text-white">/</Link>
          <span>·</span>
          <span>ürünler</span>
          <span>·</span>
          <span className="text-white/80">insurup crm</span>
        </div>

        <div className="mt-8 grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
          <div className="reveal">
            <div className="chip chip-volt mb-6">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#7C9BFF", boxShadow: "0 0 8px #7C9BFF" }}></span>
              01 · INSURUP CRM
            </div>
            <h1 className="display display-hero text-[76px] leading-[0.96] tracking-tight">
              Tüm sigorta operasyonun{" "}
              <span style={{ backgroundImage: "linear-gradient(90deg,#7C9BFF 0%,#B794F6 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>tek ekranda.</span>
            </h1>
            <p className="mt-7 text-white/65 text-[18px] leading-[1.6] max-w-[560px]">
              Teklif almaktan poliçe kesmeye, müşteri takibinden yenilemeye — kopuk Excel&apos;lerden, 8 farklı şirket portalından, unutulan yenileme tarihlerinden kurtul.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/#iletisim" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium btn-primary">
                Ücretsiz Demo Talep Et
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <a href="#ozellikler" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium btn-ghost-dark">Özellikleri İncele</a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-[460px]">
              <div><div className="display text-[32px] tnum">1.2s</div><div className="text-[11px] font-mono text-white/45 mt-1">PARALEL TEKLİF</div></div>
              <div><div className="display text-[32px] tnum">8</div><div className="text-[11px] font-mono text-white/45 mt-1">ŞİRKET EŞZAMAN</div></div>
              <div><div className="display text-[32px] tnum">360°</div><div className="text-[11px] font-mono text-white/45 mt-1">MÜŞTERİ GÖRÜNÜMÜ</div></div>
            </div>
          </div>

          <div className="relative reveal">
            <div className="card-dark overflow-hidden" style={{ background: "#0E1430", boxShadow: "0 60px 120px -40px rgba(76,110,245,.45), 0 0 0 1px rgba(255,255,255,.06)" }}>
              <div className="win-bar"><span></span><span></span><span></span>
                <div className="ml-auto font-mono text-[10px] text-white/40">app.insurup.co / crm</div>
                <div className="ml-3 flex items-center gap-1"><span className="kbd">⌘</span><span className="kbd">K</span></div>
              </div>
              <div className="grid grid-cols-[180px_1fr]">
                <div className="p-4 border-r border-white/5 text-[12px]">
                  <div className="font-mono text-[10px] text-white/35 mb-3 tracking-wider">OPERASYON</div>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-white/5 text-white"><span className="w-1 h-1 rounded-full" style={{ background: "#7C9BFF" }}></span> Teklifler <span className="ml-auto font-mono text-[10px] text-white/50">248</span></li>
                    <li className="flex items-center gap-2 px-2 py-1.5 rounded-md text-white/60">Poliçeler <span className="ml-auto font-mono text-[10px] text-white/40">1.4k</span></li>
                    <li className="flex items-center gap-2 px-2 py-1.5 rounded-md text-white/60">Müşteriler</li>
                    <li className="flex items-center gap-2 px-2 py-1.5 rounded-md text-white/60">Yenilemeler <span className="ml-auto font-mono text-[10px] text-white/40">12</span></li>
                    <li className="flex items-center gap-2 px-2 py-1.5 rounded-md text-white/60">Raporlar</li>
                    <li className="flex items-center gap-2 px-2 py-1.5 rounded-md text-white/60">Ekip</li>
                  </ul>
                  <div className="font-mono text-[10px] text-white/35 mt-5 mb-3 tracking-wider">BRANŞLAR</div>
                  <div className="flex flex-wrap gap-1">
                    {["Kasko","Trafik","DASK","Konut","TSS","İMM"].map(b => (
                      <span key={b} className="chip chip-dark text-[10px] px-1.5 py-0.5">{b}</span>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-[12px] text-white/55 font-mono">MÜŞTERİ · KASKO TEKLİFİ</div>
                      <div className="text-[18px] font-semibold tracking-tight mt-0.5">Mehmet Yıldız · 2018 Renault Clio</div>
                    </div>
                    <span className="chip chip-green">● CANLI</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 rounded-lg" style={{ background: "rgba(110,139,255,.07)", border: "1px solid rgba(110,139,255,.3)" }}>
                      <div className="w-10 h-10 rounded-md flex items-center justify-center font-mono text-[10px] font-semibold" style={{ background: "#0A0F2C", color: "white" }}>ANA</div>
                      <div className="flex-1">
                        <div className="text-[13px] font-medium">Anadolu Sigorta</div>
                        <div className="text-[10.5px] text-white/50 font-mono">Değer kaybı · Asistans · IMM 2M</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[17px] font-semibold tnum">₺ 4.280</div>
                        <div className="text-[9.5px] font-mono" style={{ color: "#4FD1C5" }}>EN İYİ FİYAT</div>
                      </div>
                    </div>
                    {[
                      { k: "AXA", l: "AXA Sigorta", e: "Değer kaybı · IMM 1M", p: "₺ 4.710" },
                      { k: "HDI", l: "HDI Sigorta", e: "Asistans · IMM 2M", p: "₺ 4.920" },
                      { k: "ALL", l: "Allianz", e: "Premium paket", p: "₺ 5.140" },
                    ].map((r) => (
                      <div key={r.k} className="flex items-center gap-3 p-3 rounded-lg border border-white/5">
                        <div className="w-10 h-10 rounded-md flex items-center justify-center font-mono text-[10px] font-semibold" style={{ background: "rgba(255,255,255,.06)", color: "white" }}>{r.k}</div>
                        <div className="flex-1">
                          <div className="text-[13px] font-medium">{r.l}</div>
                          <div className="text-[10.5px] text-white/50 font-mono">{r.e}</div>
                        </div>
                        <div className="text-[17px] font-semibold tnum">{r.p}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-white/45">
                    <span>8 şirket · 23 teklif</span><span>1.2s · paralel</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-10 -bottom-8 card-dark p-4 w-[260px] float1" style={{ background: "rgba(14,20,48,.96)", boxShadow: "0 20px 40px -10px rgba(0,0,0,.6)" }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="chip chip-volt text-[10px]">⟲ YENİLEME</span>
                <span className="ml-auto font-mono text-[10px] text-white/40">5 gün sonra</span>
              </div>
              <div className="text-[12.5px] text-white/85">Ayşe Kara · DASK</div>
              <div className="text-[10.5px] text-white/45 font-mono mt-0.5">Otomatik WhatsApp + SMS planlandı</div>
              <div className="mt-3 grid grid-cols-3 gap-1">
                <div className="h-1 rounded-full" style={{ background: "#4FD1C5" }}></div>
                <div className="h-1 rounded-full" style={{ background: "#4FD1C5" }}></div>
                <div className="h-1 rounded-full bg-white/15"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
