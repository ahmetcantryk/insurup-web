const BADGES = [
  { icon: "🛡", title: "KVKK Uyumlu", desc: "Kişisel veriler yerel yönetmeliklere uygun işlenir." },
  { icon: "✅", title: "ISO 27001", desc: "Sertifikalı bilgi güvenliği yönetim sistemi." },
  { icon: "🔐", title: "End-to-end Encryption", desc: "Tüm mesajlaşma aktarımda şifrelenir." },
  { icon: "🇹🇷", title: "Türkiye'de sunucu", desc: "Veri merkezleri yurtiçinde, BDDK onaylı." },
];

export default function Security() {
  return (
    <section className="relative py-28" style={{ background: "var(--bone-50)" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="eyebrow text-ink-900/50 mb-4">GÜVENLİK &amp; PRİVASİ</div>
          <h2 className="display text-[44px] md:text-[56px] text-ink-900 max-w-[720px] mx-auto">Verileriniz güvende.</h2>
          <p className="mt-4 text-ink-900/60 text-[15px] max-w-[580px] mx-auto">Müşteri ve konuşma verileri şifreli saklanır; AI modelleri, kişisel veri ile eğitilmez.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {BADGES.map((b) => (
            <div key={b.title} className="reveal card-light p-6 hover-lift text-center">
              <div className="mx-auto w-14 h-14 rounded-2xl flex items-center justify-center text-[24px] mb-4" style={{ background: "linear-gradient(135deg,rgba(124,58,237,.12),rgba(20,184,166,.12))", border: "1px solid rgba(124,58,237,.2)" }}>{b.icon}</div>
              <div className="text-[16px] font-semibold tracking-tight">{b.title}</div>
              <div className="mt-2 text-[13px] text-ink-900/55 leading-[1.5]">{b.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
