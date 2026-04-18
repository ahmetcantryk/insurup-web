type Lane = {
  top: number;
  accent?: boolean;
  ltr: Array<[string, string]>;
  rtl: Array<[string, string]>;
};

const LANES: Lane[] = [
  { top: 60, ltr: [["Anadolu Sigorta","0s"],["HDI","-3s"],["Mapfre","-6s"],["Ray Sigorta","-9s"]], rtl: [["Neova","-1.5s"],["Unico","-4.5s"],["Doğa","-7.5s"],["Quick","-10.5s"]] },
  { top: 150, accent: true, ltr: [["AXA Sigorta","-1s"],["Türkiye Sigorta","-5s"],["Sompo","-9s"]], rtl: [["Zurich","-2.5s"],["Groupama","-6.5s"],["Orient","-10.5s"]] },
  { top: 240, ltr: [["Allianz","-2s"],["Ak Sigorta","-5s"],["Güneş","-8s"],["Aksigorta","-11s"]], rtl: [["Türk Nippon","0s"],["Allianz Yaşam","-3s"],["Magdeburger","-6s"],["Ankara Sigorta","-9s"]] },
];

export default function Integrations() {
  return (
    <section id="entegrasyonlar" className="relative py-32 overflow-hidden grain" style={{ background: "#06081A", color: "white" }}>
      <div className="absolute inset-0 grid-bg opacity-50"></div>
      <div className="mesh-orb" style={{ width: 600, height: 400, left: "50%", top: "50%", transform: "translate(-50%,-50%)", background: "radial-gradient(ellipse,#4C6EF5,transparent 60%)", opacity: .22 }}></div>
      <div className="relative max-w-[1280px] mx-auto px-6 text-center">
        <div className="eyebrow text-white/50 mb-4 reveal">ENTEGRASYONLAR</div>
        <h2 className="display text-[56px] md:text-[72px] max-w-[900px] mx-auto reveal">30+ Sigorta Şirketi ile Entegre.</h2>
        <p className="mt-5 text-white/55 text-[17px] max-w-[620px] mx-auto reveal">Her şirketle doğrudan API bağlantısı. Tek tıkla aktive et, paralel sorgulama ile saniyeler içinde teklif al.</p>

        <div className="relative mt-20 reveal" style={{ height: 300 }}>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[60px] z-40" style={{ background: "linear-gradient(90deg,#06081A,transparent)" }}></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-[60px] z-40" style={{ background: "linear-gradient(-90deg,#06081A,transparent)" }}></div>

          {LANES.map((lane, i) => (
            <div key={i}>
              <div className={`conv-rail conv-rail--l${lane.accent ? " conv-rail--accent" : ""}`} style={{ top: lane.top }}></div>
              <div className={`conv-rail conv-rail--r${lane.accent ? " conv-rail--accent" : ""}`} style={{ top: lane.top }}></div>
            </div>
          ))}

          <div className="conv-fade">
            {LANES.map((lane, i) => (
              <div key={`lane-${i}`}>
                <div className="conv-lane" style={{ top: lane.top }}>
                  {lane.ltr.map(([name, delay]) => (
                    <span key={name} className={`conv-chip${lane.accent ? " conv-chip--accent" : ""} conv-ltr`} style={{ animationDelay: delay }}>{name}</span>
                  ))}
                </div>
                <div className="conv-lane" style={{ top: lane.top }}>
                  {lane.rtl.map(([name, delay]) => (
                    <span key={name} className={`conv-chip${lane.accent ? " conv-chip--accent" : ""} conv-rtl`} style={{ animationDelay: delay }}>{name}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ width: 420, height: 420, background: "radial-gradient(circle, #06081A 30%, rgba(6,8,26,.85) 40%, transparent 62%)" }}></div>
            <div className="relative inline-flex items-center justify-center w-[140px] h-[140px] rounded-[32px]" style={{ background: "linear-gradient(135deg,#6E8BFF,#9B6BF0)", boxShadow: "0 24px 60px -10px rgba(110,139,255,.55), 0 0 0 1px rgba(255,255,255,.08) inset" }}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none"><path d="M4 14 L10 8 L14 12 L20 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 6 H20 V10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-center flex-wrap gap-x-6 gap-y-2 text-[13px] font-mono text-white/45">
          <span>● Trafik</span><span>● Kasko</span><span>● DASK</span><span>● Konut</span><span>● TSS</span><span>● İMM</span>
        </div>
      </div>
    </section>
  );
}
