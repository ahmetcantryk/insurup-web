const METRICS = [
  { value: "%97", label: "DOĞRU NİYET TESPİTİ", hint: "NLP modeli Türkçe optimize" },
  { value: "< 2sn", label: "ORTALAMA YANIT SÜRESİ", hint: "Canlı akış, streaming yanıt" },
  { value: "7/24", label: "KESİNTİSİZ HİZMET", hint: "Uyku yok, mola yok" },
  { value: "+%45", label: "LEAD DÖNÜŞÜM ARTIŞI", hint: "Ortalama 12 ay içinde" },
];

export default function MetricStrip() {
  return (
    <section className="relative py-16" style={{ background: "#050818", color: "white", borderTop: "1px solid rgba(124,58,237,.15)", borderBottom: "1px solid rgba(20,184,166,.12)" }}>
      <div className="absolute inset-0 grid-bg opacity-25"></div>
      <div className="relative max-w-[1280px] mx-auto px-6 grid md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x" style={{ borderColor: "rgba(255,255,255,.08)" }}>
        {METRICS.map((m, i) => (
          <div key={m.label} className="reveal p-6 md:px-10" style={i > 0 ? { borderColor: "rgba(255,255,255,.06)" } : {}}>
            <div className="display text-[48px] md:text-[56px] tnum ai-grad">{m.value}</div>
            <div className="mt-2 font-mono text-[11px] text-white/55 tracking-wider">{m.label}</div>
            <div className="mt-1 text-[12.5px] text-white/45">{m.hint}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
