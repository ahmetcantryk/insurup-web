const ROWS = [
  { job: "Kasko teklifi hazırlama", old: "8 portal, ortalama 20 dk", strong: "1.2 saniye", tail: " · tek ekran" },
  { job: "Müşteri geçmişine bakmak", old: "Excel dosyaları arasında arama", strong: "360° profil", tail: " · ⌘K ile tek tuş" },
  { job: "Yenileme takibi", old: "Elle takvim, kaçan yenilemeler", strong: "Otomatik", tail: " · WhatsApp + SMS + e-posta" },
  { job: "Poliçe arşivi", old: "Klasörler, kaybolan PDF'ler", strong: "Anında arşiv", tail: " · aranabilir dijital" },
  { job: "Ekip performansı raporu", old: "Ay sonu manuel toplama", strong: "Gerçek zamanlı", tail: " · PDF/Excel dışa aktarım" },
  { job: "Şube ve rol yönetimi", old: "Paylaşımlı dosyalar, güvenlik yok", strong: "Rol bazlı yetki", tail: " · şube izolasyonu" },
];

export default function Comparison() {
  return (
    <section className="relative py-28" style={{ background: "var(--bone-50)" }}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <div className="eyebrow text-ink-900/50 mb-4">MANUEL VS INSURUP</div>
          <h2 className="display text-[48px] md:text-[60px] text-ink-900 max-w-[820px] mx-auto">Neden tabloyu bırakmalısın?</h2>
        </div>
        <div className="card-light overflow-hidden reveal" style={{ boxShadow: "0 20px 60px -30px rgba(10,15,44,.15)" }}>
          <div className="cmp-row" style={{ background: "#F2F1EE", borderBottom: "1px solid rgba(10,15,44,.08)" }}>
            <div className="font-mono text-[11px] text-ink-900/55 uppercase tracking-wider">İş</div>
            <div className="font-mono text-[11px] text-ink-900/55 uppercase tracking-wider">Eskiden · Excel + Portaller</div>
            <div className="font-mono text-[11px] uppercase tracking-wider" style={{ color: "#4C6EF5" }}>InsurUp CRM</div>
          </div>
          {ROWS.map((r) => (
            <div key={r.job} className="cmp-row">
              <div className="font-medium">{r.job}</div>
              <div className="text-ink-900/65 text-[14px]">{r.old}</div>
              <div className="text-[14px]"><span className="font-semibold">{r.strong}</span><span className="text-ink-900/55">{r.tail}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
