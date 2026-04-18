const CHECK = (
  <span className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(20,184,166,.18)" }}>
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 5 L4 8 L9 2" stroke="#0F8E7F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </span>
);

const STEPS = [
  { k: "01", title: "Müşteri teklifi seçer", desc: "AI konuşmasında en uygun teklif tek tıkla onaylanır." },
  { k: "02", title: "3D Secure link paylaşılır", desc: "Sigorta şirketinin kendi ödeme altyapısına yönlenir." },
  { k: "03", title: "Poliçe anında kesilir", desc: "Ödeme sonrası poliçe PDF'i WhatsApp'tan gönderilir." },
];

export default function FeaturePayment() {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: "#F2F1EE" }}>
      <div className="absolute inset-0 grid-bg-light opacity-40 pointer-events-none"></div>

      <div className="relative max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-16 items-center">
          {/* Left: WhatsApp 3D Secure flow */}
          <div className="reveal">
            <div className="relative mx-auto" style={{ maxWidth: 420 }}>
              {/* Phone frame */}
              <div className="rounded-[32px] p-2.5" style={{ background: "#0A0F2C", boxShadow: "0 50px 100px -30px rgba(10,15,44,.55)" }}>
                <div className="rounded-[24px] overflow-hidden" style={{ background: "#ECE5DD" }}>
                  {/* WA header */}
                  <div className="flex items-center gap-3 px-4 py-3" style={{ background: "#075E54", color: "white" }}>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center ai-grad-bg ai-glow-sm">
                      <svg width="14" height="14" viewBox="0 0 12 12" fill="none"><path d="M6 1 L9 4 V8 L6 11 L3 8 V4 Z" stroke="white" strokeWidth="1.4"/></svg>
                    </div>
                    <div>
                      <div className="text-[12.5px] font-semibold">InsurChat · Yıldız Sigorta</div>
                      <div className="text-[10px] opacity-80 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
                        AI asistan · ödeme yönlendirmesi
                      </div>
                    </div>
                  </div>

                  {/* Conversation */}
                  <div className="p-3 space-y-2" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60'><circle cx='30' cy='30' r='0.8' fill='%23d4cdc0'/></svg>\")", backgroundSize: "60px 60px" }}>
                    <div className="text-[11px] py-2 px-3 rounded-2xl rounded-bl-sm max-w-[80%]" style={{ background: "white" }}>
                      <div className="text-ink-900">Anadolu Sigorta seçtim, devam edelim ✓</div>
                      <div className="text-[8px] text-ink-900/40 text-right mt-0.5 font-mono">14:26</div>
                    </div>

                    <div className="ml-auto text-[11px] py-2 px-3 rounded-2xl rounded-br-sm max-w-[92%]" style={{ background: "#DCF8C6" }}>
                      <div className="flex items-center gap-1 mb-1.5">
                        <span className="chip chip-wa" style={{ fontSize: 9, padding: "2px 8px" }}>AI · 3D SECURE</span>
                      </div>
                      <div className="text-ink-900 mb-2.5">Harika! Güvenli ödemeyi tamamlamak için şu linke tıkla:</div>

                      {/* Payment card */}
                      <div className="rounded-xl overflow-hidden" style={{ background: "linear-gradient(135deg,#0A0F2C,#1A2247)", boxShadow: "inset 0 1px 0 rgba(255,255,255,.08)" }}>
                        <div className="px-4 py-3 relative overflow-hidden">
                          <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full" style={{ background: "radial-gradient(circle,#7C3AED,transparent 70%)", opacity: .4 }}></div>
                          <div className="relative">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "rgba(94,234,212,.18)", border: "1px solid rgba(94,234,212,.35)" }}>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5EEAD4" strokeWidth="2"><path d="M12 2 L4 6 V12 C4 17 7.5 21 12 22 C16.5 21 20 17 20 12 V6 Z"/></svg>
                              </span>
                              <span className="text-[9.5px] font-mono text-white/70 tracking-wider">3D SECURE · SSL 256-BIT</span>
                            </div>
                            <div className="text-[11px] font-mono text-white/50">ANADOLU SİGORTA · KASKO</div>
                            <div className="text-[24px] font-semibold tnum tracking-tight text-white mt-0.5">₺ 4.280</div>
                            <div className="text-[10px] font-mono text-white/50 mt-0.5">12 ay taksit · ilk ödeme bugün</div>
                          </div>
                        </div>
                        <button className="w-full py-3 text-white text-[12.5px] font-semibold flex items-center justify-center gap-2 btn-ai" style={{ borderRadius: 0 }}>
                          Güvenli Ödeme
                          <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </button>
                      </div>

                      <div className="text-[8px] text-ink-900/40 text-right mt-1.5 font-mono">14:26 ✓✓</div>
                    </div>

                    <div className="text-[11px] py-2 px-3 rounded-2xl rounded-bl-sm max-w-[65%]" style={{ background: "white" }}>
                      <div className="text-ink-900">Ödeme tamamlandı 🎉</div>
                      <div className="text-[8px] text-ink-900/40 text-right mt-0.5 font-mono">14:28</div>
                    </div>

                    <div className="ml-auto text-[11px] py-2 px-3 rounded-2xl rounded-br-sm max-w-[88%]" style={{ background: "#DCF8C6" }}>
                      <div className="flex items-center gap-1 mb-1">
                        <span className="chip chip-wa-done" style={{ fontSize: 9, padding: "2px 8px" }}>✓ POLİÇE KESİLDİ</span>
                      </div>
                      <div className="text-ink-900">Poliçenizin PDF&apos;i paylaşıldı. Geçmiş olsun 🚗</div>
                      <div className="text-[8px] text-ink-900/40 text-right mt-0.5 font-mono">14:28 ✓✓</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating trust badges — positioned on sides */}
              <div className="absolute -left-4 md:-left-10 top-24 px-3 py-2.5 rounded-xl float2 flex items-center gap-2" style={{ background: "white", border: "1px solid rgba(10,15,44,.08)", boxShadow: "0 12px 24px -10px rgba(10,15,44,.18)" }}>
                <span className="w-8 h-8 rounded-md flex items-center justify-center" style={{ background: "rgba(20,184,166,.14)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F8E7F" strokeWidth="2"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4"/></svg>
                </span>
                <div className="leading-tight">
                  <div className="font-mono text-[9px] text-ink-900/45">PCI DSS</div>
                  <div className="text-[11.5px] font-semibold">Sertifikalı</div>
                </div>
              </div>

              <div className="absolute -right-4 md:-right-10 top-[60%] px-3 py-2.5 rounded-xl float1 flex items-center gap-2" style={{ background: "white", border: "1px solid rgba(10,15,44,.08)", boxShadow: "0 12px 24px -10px rgba(10,15,44,.18)" }}>
                <span className="w-8 h-8 rounded-md flex items-center justify-center" style={{ background: "rgba(124,58,237,.14)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2"><path d="M12 2 L4 6 V12 C4 17 7.5 21 12 22 C16.5 21 20 17 20 12 V6 Z"/></svg>
                </span>
                <div className="leading-tight">
                  <div className="font-mono text-[9px] text-ink-900/45">BDDK UYUMLU</div>
                  <div className="text-[11.5px] font-semibold">Yurt içi altyapı</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: copy + steps */}
          <div className="reveal">
            <div className="eyebrow mb-4" style={{ color: "#0F8E7F" }}>GÜVENLİ ÖDEME</div>
            <h2 className="display text-[48px] md:text-[58px] text-ink-900 leading-[1.02]">AI&apos;dan teklife, tek konuşmada poliçe.</h2>
            <p className="mt-5 text-ink-900/60 text-[17px] leading-[1.6] max-w-[540px]">
              Müşterileriniz 3D Secure ile AI&apos;dan aldığı teklifleri anında poliçeleştirir. Kart bilgileri sizde saklanmaz, ödeme doğrudan sigorta şirketi altyapısından akar.
            </p>

            <ul className="mt-8 space-y-3.5 text-[15.5px]">
              <li className="flex gap-3">{CHECK} Sigorta şirketlerinin altyapılarından ödeme.</li>
              <li className="flex gap-3">{CHECK} Kart bilgileri sunucularınızda tutulmaz.</li>
              <li className="flex gap-3">{CHECK} Uçtan uca teklif başlatma ve satın alma.</li>
            </ul>

            {/* 3-step process */}
            <div className="mt-10 grid gap-3">
              {STEPS.map((s) => (
                <div key={s.k} className="p-4 rounded-xl flex items-center gap-4" style={{ background: "white", border: "1px solid rgba(10,15,44,.08)" }}>
                  <span className="font-mono text-[11px] w-9 h-9 rounded-full flex items-center justify-center shrink-0 ai-grad-bg text-white">{s.k}</span>
                  <div>
                    <div className="text-[14.5px] font-semibold tracking-tight">{s.title}</div>
                    <div className="text-[13px] text-ink-900/60 mt-0.5">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust row */}
            <div className="mt-6 flex items-center gap-2 flex-wrap">
              {[
                { icon: "🔒", label: "SSL 256-bit" },
                { icon: "🛡", label: "PCI DSS" },
                { icon: "🇹🇷", label: "BDDK onaylı" },
                { icon: "🪪", label: "KVKK uyumlu" },
              ].map((b) => (
                <span key={b.label} className="px-3 py-2 rounded-lg font-mono text-[11px]" style={{ background: "white", border: "1px solid rgba(10,15,44,.08)", color: "rgba(10,15,44,.7)" }}>{b.icon} {b.label}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
