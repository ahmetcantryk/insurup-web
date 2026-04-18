const CHECK = (
  <span className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(20,184,166,.18)" }}>
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 5 L4 8 L9 2" stroke="#14B8A6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </span>
);

export default function FeatureCrm() {
  return (
    <section className="relative py-28" style={{ background: "var(--bone-50)" }}>
      <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal order-2 lg:order-1">
          <div className="eyebrow mb-4" style={{ color: "#0F8E7F" }}>OTOMASYON</div>
          <h2 className="display text-[48px] md:text-[58px] text-ink-900">Otomatik Teklif Toplama.</h2>
          <p className="mt-5 text-ink-900/60 text-[17px] leading-[1.6] max-w-[540px]">
            Chatbot üzerinden müşteri bilgilerini toplayın ve CRM&apos;inize otomatik aktarılsın. Manuel veri girişine son verin.
          </p>
          <ul className="mt-8 space-y-3.5 text-[15.5px]">
            <li className="flex gap-3">{CHECK} Otomatik form doldurma.</li>
            <li className="flex gap-3">{CHECK} CRM entegrasyonu.</li>
            <li className="flex gap-3">{CHECK} Lead yönetimi.</li>
            <li className="flex gap-3">{CHECK} Real-time senkronizasyon.</li>
          </ul>
        </div>

        <div className="reveal order-1 lg:order-2">
          <div className="grid grid-cols-[1fr_auto_1.1fr] items-center gap-3">
            {/* WhatsApp column */}
            <div className="rounded-[20px] p-2" style={{ background: "#0A0F2C", boxShadow: "0 30px 60px -20px rgba(10,15,44,.4)" }}>
              <div className="rounded-[16px] overflow-hidden" style={{ background: "#ECE5DD" }}>
                <div className="flex items-center gap-2 px-3 py-2" style={{ background: "#075E54", color: "white" }}>
                  <div className="w-6 h-6 rounded-full ai-grad-bg"></div>
                  <div className="text-[10.5px] font-semibold">InsurChat</div>
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
                </div>
                <div className="p-2.5 space-y-1.5 min-h-[260px]">
                  <div className="text-[10px] py-1.5 px-2 rounded-lg rounded-bl-sm max-w-[80%]" style={{ background: "white" }}>
                    <div className="text-ink-900">Mehmet Yıldız</div>
                    <div className="text-ink-900/55 text-[9px] font-mono">TC: 1234••••••123</div>
                  </div>
                  <div className="text-[10px] py-1.5 px-2 rounded-lg rounded-bl-sm max-w-[75%]" style={{ background: "white" }}>
                    <div className="font-mono text-ink-900">34 ABC 1234</div>
                  </div>
                  <div className="text-[10px] py-1.5 px-2 rounded-lg rounded-bl-sm max-w-[85%]" style={{ background: "white" }}>
                    <div className="text-ink-900">2018 Renault Clio · Kasko</div>
                  </div>
                  <div className="ml-auto text-[10px] py-1.5 px-2 rounded-lg rounded-br-sm max-w-[80%]" style={{ background: "#DCF8C6" }}>
                    <div className="flex items-center gap-1 mb-1">
                      <span className="chip chip-wa" style={{ fontSize: 9, padding: "2px 7px" }}>AI · CRM&apos;E AKTARILDI</span>
                    </div>
                    <div className="text-ink-900">Teklifler hazırlanıyor ⚡</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Flow arrow with particles */}
            <div className="relative flex flex-col items-center justify-center gap-2" style={{ height: 200 }}>
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px" style={{ background: "repeating-linear-gradient(180deg,rgba(124,58,237,.4) 0 4px, transparent 4px 10px)" }}></div>
              <div className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center ai-grad-bg ai-glow-sm">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="relative z-10 text-[10px] font-mono text-ink-900/55 text-center">anlık<br/>akış</div>
            </div>

            {/* CRM column */}
            <div className="card-light overflow-hidden" style={{ boxShadow: "0 30px 60px -30px rgba(10,15,44,.25)" }}>
              <div className="flex items-center gap-1.5 px-3 py-2 border-b" style={{ borderColor: "rgba(10,15,44,.08)" }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#FF5F57" }}></span>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#FEBC2E" }}></span>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#28C840" }}></span>
                <span className="ml-2 text-[9px] font-mono text-ink-900/40">crm / leads / YENİ</span>
              </div>
              <div className="p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="chip chip-volt" style={{ fontSize: 9 }}>● YENİ LEAD</span>
                  <span className="ml-auto text-[10px] font-mono text-ink-900/45">az önce</span>
                </div>
                {[
                  { label: "Müşteri", value: "Mehmet Yıldız", highlight: true },
                  { label: "TC Kimlik", value: "1234••••••123" },
                  { label: "Telefon", value: "+90 532 ••• 45 67" },
                  { label: "Plaka", value: "34 ABC 1234" },
                  { label: "Branş", value: "Kasko · 2018 Clio" },
                  { label: "Kaynak", value: "WhatsApp · InsurChat" },
                ].map((f) => (
                  <div key={f.label} className="p-2 rounded-md" style={f.highlight ? { background: "rgba(124,58,237,.05)", border: "1px solid rgba(124,58,237,.2)" } : { background: "#FAFAF9", border: "1px solid rgba(10,15,44,.06)" }}>
                    <div className="text-[9px] font-mono text-ink-900/45">{f.label}</div>
                    <div className="text-[12px] font-medium mt-0.5">{f.value}</div>
                  </div>
                ))}
                <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-ink-900/55">
                  <span>otomatik doldurma ✓</span>
                  <span style={{ color: "#0F8E7F" }}>senkronize</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
