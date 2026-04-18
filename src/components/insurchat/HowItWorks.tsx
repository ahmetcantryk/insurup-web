export default function HowItWorks() {
  return (
    <section className="relative py-28" style={{ background: "var(--bone-50)" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center reveal">
          <div className="eyebrow text-ink-900/50 mb-4">KURULUM</div>
          <h2 className="display text-[48px] md:text-[60px] text-ink-900 max-w-[820px] mx-auto">Dakikalar İçinde AI Asistanınızı Kurun.</h2>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-[60px] left-[18%] right-[18%] h-px stepper-line-light" style={{ zIndex: 0 }}></div>

          {/* 1 — configure */}
          <div className="reveal relative" style={{ zIndex: 1 }}>
            <div className="card-light p-6 hover-lift">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[11px] px-2.5 py-1 rounded-full text-white" style={{ background: "#0A0F2C" }}>01</span>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center ai-grad-bg">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2"/></svg>
                </div>
              </div>
              <div className="mb-5 p-3 rounded-lg border space-y-2" style={{ borderColor: "rgba(10,15,44,.08)", background: "#FAFAF9" }}>
                <div>
                  <div className="text-[9.5px] font-mono text-ink-900/45 mb-1">ASISTAN ADI</div>
                  <div className="px-2 py-1 rounded-md text-[12px]" style={{ background: "white", border: "1px solid rgba(124,58,237,.3)" }}>Yıldız AI</div>
                </div>
                <div>
                  <div className="text-[9.5px] font-mono text-ink-900/45 mb-1">TON</div>
                  <div className="flex gap-1">
                    {["Samimi","Profesyonel","Esnek"].map((t, i) => (
                      <span key={t} className="chip" style={i === 0 ? { background: "rgba(124,58,237,.12)", color: "#7C3AED", border: "1px solid rgba(124,58,237,.3)" } : { background: "#fff", color: "rgba(10,15,44,.5)", border: "1px solid rgba(10,15,44,.08)" }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-[9.5px] font-mono text-ink-900/45 mb-1">KARŞILAMA</div>
                  <div className="px-2 py-1 rounded-md text-[11px] text-ink-900/70" style={{ background: "white", border: "1px solid rgba(10,15,44,.08)" }}>Merhaba 👋 Size nasıl yardımcı olabilirim?</div>
                </div>
              </div>
              <h3 className="text-[20px] font-semibold tracking-tight">Chatbot&apos;u Yapılandır</h3>
              <p className="mt-1.5 text-ink-900/60 text-[14px]">AI asistanınızı kişiselleştirin.</p>
            </div>
          </div>

          {/* 2 — embed script */}
          <div className="reveal relative" style={{ zIndex: 1 }}>
            <div className="card-light p-6 hover-lift">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[11px] px-2.5 py-1 rounded-full text-white" style={{ background: "#0A0F2C" }}>02</span>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center ai-grad-bg">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><path d="M8 6l-5 6 5 6M16 6l5 6-5 6M14 4l-4 16"/></svg>
                </div>
              </div>
              <div className="mb-5 rounded-lg overflow-hidden" style={{ background: "#0B0D1F", border: "1px solid rgba(124,58,237,.3)" }}>
                <div className="flex items-center gap-1.5 px-3 py-2" style={{ background: "rgba(255,255,255,.03)", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span className="ml-2 font-mono text-[9.5px] text-white/40">index.html</span>
                  <span className="ml-auto font-mono text-[9px] text-white/30">HTML</span>
                </div>
                <div className="font-mono text-[11.5px] leading-[1.7] p-4 whitespace-pre" style={{ color: "#E9D5FF" }}>
                  <div>
                    <span style={{ color: "#64748B" }}>&lt;</span>
                    <span style={{ color: "#F9A8D4" }}>script</span>
                    {" "}
                    <span style={{ color: "#5EEAD4" }}>src</span>
                    <span style={{ color: "#64748B" }}>=</span>
                    <span style={{ color: "#86EFAC" }}>&quot;https://cdn.insurchat.ai/v1.js&quot;</span>
                  </div>
                  <div>
                    {"  "}
                    <span style={{ color: "#5EEAD4" }}>data-agent</span>
                    <span style={{ color: "#64748B" }}>=</span>
                    <span style={{ color: "#86EFAC" }}>&quot;yildiz-ai&quot;</span>
                  </div>
                  <div>
                    {"  "}
                    <span style={{ color: "#5EEAD4" }}>async</span>
                    <span style={{ color: "#64748B" }}>&gt;</span>
                    <span style={{ color: "#64748B" }}>&lt;/</span>
                    <span style={{ color: "#F9A8D4" }}>script</span>
                    <span style={{ color: "#64748B" }}>&gt;</span>
                  </div>
                </div>
              </div>
              <h3 className="text-[20px] font-semibold tracking-tight">Web Sitenize Entegre Edin</h3>
              <p className="mt-1.5 text-ink-900/60 text-[14px]">Tek satır kod ile entegrasyon.</p>
            </div>
          </div>

          {/* 3 — WhatsApp */}
          <div className="reveal relative" style={{ zIndex: 1 }}>
            <div className="card-light p-6 hover-lift">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[11px] px-2.5 py-1 rounded-full text-white" style={{ background: "#0A0F2C" }}>03</span>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "#25D366" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M20 4A10 10 0 0 0 4 17l-1 4 4-1A10 10 0 1 0 20 4zM7 9h3l1 3-2 1a5 5 0 0 0 2 2l1-2 3 1v3a1 1 0 0 1-1 1 10 10 0 0 1-9-9 1 1 0 0 1 1-1z"/></svg>
                </div>
                <span className="ml-auto chip chip-volt">● 2 dk</span>
              </div>
              <div className="mb-5 p-3 rounded-lg border space-y-2.5" style={{ borderColor: "rgba(10,15,44,.08)", background: "#FAFAF9" }}>
                {[
                  { label: "WhatsApp Business onaylandı", done: true },
                  { label: "Webhook bağlandı", done: true },
                  { label: "AI akışı canlıya alındı", done: false },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center" style={s.done ? { background: "#14B8A6", color: "white" } : { background: "rgba(10,15,44,.08)", color: "rgba(10,15,44,.5)" }}>
                      {s.done ? <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 5 L4 8 L9 2" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> : <span className="w-1.5 h-1.5 rounded-full bg-ink-900/40"></span>}
                    </span>
                    <span className="text-[12.5px]" style={s.done ? {} : { color: "rgba(10,15,44,.5)" }}>{s.label}</span>
                  </div>
                ))}
              </div>
              <h3 className="text-[20px] font-semibold tracking-tight">WhatsApp&apos;dan Satış Yönetimi</h3>
              <p className="mt-1.5 text-ink-900/60 text-[14px]">Dakikalar içinde WhatsApp hesabınıza kurulum.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
