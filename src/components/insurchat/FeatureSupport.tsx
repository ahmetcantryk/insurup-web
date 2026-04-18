const CHECK = (
  <span className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(124,58,237,.18)" }}>
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 5 L4 8 L9 2" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </span>
);

type Conv = { name: string; topic: string; last: string; badge: string; badgeColor: string };
const CONVS: Conv[] = [
  { name: "Mehmet Y.", topic: "Kasko · 2018 Clio", last: "Teklif hazırlanıyor ⚡", badge: "AKTİF", badgeColor: "#14B8A6" },
  { name: "Ayşe K.", topic: "DASK yenileme", last: "Ödeme linki paylaşıldı 🔒", badge: "POLİÇE", badgeColor: "#7C3AED" },
  { name: "Hüseyin Ö.", topic: "Hasar ihbarı", last: "Form doldurmada yardımcı oluyorum", badge: "DESTEK", badgeColor: "#A78BFA" },
  { name: "Fatma D.", topic: "Trafik bilgi", last: "Prim hesaplaması tamamlandı", badge: "BİLGİ", badgeColor: "#5EEAD4" },
];

export default function FeatureSupport() {
  return (
    <section className="relative py-28 overflow-hidden grain" style={{ background: "#050818", color: "white" }}>
      <div className="absolute inset-0 grid-bg opacity-35"></div>
      <div className="mesh-orb" style={{ width: 440, height: 440, left: -140, top: 80, background: "radial-gradient(circle,#7C3AED,transparent 60%)", opacity: .3 }}></div>

      <div className="relative max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <div className="card-dark p-5 relative overflow-hidden" style={{ background: "#0B0D1F", border: "1px solid rgba(124,58,237,.3)" }}>
            <div className="ai-scan-line" style={{ top: 0 }}></div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="ai-orb" style={{ width: 20, height: 20 }}></div>
                <div className="text-[12.5px] font-semibold">Aktif Konuşmalar</div>
              </div>
              <div className="flex items-center gap-1.5 text-[10.5px] font-mono text-white/50">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#5EEAD4", boxShadow: "0 0 6px #5EEAD4" }}></span>
                canlı
              </div>
            </div>
            <div className="space-y-2">
              {CONVS.map((c) => (
                <div key={c.name} className="p-3 rounded-lg relative" style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.06)" }}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10.5px] font-mono" style={{ background: "linear-gradient(135deg,#7C3AED,#14B8A6)", color: "white" }}>{c.name.split(" ").map(p => p[0]).join("").slice(0,2)}</div>
                    <div className="flex-1">
                      <div className="text-[12.5px] font-medium">{c.name}</div>
                      <div className="text-[10px] font-mono text-white/40">{c.topic}</div>
                    </div>
                    <span className="chip" style={{ fontSize: 9, padding: "2px 7px", background: `${c.badgeColor}22`, color: c.badgeColor, border: `1px solid ${c.badgeColor}55` }}>{c.badge}</span>
                  </div>
                  <div className="text-[11.5px] py-1.5 px-2.5 rounded-lg" style={{ background: "rgba(124,58,237,.1)", border: "1px solid rgba(124,58,237,.2)" }}>
                    <span className="font-mono text-[9px] text-white/45 mr-1.5">AI</span>{c.last}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-[10.5px] font-mono text-white/45">
              <span>4 eş zamanlı · 1 AI asistan</span>
              <span>ort. 1.8sn yanıt</span>
            </div>
          </div>
        </div>

        <div className="reveal">
          <div className="eyebrow mb-4" style={{ color: "#A78BFA" }}>YAPAY ZEKA</div>
          <h2 className="display text-[48px] md:text-[58px]">Akıllı Müşteri Desteği.</h2>
          <p className="mt-5 text-white/65 text-[17px] leading-[1.6] max-w-[540px]">
            Yapay zeka destekli chatbot&apos;umuz müşterilerinizin sorularını anında yanıtlar, sigorta ürünleri hakkında bilgi verir ve teklif sürecini başlatır.
          </p>
          <ul className="mt-8 space-y-3.5 text-[15.5px]">
            <li className="flex gap-3">{CHECK} 7/24 kesintisiz destek.</li>
            <li className="flex gap-3">{CHECK} Doğal dil işleme (NLP).</li>
            <li className="flex gap-3">{CHECK} Anlık yanıt süresi.</li>
            <li className="flex gap-3">{CHECK} Müşteri niyet tespiti.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
