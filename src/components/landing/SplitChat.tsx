const CHECK = (
  <span className="mt-1 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "rgba(79,209,197,.18)" }}>
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 5 L4 8 L9 2" stroke="#0F8E7F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </span>
);

export default function SplitChat() {
  const bgPattern = "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60'><circle cx='30' cy='30' r='0.8' fill='%23d4cdc0'/></svg>\")";
  return (
    <section className="relative py-28" style={{ background: "#FAFAF9" }}>
      <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <div className="eyebrow mb-4" style={{ color: "#0F8E7F" }}>INSURCHAT · AI</div>
          <h2 className="display text-[48px] md:text-[58px] text-ink-900">WhatsApp&apos;ta satış yapan AI asistan.</h2>
          <p className="mt-5 text-ink-900/60 text-[17px] leading-[1.6] max-w-[540px]">Gelen mesajı oku, niyeti anla, teklifleri hazırla, poliçeyi kes — hepsi tek konuşmada.</p>
          <ul className="mt-8 space-y-3.5 text-[15.5px]">
            <li className="flex gap-3">{CHECK} AI müşteri niyet tespiti — Kasko mu, trafik mi, yenileme mi?</li>
            <li className="flex gap-3">{CHECK} Otomatik teklif oluşturma — 8 şirket paralel sorgulama.</li>
            <li className="flex gap-3">{CHECK} CRM ile tam senkron — her konuşma müşteri dosyasına gider.</li>
            <li className="flex gap-3">{CHECK} 7/24 kesintisiz — uyurken bile poliçe kesiyor.</li>
          </ul>
          <a href="#iletisim" className="inline-flex items-center gap-2 mt-8 px-5 py-3 rounded-lg font-medium" style={{ background: "#0A0F2C", color: "white" }}>AI asistanı etkinleştir <span>→</span></a>
        </div>

        <div className="reveal float1">
          <div className="mx-auto w-[340px] rounded-[32px] p-3" style={{ background: "#0A0F2C", boxShadow: "0 40px 80px -30px rgba(10,15,44,.4)" }}>
            <div className="rounded-[24px] overflow-hidden" style={{ background: "#ECE5DD" }}>
              <div className="flex items-center gap-3 px-4 py-3" style={{ background: "#075E54", color: "white" }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-mono text-[12px]" style={{ background: "linear-gradient(135deg,#4FD1C5,#6E8BFF)" }}>IU</div>
                <div>
                  <div className="text-[13px] font-semibold">InsurUp · Yıldız Sigorta</div>
                  <div className="text-[10px] opacity-75 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> çevrimiçi · AI asistan</div>
                </div>
              </div>
              <div className="p-3 space-y-2 min-h-[360px]" style={{ backgroundImage: bgPattern, backgroundSize: "60px 60px" }}>
                <div className="text-[11px] py-1.5 px-3 rounded-xl rounded-bl-sm max-w-[75%]" style={{ background: "white" }}>
                  <div className="text-ink-900">Selam, aracım için kasko istiyorum</div>
                  <div className="text-[8px] text-ink-900/40 text-right mt-0.5 font-mono">14:23</div>
                </div>
                <div className="ml-auto text-[11px] py-1.5 px-3 rounded-xl rounded-br-sm max-w-[80%]" style={{ background: "#DCF8C6" }}>
                  <div className="flex items-center gap-1 mb-1">
                    <span className="chip" style={{ background: "rgba(15,142,127,.12)", border: "1px solid rgba(15,142,127,.3)", color: "#0F8E7F", fontSize: 9, padding: "1px 6px" }}>AI · KASKO TESPİTİ</span>
                  </div>
                  <div className="text-ink-900">Merhaba 👋 Plakanı ve TC kimlik no&apos;nu gönderebilir misin?</div>
                  <div className="text-[8px] text-ink-900/40 text-right mt-0.5 font-mono">14:23 ✓✓</div>
                </div>
                <div className="text-[11px] py-1.5 px-3 rounded-xl rounded-bl-sm max-w-[75%]" style={{ background: "white" }}>
                  <div className="text-ink-900 font-mono">34 ABC 123 · 1234••••••</div>
                  <div className="text-[8px] text-ink-900/40 text-right mt-0.5 font-mono">14:24</div>
                </div>
                <div className="ml-auto text-[11px] py-2 px-3 rounded-xl rounded-br-sm max-w-[85%]" style={{ background: "#DCF8C6" }}>
                  <div className="text-ink-900 mb-2">2018 Renault Clio için 3 teklif hazırladım:</div>
                  <div className="space-y-1">
                    {[
                      { k: "ANA", label: "Anadolu", price: "₺4.280", highlight: true },
                      { k: "AXA", label: "AXA", price: "₺4.710" },
                      { k: "HDI", label: "HDI", price: "₺4.920" },
                    ].map((r) => (
                      <div key={r.k} className="flex items-center gap-2 p-1.5 rounded bg-white/70">
                        <span className="w-4 h-4 rounded text-[7px] font-mono flex items-center justify-center" style={{ background: "#0A0F2C", color: "white" }}>{r.k}</span>
                        <span className="text-[10px] text-ink-900">{r.label}</span>
                        <span className="ml-auto font-semibold tnum text-[11px]" style={r.highlight ? { color: "#0F8E7F" } : {}}>{r.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-[8px] text-ink-900/40 text-right mt-1 font-mono">14:24 ✓✓</div>
                </div>
                <div className="ml-auto text-[11px] py-1.5 px-3 rounded-xl rounded-br-sm max-w-[70%]" style={{ background: "#DCF8C6" }}>
                  <div className="flex items-center gap-1 text-ink-900">Yazıyor <span className="dot" style={{ background: "#0F8E7F" }}></span><span className="dot" style={{ background: "#0F8E7F" }}></span><span className="dot" style={{ background: "#0F8E7F" }}></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
