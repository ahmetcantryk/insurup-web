const BEFORE = [
  "Mesaj geldi → Müsait değilsin → Müşteri kaybı",
  "Manuel teklif hazırlama · 15 dk",
  "Gece 22:00&apos;den sonra yanıt yok",
  "Hafta sonu müşteri hizmeti yok",
];

const AFTER = [
  "Mesaj geldi → AI hemen yanıtladı → Lead yakalandı",
  "Otomatik teklif · 10 saniye",
  "7/24 aktif — her saat, her gün",
  "Hafta sonu da satışta",
];

export default function BeforeAfter() {
  return (
    <section className="relative py-28" style={{ background: "var(--bone-100)" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <div className="eyebrow text-ink-900/50 mb-4">ÖNCE / SONRA</div>
          <h2 className="display text-[48px] md:text-[60px] text-ink-900 max-w-[820px] mx-auto">Fark, saniyelerde başlıyor.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 reveal">
          <div className="card-light p-8 relative" style={{ border: "1px dashed rgba(10,15,44,.18)" }}>
            <div className="flex items-center justify-between mb-6">
              <div className="eyebrow text-ink-900/50">INSURCHAT OLMADAN</div>
              <span className="chip" style={{ background: "rgba(255,95,87,.08)", color: "#CC3A32", border: "1px solid rgba(255,95,87,.25)", fontSize: 10 }}>KAYIP ~%60</span>
            </div>
            <ul className="space-y-4 text-[15.5px]">
              {BEFORE.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(255,95,87,.1)", color: "#CC3A32" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                  </span>
                  <span className="text-ink-900/75" dangerouslySetInnerHTML={{ __html: c }} />
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t text-[12px] font-mono text-ink-900/45" style={{ borderColor: "rgba(10,15,44,.08)" }}>
              Kaybedilen fırsat başına ortalama ₺3.200 prim kaybı
            </div>
          </div>

          <div className="p-8 relative rounded-[20px] text-white ai-glow-sm" style={{ background: "linear-gradient(180deg,#0E0F24,#050818)", border: "1px solid rgba(124,58,237,.4)" }}>
            <div className="flex items-center justify-between mb-6">
              <div className="eyebrow text-white/55">INSURCHAT İLE</div>
              <span className="chip chip-teal" style={{ fontSize: 10 }}>DÖNÜŞÜM +%45</span>
            </div>
            <ul className="space-y-4 text-[15.5px]">
              {AFTER.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(20,184,166,.18)", color: "#5EEAD4" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className="text-white/85">{c}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t text-[12px] font-mono text-white/55" style={{ borderColor: "rgba(255,255,255,.08)" }}>
              Her konuşma CRM&apos;e lead olarak düşer · ortalama 1.8sn yanıt
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
