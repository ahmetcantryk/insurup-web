const ITEMS = [
  { q: "Mevcut verilerimi nasıl taşırım?", a: "Excel, CSV ve önceki CRM sistemlerinden toplu veri aktarımı yapıyoruz. Onboarding ekibimiz veri eşleştirmesinde ücretsiz destek veriyor — ortalama 1-2 gün içinde tüm müşteri, poliçe ve tahsilat kayıtların taşınmış olur." },
  { q: "Hangi branşlarda teklif alabilirim?", a: "Trafik, Kasko, DASK, Konut, TSS, İMM, Ticari Kasko, İş Yeri, Mesleki Sorumluluk — tüm ana branşlarda anlık teklif alabilirsin. 300+ ürün ve 30+ sigorta şirketi tek ekrandan aktif." },
  { q: "Kaç kullanıcı ekleyebilirim?", a: "Tüm paketlerde sınırsız kullanıcı. Acente sahibi, yönetici, satış temsilcisi gibi farklı rollerde istediğin kadar kişi ekleyebilirsin. Rol bazlı yetkilendirme ile her kullanıcı sadece görmesi gerekene erişir." },
  { q: "Mobilden kullanabilir miyim?", a: "Evet. Web uygulaması tüm cihazlarda sorunsuz çalışır. iOS ve Android için özel uygulamalarımız App Store ve Google Play'de mevcut — saha satış ve acente dışı temaslar için ideal." },
  { q: "Kendi muhasebe sistemime bağlanır mı?", a: "REST API ve webhook altyapımız ile Luca, Mikro, Logo, Netsis gibi popüler muhasebe yazılımlarına bağlanabilirsin. API erişimi Dijital Profesyonel paketinden itibaren açıktır." },
  { q: "Verilerim nerede saklanıyor?", a: "Tüm veriler Türkiye'deki KVKK uyumlu ve ISO 27001 sertifikalı veri merkezlerinde saklanır. AES-256 şifreleme kullanılır ve günde iki kez yedekleme yapılır." },
];

export default function CrmFaq() {
  return (
    <section className="relative py-28" style={{ background: "var(--bone-100)" }}>
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="eyebrow text-ink-900/50 mb-4">SSS · INSURUP CRM</div>
          <h2 className="display text-[44px] md:text-[52px] text-ink-900">CRM hakkında merak edilenler.</h2>
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
