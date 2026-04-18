const COMPANIES = [
  "Anadolu Sigorta", "AXA", "Allianz", "HDI", "Türkiye Sigorta", "Ak Sigorta",
  "Mapfre", "Ray Sigorta", "Sompo", "Zurich", "Quick", "Türk Nippon",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden grain" style={{ background: "#0A0F2C", color: "white", paddingTop: 104 }}>
      <div className="absolute inset-0 grid-bg opacity-60"></div>
      <div className="mesh-orb" style={{ width: 620, height: 620, left: -180, top: -120, background: "radial-gradient(circle,#4C6EF5,transparent 60%)" }}></div>
      <div className="mesh-orb" style={{ width: 520, height: 520, right: -120, top: 40, background: "radial-gradient(circle,#9B6BF0,transparent 60%)" }}></div>
      <div className="mesh-orb" style={{ width: 420, height: 420, left: "40%", bottom: -180, background: "radial-gradient(circle,#4FD1C5,transparent 60%)", opacity: .35 }}></div>

      <div className="relative max-w-[1280px] mx-auto px-6 pt-16 pb-28 grid lg:grid-cols-[1.05fr_1fr] gap-14 items-center">
        <div className="reveal">
          <div className="chip chip-volt mb-6">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#7C9BFF", boxShadow: "0 0 8px #7C9BFF" }}></span>
            SIGORTA ACENTELERİ İÇİN · 2026
          </div>
          <h1 className="display display-hero text-[86px] leading-[0.96] tracking-tightest">
            Sigorta acentenizin <br />
            <span style={{ backgroundImage: "linear-gradient(90deg,#7C9BFF 0%,#B794F6 60%,#4FD1C5 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>büyüme hızını</span>
            <br /> 3 kat artırın.
          </h1>
          <p className="mt-7 text-white/65 text-[18px] leading-[1.6] max-w-[560px]">
            Tekliften poliçeye, müşteri yönetiminden satış süreçlerine. 30+ sigorta şirketi entegrasyonu ile tek platformda.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#iletisim" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium btn-primary">
              Ücretsiz Demo Talep Et
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#urunler" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium btn-ghost-dark">Ürünleri Keşfet</a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-[12.5px] text-white/45 font-mono">
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4FD1C5" }}></span>KVKK uyumlu</div>
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4FD1C5" }}></span>ISO 27001</div>
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4FD1C5" }}></span>%99.9 uptime</div>
          </div>
        </div>

        <div className="relative reveal" style={{ perspective: 1600 }}>
          <div className="relative" style={{ transform: "rotateY(-10deg) rotateX(6deg) rotateZ(-1deg)" }}>
            <div className="card-dark overflow-hidden" style={{ background: "#0E1430", boxShadow: "0 60px 120px -40px rgba(76,110,245,.45), 0 0 0 1px rgba(255,255,255,.06)" }}>
              <div className="win-bar"><span></span><span></span><span></span>
                <div className="ml-auto font-mono text-[10px] text-white/40">app.insurup.co / panel</div>
              </div>
              <div className="grid grid-cols-[180px_1fr] min-h-[380px]">
                <div className="p-4 border-r border-white/5 text-[12px]">
                  <div className="font-mono text-[10px] text-white/35 mb-3 tracking-wider">OPERASYON</div>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-white/5 text-white"><span className="w-1 h-1 rounded-full" style={{ background: "#7C9BFF" }}></span> Teklifler <span className="ml-auto font-mono text-[10px] text-white/50">248</span></li>
                    <li className="flex items-center gap-2 px-2 py-1.5 rounded-md text-white/60">Poliçeler <span className="ml-auto font-mono text-[10px] text-white/40">1.4k</span></li>
                    <li className="flex items-center gap-2 px-2 py-1.5 rounded-md text-white/60">Müşteriler</li>
                    <li className="flex items-center gap-2 px-2 py-1.5 rounded-md text-white/60">Yenilemeler <span className="ml-auto font-mono text-[10px] text-white/40">12</span></li>
                    <li className="flex items-center gap-2 px-2 py-1.5 rounded-md text-white/60">Raporlar</li>
                  </ul>
                  <div className="font-mono text-[10px] text-white/35 mt-5 mb-3 tracking-wider">BRANŞLAR</div>
                  <div className="flex flex-wrap gap-1">
                    {["Kasko","Trafik","DASK","Konut","TSS"].map(b => (
                      <span key={b} className="chip chip-dark text-[10px] px-1.5 py-0.5">{b}</span>
                    ))}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-[13px] text-white/55">Bu hafta</div>
                      <div className="text-[22px] font-semibold tracking-tight tnum">₺ 2.847.200 <span className="text-[12px] ml-2" style={{ color: "#4FD1C5" }}>+34%</span></div>
                    </div>
                    <div className="flex gap-1">
                      <span className="chip chip-dark text-[10px]">7G</span>
                      <span className="chip chip-volt text-[10px]">30G</span>
                      <span className="chip chip-dark text-[10px]">90G</span>
                    </div>
                  </div>
                  <div className="relative h-[110px] rounded-lg border border-white/5 p-2" style={{ background: "rgba(255,255,255,.02)" }}>
                    <svg viewBox="0 0 300 90" className="w-full h-full spark" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#6E8BFF" stopOpacity=".55"/>
                          <stop offset="100%" stopColor="#6E8BFF" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      <path className="fill" d="M0,70 L20,60 40,62 60,48 80,52 100,40 120,44 140,30 160,36 180,22 200,28 220,18 240,24 260,14 280,20 300,10 L300,90 L0,90 Z"/>
                      <path d="M0,70 L20,60 40,62 60,48 80,52 100,40 120,44 140,30 160,36 180,22 200,28 220,18 240,24 260,14 280,20 300,10"/>
                    </svg>
                  </div>
                  <div className="mt-3 space-y-1.5">
                    <div className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5">
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono" style={{ background: "rgba(110,139,255,.2)", color: "#AFBFFF" }}>MY</span>
                      <div className="text-[12px] text-white/90">Mehmet Yıldız · Kasko</div>
                      <span className="ml-auto chip chip-green text-[10px]">KESİLDİ</span>
                      <span className="font-mono text-[11px] text-white/50 tnum w-16 text-right">₺ 4.280</span>
                    </div>
                    <div className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5">
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono" style={{ background: "rgba(155,107,240,.2)", color: "#C9A6FF" }}>AK</span>
                      <div className="text-[12px] text-white/90">Ayşe Kara · DASK</div>
                      <span className="ml-auto chip chip-dark text-[10px]">TEKLİF</span>
                      <span className="font-mono text-[11px] text-white/50 tnum w-16 text-right">₺ 312</span>
                    </div>
                    <div className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5">
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono" style={{ background: "rgba(79,209,197,.2)", color: "#4FD1C5" }}>HÖ</span>
                      <div className="text-[12px] text-white/90">Hüseyin Öz · Konut</div>
                      <span className="ml-auto chip chip-volt text-[10px]">YENİLEME</span>
                      <span className="font-mono text-[11px] text-white/50 tnum w-16 text-right">₺ 1.840</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-14 top-20 card-dark p-4 w-[230px] float1" style={{ background: "rgba(14,20,48,.96)", boxShadow: "0 20px 40px -10px rgba(0,0,0,.5)" }}>
              <div className="flex items-center gap-2 mb-2"><span className="chip chip-green text-[10px]">● CANLI TEKLİF</span></div>
              <div className="text-[12.5px] text-white/80">2018 Renault Clio · Kasko</div>
              <div className="mt-2 flex items-end gap-2">
                <div className="text-[24px] font-semibold tnum tracking-tight">₺ 4.280</div>
                <div className="text-[11px] mb-1.5" style={{ color: "#4FD1C5" }}>en iyi fiyat</div>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-1">
                <div className="h-1.5 rounded-full" style={{ background: "#4FD1C5" }}></div>
                <div className="h-1.5 rounded-full bg-white/20"></div>
                <div className="h-1.5 rounded-full bg-white/10"></div>
              </div>
              <div className="mt-2 font-mono text-[10px] text-white/40">8 şirketten 23 teklif · 1.2s</div>
            </div>

            <div className="absolute -right-10 bottom-10 card-dark p-3.5 w-[240px] float2" style={{ background: "rgba(14,20,48,.96)", boxShadow: "0 20px 40px -10px rgba(0,0,0,.5)" }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg,#4FD1C5,#6E8BFF)" }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1v8M1 5h8" stroke="white" strokeWidth="1.4"/></svg>
                </span>
                <span className="text-[11px] font-mono text-white/60">INSURCHAT · WHATSAPP</span>
              </div>
              <div className="text-[12.5px] text-white/85 leading-[1.5]">
                Merhaba Mehmet Bey, aracınız için 3 farklı kasko teklifi hazırladım <span className="dot"></span><span className="dot"></span><span className="dot"></span>
              </div>
              <div className="mt-2 flex gap-1.5">
                <span className="chip chip-dark text-[10px]">Anadolu</span>
                <span className="chip chip-dark text-[10px]">AXA</span>
                <span className="chip chip-dark text-[10px]">HDI</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/5 pt-8 pb-10">
        <div className="max-w-[1280px] mx-auto px-6 mb-5 flex items-center justify-between">
          <div className="eyebrow text-white/50">30+ Sigorta Şirketi ile Entegre</div>
          <a href="#entegrasyonlar" className="text-[12px] text-white/50 hover:text-white font-mono">tümü →</a>
        </div>
        <div className="marquee overflow-hidden">
          <div className="marq-track">
            {[...COMPANIES, ...COMPANIES].map((c, i) => (
              <span key={i} className="logo-chip font-mono text-white/80 text-[22px] whitespace-nowrap tracking-tight">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
