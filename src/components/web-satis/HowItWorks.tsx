export default function HowItWorks() {
  return (
    <section className="relative py-28" style={{ background: "var(--bone-50)" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center reveal">
          <div className="eyebrow text-ink-900/50 mb-4">KURULUM</div>
          <h2 className="display text-[48px] md:text-[64px] text-ink-900 max-w-[820px] mx-auto">Dakikalar İçinde Online Satışa Başlayın.</h2>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-[60px] left-[18%] right-[18%] h-px stepper-line-light"></div>

          {/* 1 — Template select */}
          <div className="reveal relative">
            <div className="card-light p-6 hover-lift">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[11px] px-2.5 py-1 rounded-full text-white" style={{ background: "#0A0F2C" }}>01</span>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(155,107,240,.12)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9B6BF0" strokeWidth="1.8"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/></svg>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-5">
                {[0,1,2].map((i) => (
                  <div key={i} className="rounded-md overflow-hidden relative" style={{ border: i === 1 ? "2px solid #9B6BF0" : "1px solid rgba(10,15,44,.08)", boxShadow: i === 1 ? "0 8px 20px -8px rgba(155,107,240,.35)" : "none" }}>
                    <div className="h-[52px]" style={{ background: i === 0 ? "linear-gradient(135deg,#0A0F2C,#2A3360)" : i === 1 ? "linear-gradient(135deg,#9B6BF0,#4FD1C5)" : "linear-gradient(135deg,#FAFAF9,#E7E5E0)" }}>
                      <div className="flex gap-0.5 p-1"><span className="w-1 h-1 rounded-full bg-white/40"></span><span className="w-1 h-1 rounded-full bg-white/40"></span><span className="w-1 h-1 rounded-full bg-white/40"></span></div>
                    </div>
                    <div className="p-1.5" style={{ background: i === 2 ? "#FAFAF9" : "rgba(255,255,255,.02)" }}>
                      <div className="h-1 rounded-full" style={{ background: i === 2 ? "rgba(10,15,44,.18)" : "rgba(255,255,255,.25)" }}></div>
                      <div className="h-1 rounded-full mt-1 w-2/3" style={{ background: i === 2 ? "rgba(10,15,44,.12)" : "rgba(255,255,255,.15)" }}></div>
                    </div>
                    {i === 1 && <div className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px]" style={{ background: "#4FD1C5", color: "#0A0F2C" }}>✓</div>}
                  </div>
                ))}
              </div>
              <h3 className="text-[20px] font-semibold tracking-tight">Tasarım Seç</h3>
              <p className="mt-1.5 text-ink-900/60 text-[14px]">Web sitenizin şablonunu seçin.</p>
            </div>
          </div>

          {/* 2 — Customize */}
          <div className="reveal relative">
            <div className="card-light p-6 hover-lift">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[11px] px-2.5 py-1 rounded-full text-white" style={{ background: "#0A0F2C" }}>02</span>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(76,110,245,.12)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4C6EF5" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18"/></svg>
                </div>
              </div>
              <div className="mb-5 p-3 rounded-lg border" style={{ borderColor: "rgba(10,15,44,.08)", background: "#FAFAF9" }}>
                <div className="text-[10px] font-mono text-ink-900/45 mb-2">MARKA RENGİ</div>
                <div className="flex gap-1.5 mb-3">
                  {["#4C6EF5","#9B6BF0","#4FD1C5","#F97316","#EC4899","#0A0F2C"].map((c, i) => (
                    <button key={c} className="w-6 h-6 rounded-full transition hover:scale-110" style={{ background: c, boxShadow: i === 1 ? "0 0 0 2px #fff, 0 0 0 4px #9B6BF0" : "inset 0 0 0 1px rgba(10,15,44,.08)" }}></button>
                  ))}
                </div>
                <div className="text-[10px] font-mono text-ink-900/45 mb-2">LOGO</div>
                <div className="flex items-center gap-2 p-2 rounded-md border-2 border-dashed" style={{ borderColor: "rgba(10,15,44,.15)" }}>
                  <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg,#9B6BF0,#4FD1C5)" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2"/></svg>
                  </div>
                  <div className="text-[11px] text-ink-900/60">logo.svg yükle</div>
                </div>
              </div>
              <h3 className="text-[20px] font-semibold tracking-tight">Özelleştir</h3>
              <p className="mt-1.5 text-ink-900/60 text-[14px]">Logo, renk ve ürünleri ayarlayın.</p>
            </div>
          </div>

          {/* 3 — Publish */}
          <div className="reveal relative">
            <div className="card-light p-6 hover-lift">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[11px] px-2.5 py-1 rounded-full text-white" style={{ background: "#0A0F2C" }}>03</span>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(79,209,197,.16)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F8E7F" strokeWidth="1.8"><path d="M12 2 L19 6 V18 L12 22 L5 18 V6 Z"/><path d="M12 2 V22 M5 6 L19 18 M19 6 L5 18"/></svg>
                </div>
                <span className="ml-auto chip chip-green">● 5 dk</span>
              </div>
              <div className="mb-5 rounded-lg overflow-hidden border" style={{ borderColor: "rgba(10,15,44,.08)" }}>
                <div className="flex items-center gap-1.5 px-2 py-1.5" style={{ background: "#FAFAF9", borderBottom: "1px solid rgba(10,15,44,.06)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span className="ml-2 text-[9px] font-mono text-ink-900/50 truncate">acenteniz.com.tr</span>
                </div>
                <div className="p-3" style={{ background: "linear-gradient(135deg,#9B6BF0,#4FD1C5)" }}>
                  <div className="text-[9px] font-mono text-white/70">YILDIZ SİGORTA</div>
                  <div className="text-[13px] font-semibold text-white mt-0.5">Kasko Teklifini 30 saniyede al.</div>
                  <div className="mt-2 inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white text-[10px] font-semibold text-ink-900">Teklif Al →</div>
                </div>
              </div>
              <h3 className="text-[20px] font-semibold tracking-tight">Yayına Al</h3>
              <p className="mt-1.5 text-ink-900/60 text-[14px]">Domain gir ve başlatın.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center font-mono text-[12px] text-ink-900/45">
          Ortalama kurulum süresi: 4 dakika 32 saniye
        </div>
      </div>
    </section>
  );
}
