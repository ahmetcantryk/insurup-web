const CHECK = (
  <span className="mt-1 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "rgba(76,110,245,.12)" }}>
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 5 L4 8 L9 2" stroke="#4C6EF5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </span>
);

export default function SplitCrm() {
  return (
    <section id="crm" className="relative py-28" style={{ background: "#FAFAF9" }}>
      <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <div className="eyebrow mb-4" style={{ color: "#4C6EF5" }}>INSURUP CRM</div>
          <h2 className="display text-[48px] md:text-[58px] text-ink-900">Tüm sigorta operasyonun tek ekranda.</h2>
          <p className="mt-5 text-ink-900/60 text-[17px] leading-[1.6] max-w-[540px]">Teklif almaktan poliçe kesmeye, müşteri takibinden yenilemeye — kopuk sistemlerden tek platforma geç.</p>
          <ul className="mt-8 space-y-3.5 text-[15.5px]">
            <li className="flex gap-3">{CHECK} Tek ekrandan teklif ve poliçe yönetimi — 8 şirket paralel.</li>
            <li className="flex gap-3">{CHECK} 360° müşteri takibi — poliçeler, iletişim, not tarihçesi.</li>
            <li className="flex gap-3">{CHECK} Otomatik yenileme uyarıları — SMS + WhatsApp + e-posta.</li>
            <li className="flex gap-3">{CHECK} Şube ve ekip yönetimi — rol bazlı yetkilendirme.</li>
          </ul>
          <a href="#iletisim" className="inline-flex items-center gap-2 mt-8 px-5 py-3 rounded-lg font-medium btn-primary">CRM&apos;i keşfet <span>→</span></a>
        </div>

        <div className="reveal float1">
          <div className="card-light overflow-hidden" style={{ boxShadow: "0 40px 80px -30px rgba(10,15,44,.25)" }}>
            <div className="flex items-center gap-1.5 px-4 py-3 border-b" style={{ borderColor: "rgba(10,15,44,.08)" }}>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }}></span>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEBC2E" }}></span>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }}></span>
              <span className="ml-3 text-[11px] font-mono text-ink-900/40">app.insurup.co · teklif</span>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-[12px] text-ink-900/50 font-mono">MÜŞTERİ</div>
                  <div className="text-[16px] font-semibold">Mehmet Yıldız</div>
                </div>
                <div className="chip" style={{ background: "rgba(79,209,197,.12)", color: "#0F8E7F", border: "1px solid rgba(79,209,197,.35)" }}>● KASKO TEKLİFİ</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 rounded-lg border" style={{ borderColor: "rgba(76,110,245,.3)", background: "rgba(76,110,245,.04)" }}>
                  <div className="w-10 h-10 rounded-md flex items-center justify-center font-mono text-[10px] font-semibold" style={{ background: "#0A0F2C", color: "white" }}>ANA</div>
                  <div className="flex-1">
                    <div className="text-[13px] font-medium">Anadolu Sigorta</div>
                    <div className="text-[11px] text-ink-900/50">Değer kaybı · Asistans · IMM 2M</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[17px] font-semibold tnum">₺ 4.280</div>
                    <div className="text-[10px] font-mono" style={{ color: "#0F8E7F" }}>EN İYİ FİYAT</div>
                  </div>
                </div>
                {[
                  { k: "AXA", label: "AXA Sigorta", extra: "Değer kaybı · Asistans · IMM 1M", price: "₺ 4.710" },
                  { k: "HDI", label: "HDI Sigorta", extra: "Asistans · IMM 2M", price: "₺ 4.920" },
                  { k: "ALL", label: "Allianz", extra: "Premium paket", price: "₺ 5.140" },
                ].map((r) => (
                  <div key={r.k} className="flex items-center gap-3 p-3 rounded-lg border" style={{ borderColor: "rgba(10,15,44,.08)" }}>
                    <div className="w-10 h-10 rounded-md flex items-center justify-center font-mono text-[10px] font-semibold" style={{ background: "#F2F1EE", color: "#0A0F2C" }}>{r.k}</div>
                    <div className="flex-1">
                      <div className="text-[13px] font-medium">{r.label}</div>
                      <div className="text-[11px] text-ink-900/50">{r.extra}</div>
                    </div>
                    <div className="text-[17px] font-semibold tnum">{r.price}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-ink-900/50">
                <span>8 şirket · 23 teklif</span>
                <span>1.2s · paralel sorgulama</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
