export default function CaseStudy() {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: "#06081A", color: "white" }}>
      <div className="absolute inset-0 grid-bg opacity-40"></div>
      <div className="mesh-orb" style={{ width: 600, height: 400, left: "50%", top: "50%", transform: "translate(-50%,-50%)", background: "radial-gradient(ellipse,#9B6BF0,transparent 60%)", opacity: .22 }}></div>

      <div className="relative max-w-[1100px] mx-auto px-6">
        <div className="reveal card-dark p-10 md:p-14 relative overflow-hidden" style={{ background: "linear-gradient(180deg,#0E1430,#0A0F2C)", boxShadow: "0 40px 80px -30px rgba(155,107,240,.35)" }}>
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,#9B6BF0,transparent 60%)", opacity: .35 }}></div>

          <div className="relative flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center font-mono text-[14px] font-bold" style={{ background: "linear-gradient(135deg,#6E8BFF,#9B6BF0)", color: "white" }}>YS</div>
                <div>
                  <div className="text-[13px] font-semibold">Yıldız Sigorta</div>
                  <div className="text-[11px] font-mono text-white/50">Ankara · 4 şube</div>
                </div>
                <span className="ml-auto chip chip-plum" style={{ fontSize: 10 }}>VAKA ÇALIŞMASI</span>
              </div>

              <blockquote className="display text-[28px] md:text-[40px] leading-[1.15] max-w-[760px]">
                &quot;Siteyi kurdum, ilk hafta 12 yeni online müşteri kazandım.&quot;
              </blockquote>

              <div className="mt-8 grid grid-cols-3 gap-4 max-w-[520px]">
                <div>
                  <div className="display text-[30px] tnum" style={{ color: "#7C9BFF" }}>+340%</div>
                  <div className="text-[10.5px] font-mono text-white/55 mt-1">ONLINE TEKLİF</div>
                </div>
                <div>
                  <div className="display text-[30px] tnum" style={{ color: "#B794F6" }}>+65%</div>
                  <div className="text-[10.5px] font-mono text-white/55 mt-1">SATIŞ DÖNÜŞÜM</div>
                </div>
                <div>
                  <div className="display text-[30px] tnum" style={{ color: "#4FD1C5" }}>18<span className="text-[16px]">sa/hafta</span></div>
                  <div className="text-[10.5px] font-mono text-white/55 mt-1">TASARRUF</div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t flex items-center gap-3" style={{ borderColor: "rgba(255,255,255,.08)" }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center font-mono text-[13px]" style={{ background: "linear-gradient(135deg,#6E8BFF,#9B6BF0)", color: "white" }}>MY</div>
                <div>
                  <div className="font-medium text-[14px]">Mehmet Yıldız</div>
                  <div className="text-[12px] text-white/55">Kurucu · Yıldız Sigorta · Ankara</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block shrink-0">
              <svg width="70" height="56" viewBox="0 0 28 22" fill="none" className="opacity-40"><path d="M0 22V12C0 5 4 1 11 0L12 3C8 4 6 7 6 11H11V22H0ZM17 22V12C17 5 21 1 28 0L29 3C25 4 23 7 23 11H28V22H17Z" fill="#AFBFFF"/></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
