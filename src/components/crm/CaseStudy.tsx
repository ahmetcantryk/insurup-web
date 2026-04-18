export default function CaseStudy() {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: "#06081A", color: "white" }}>
      <div className="absolute inset-0 grid-bg opacity-40"></div>
      <div className="mesh-orb" style={{ width: 500, height: 500, right: -100, top: "10%", background: "radial-gradient(circle,#4C6EF5,transparent 60%)", opacity: .35 }}></div>
      <div className="relative max-w-[1280px] mx-auto px-6 grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
        <div className="reveal">
          <div className="eyebrow text-white/50 mb-4">VAKA ÇALIŞMASI</div>
          <h2 className="display text-[44px] md:text-[56px] leading-[1.02]">Yıldız Sigorta 12 ayda cirosunu 3 kat artırdı.</h2>
          <p className="mt-6 text-white/65 text-[16.5px] leading-[1.6] max-w-[520px]">
            Ankara&apos;da 4 şubeli, 9 kişilik bir acente. InsurUp CRM&apos;e geçmeden önce tüm teklifler Excel ve 8 farklı sigorta şirketinin portalı üzerinden manuel alınıyordu.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)" }}>
              <div className="display text-[32px] tnum" style={{ color: "#7C9BFF" }}>3<span className="text-[18px]">x</span></div>
              <div className="text-[11px] font-mono text-white/50 mt-1">YILLIK CİRO</div>
            </div>
            <div className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)" }}>
              <div className="display text-[32px] tnum" style={{ color: "#B794F6" }}>%94</div>
              <div className="text-[11px] font-mono text-white/50 mt-1">YENİLEME</div>
            </div>
            <div className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)" }}>
              <div className="display text-[32px] tnum" style={{ color: "#4FD1C5" }}>12<span className="text-[18px]">dk</span></div>
              <div className="text-[11px] font-mono text-white/50 mt-1">ONBOARDING</div>
            </div>
          </div>

          <div className="mt-10 card-dark p-6">
            <svg width="24" height="20" viewBox="0 0 28 22" fill="none" className="mb-4 opacity-40"><path d="M0 22V12C0 5 4 1 11 0L12 3C8 4 6 7 6 11H11V22H0ZM17 22V12C17 5 21 1 28 0L29 3C25 4 23 7 23 11H28V22H17Z" fill="#AFBFFF"/></svg>
            <p className="text-[16.5px] leading-[1.55] text-white/85">&quot;Eskiden bir kasko teklifi 20 dakika sürerdi. Şimdi müşteri daha WhatsApp&apos;tan mesaj gönderirken biz teklifi hazırlıyoruz. Ekibim artık müşteriyle ilgileniyor — portal doldurmayla değil.&quot;</p>
            <div className="mt-5 flex items-center gap-3">
              <div className="w-11 h-11 rounded-full flex items-center justify-center font-mono text-[13px]" style={{ background: "linear-gradient(135deg,#6E8BFF,#9B6BF0)", color: "white" }}>MY</div>
              <div>
                <div className="font-medium text-[14px]">Mehmet Yıldız</div>
                <div className="text-[12px] text-white/55">Kurucu · Yıldız Sigorta · Ankara</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative reveal">
          <div className="card-dark p-6" style={{ background: "#0E1430" }}>
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="text-[11px] font-mono text-white/50">YILDIZ SİGORTA · AYLIK PRİM</div>
                <div className="text-[22px] font-semibold tracking-tight mt-1">₺ 2.847.200 <span style={{ color: "#4FD1C5" }} className="text-[13px] ml-2">+212% YoY</span></div>
              </div>
              <span className="chip chip-green">CANLI</span>
            </div>
            <div className="h-[260px] relative rounded-lg border border-white/5 p-3" style={{ background: "rgba(255,255,255,.02)" }}>
              <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="gd" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6E8BFF" stopOpacity=".55"/>
                    <stop offset="100%" stopColor="#6E8BFF" stopOpacity="0"/>
                  </linearGradient>
                  <linearGradient id="gd2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#9B6BF0" stopOpacity=".4"/>
                    <stop offset="100%" stopColor="#9B6BF0" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M0,160 L30,165 60,160 90,155 120,162 150,158 180,150 210,155 240,152 270,148 300,150 330,145 360,148 400,140 L400,200 L0,200 Z" fill="url(#gd2)"/>
                <path d="M0,160 L30,165 60,160 90,155 120,162 150,158 180,150 210,155 240,152 270,148 300,150 330,145 360,148 400,140" stroke="#9B6BF0" strokeWidth="1.5" fill="none" strokeDasharray="3 3" opacity=".6"/>
                <path d="M0,160 L30,150 60,145 90,130 120,125 150,110 180,95 210,80 240,60 270,50 300,40 330,28 360,22 400,14 L400,200 L0,200 Z" fill="url(#gd)"/>
                <path d="M0,160 L30,150 60,145 90,130 120,125 150,110 180,95 210,80 240,60 270,50 300,40 330,28 360,22 400,14" stroke="#6E8BFF" strokeWidth="2" fill="none"/>
                <line x1="60" y1="0" x2="60" y2="200" stroke="rgba(79,209,197,.5)" strokeWidth="1" strokeDasharray="2 4"/>
              </svg>
              <div className="absolute" style={{ left: "14%", top: 8 }}>
                <div className="chip chip-green" style={{ fontSize: 10 }}>★ INSURUP · OCAK 25</div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-4">
              <div className="p-3 rounded-md" style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.06)" }}><div className="text-[10px] font-mono text-white/45">TEKLİF/AY</div><div className="text-[16px] font-semibold tnum">2.487</div></div>
              <div className="p-3 rounded-md" style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.06)" }}><div className="text-[10px] font-mono text-white/45">DÖNÜŞÜM</div><div className="text-[16px] font-semibold tnum">%36</div></div>
              <div className="p-3 rounded-md" style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.06)" }}><div className="text-[10px] font-mono text-white/45">ORT. POLİÇE</div><div className="text-[16px] font-semibold tnum">₺3.180</div></div>
              <div className="p-3 rounded-md" style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.06)" }}><div className="text-[10px] font-mono text-white/45">EKİP</div><div className="text-[16px] font-semibold tnum">9 kişi</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
