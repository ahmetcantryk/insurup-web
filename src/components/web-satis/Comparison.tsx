const CUSTOM = [
  "3-6 ay süre",
  "50.000 TL+ maliyet",
  "Sürekli bakım gereksinimi",
  "Entegrasyon sorunları",
];

const INSURUP = [
  "5 dakikada kurulum",
  "Aylık sabit ücret",
  "Otomatik güncellemeler",
  "Hazır entegrasyonlar",
];

export default function Comparison() {
  return (
    <section className="relative py-28" style={{ background: "var(--bone-50)" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <div className="eyebrow text-ink-900/50 mb-4">KARŞILAŞTIRMA</div>
          <h2 className="display text-[48px] md:text-[60px] text-ink-900 max-w-[720px] mx-auto">Kod yazmak yerine, satışa başla.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 reveal">
          <div className="card-light p-8 relative" style={{ border: "1px dashed rgba(10,15,44,.18)" }}>
            <div className="flex items-center justify-between mb-6">
              <div className="eyebrow text-ink-900/45">ÖZEL YAZILIM GELİŞTİRME</div>
              <span className="chip" style={{ background: "rgba(255,95,87,.08)", color: "#CC3A32", border: "1px solid rgba(255,95,87,.25)", fontSize: 10 }}>ZORLU</span>
            </div>
            <ul className="space-y-4 text-[15.5px]">
              {CUSTOM.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(255,95,87,.1)", color: "#CC3A32" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                  </span>
                  <span className="text-ink-900/75">{c}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t text-[12px] font-mono text-ink-900/45" style={{ borderColor: "rgba(10,15,44,.08)" }}>
              Yazılım ekibi + bakım sözleşmesi + entegrasyon giderleri
            </div>
          </div>

          <div className="p-8 relative rounded-[20px] text-white" style={{ background: "linear-gradient(180deg,#0F1638,#0A0F2C)", border: "1px solid rgba(110,139,255,.35)", boxShadow: "0 30px 60px -30px rgba(110,139,255,.45)" }}>
            <div className="flex items-center justify-between mb-6">
              <div className="eyebrow text-white/55">INSURUP WEB SATIŞ</div>
              <span className="chip chip-green" style={{ fontSize: 10 }}>★ ÖNERİLEN</span>
            </div>
            <ul className="space-y-4 text-[15.5px]">
              {INSURUP.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(79,209,197,.16)", color: "#4FD1C5" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className="text-white/85">{c}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t text-[12px] font-mono text-white/50" style={{ borderColor: "rgba(255,255,255,.08)" }}>
              Hiçbir geliştirici gerek yok · 4dk 32sn ort. kurulum
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
