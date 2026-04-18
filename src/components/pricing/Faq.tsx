const ITEMS = [
  {
    q: "Tanışalım Paketi gerçekten ücretsiz mi?",
    a: "Evet. Tanışalım Paketi kalıcı olarak ücretsizdir — kullanıcı başı ve sigorta şirketi başı ücret alınmaz. Aylık 250 karşılaştırmalı teklif ve 50 poliçeleştirme limiti mevcuttur. Sınıra yaklaştığında Profesyonel Pakete geçebilirsin.",
  },
  {
    q: "Profesyonel ve Dijital Profesyonel arasındaki fark nedir?",
    a: "Profesyonel Paket (5.000₺/ay) sınırsız karşılaştırmalı teklif, sınırsız poliçeleştirme, özel call-center entegrasyonu ve 3D Secure doğrulama içerir. Dijital Profesyonel Paket (25.000₺/ay) ise bunlara ek olarak tam entegre branded web sitesi, 7/24 müşteri portalı, online poliçe satışı ve özel API desteği sunar.",
  },
  {
    q: "Kullanıcı başı ve sigorta şirketi başı ücret nasıl işliyor?",
    a: "Profesyonel ve Dijital Profesyonel paketlerde her ek kullanıcı için 150₺/ay, her sigorta şirketi entegrasyonu için 500₺/ay alınır. Tanışalım Paketinde her iki kalem de sınırsız ve ücretsizdir.",
  },
  {
    q: "Paketler arasında geçiş yapabilir miyim?",
    a: "Evet, her zaman üst pakete yükseltebilirsin — fiyat farkı kalan günlere göre orantılanır. Aşağı geçişler ise bir sonraki faturalama dönemi başında aktif olur. Geçiş sırasında veri kaybı olmaz.",
  },
  {
    q: "Ödeme yöntemleri neler?",
    a: "Kredi kartı (Visa, Mastercard, Troy), EFT/Havale ve yıllık abonelik için kurumsal fatura ile ödeme seçenekleri mevcuttur. Yıllık ödeme seçiminde 2 ay ücretsiz kullanım avantajı uygulanır.",
  },
  {
    q: "Sürekli destek hangi paketlerde var?",
    a: "Profesyonel ve Dijital Profesyonel paketlerde haftaiçi 9-18 özel taahhütlü destek sunulur. Tanışalım Paketinde destek talepleri sıraya alınır. Dijital Profesyonel Paket ayrıca CRM & dijitalleşme eğitimleri içerir.",
  },
  {
    q: "İptal politikası nasıl?",
    a: "İstediğin zaman iptal edebilirsin — gizli ücret veya cezai şart yoktur. İptal sonrası verilerin 90 gün boyunca indirilebilir arşivde saklanır; bu süre içinde hesabını yeniden aktifleştirebilirsin.",
  },
];

export default function Faq() {
  return (
    <section className="relative py-24" style={{ background: "#F2F1EE" }}>
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-10 reveal">
          <div className="eyebrow text-ink-900/50 mb-4">SSS · FİYATLANDIRMA</div>
          <h2 className="display text-[40px] md:text-[52px] text-ink-900">Merak edilenler.</h2>
        </div>
        <div className="reveal">
          {ITEMS.map((it, i) => (
            <details key={i} className={`py-5 ${i < ITEMS.length - 1 ? "border-b" : ""}`} style={{ borderColor: "rgba(10,15,44,.08)" }}>
              <summary className="flex items-center justify-between gap-4 text-[17px] font-medium">
                {it.q}
                <span className="chev inline-flex w-6 h-6 items-center justify-center rounded-full border transition-transform" style={{ borderColor: "rgba(10,15,44,.15)" }}>+</span>
              </summary>
              <p className="mt-3 text-ink-900/65 text-[15px] leading-[1.65] max-w-[720px]">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
