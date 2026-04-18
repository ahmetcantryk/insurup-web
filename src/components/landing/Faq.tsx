const ITEMS: Array<{ q: string; a: string; cat: string }> = [
  { cat: "price", q: "Fiyatlar nasıl belirleniyor?", a: "Acentenin büyüklüğüne, kullanıcı sayısına ve ihtiyaç duyduğun modüllere göre özel fiyat veriyoruz. B2B yapıda custom pricing uyguluyoruz; \"Teklif Al\" butonundan form doldurduktan sonra 24 saat içinde fiyat teklifi gönderiyoruz." },
  { cat: "price", q: "Ücretsiz deneme var mı?", a: "Evet. Tüm paketlerde 14 gün ücretsiz deneme sunuyoruz. Kredi kartı vermeden CRM'i ve web satış platformunu test edebilirsin." },
  { cat: "use", q: "Kurulum ne kadar sürer?", a: "CRM'i 5 dakikada kurabilirsin. Sigorta şirketlerinin aktivasyonu ekranda kendi acentelik numaran ile 1-2 gün içinde tamamlanır. Dijital Profesyonel pakette onboarding süresi ortalama 12 dakikadır." },
  { cat: "use", q: "Mevcut müşteri verilerimi nasıl taşırım?", a: "Excel, CSV ve önceki CRM sistemlerinden toplu veri aktarımı yapıyoruz. Onboarding ekibimiz veri eşleştirmesinde sana özel destek veriyor." },
  { cat: "tech", q: "Verilerim nerede saklanıyor?", a: "Tüm veriler Türkiye'deki KVKK uyumlu veri merkezlerinde saklanır. ISO 27001 sertifikalı altyapı kullanıyoruz. Veriler şifrelenerek depolanır ve sadece sen erişebilirsin." },
  { cat: "tech", q: "Mobilden kullanabilir miyim?", a: "Evet. Web uygulamamız tüm cihazlarda sorunsuz çalışır. iOS ve Android için özel uygulamalarımız App Store ve Google Play'de mevcuttur." },
  { cat: "tech", q: "API ile kendi sistemime bağlayabilir miyim?", a: "Evet. REST API ve webhook altyapımız ile kendi muhasebe, çağrı merkezi veya ERP sistemlerine bağlanabilirsin. Dijital Profesyonel paketinde tüm API erişimi sana açık." },
  { cat: "ins", q: "Hangi branşlarda teklif alabilirim?", a: "Trafik, Kasko, DASK, Konut, TSS, İMM — tüm ana branşlarda anlık teklif alabilirsin. 300+ ürün ve 30+ sigorta şirketi tek ekrandan aktif." },
  { cat: "ins", q: "Ticari sigorta ürünleri destekleniyor mu?", a: "Ticari kasko, iş yeri, mesleki sorumluluk ve TSS ürünleri desteklenmektedir. Yeni ürünler ve branşlar sürekli ekleniyor." },
  { cat: "use", q: "Birden fazla şubem var, nasıl yönetirim?", a: "Şube ve ekip yönetimi modülü ile sınırsız şube açabilir, rol bazlı yetkilendirme ile her ekip üyesine farklı erişim verebilirsin. Merkez ofisten tüm şubeleri tek panelden raporla." },
];

const TABS: Array<{ cat: string; label: string }> = [
  { cat: "all", label: "Tümü" },
  { cat: "price", label: "Ücretlendirme" },
  { cat: "use", label: "Kullanım" },
  { cat: "tech", label: "Teknik" },
  { cat: "ins", label: "Sigorta Ürünleri" },
];

export default function Faq() {
  return (
    <section className="relative py-28" style={{ background: "#FAFAF9" }}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid md:grid-cols-[300px_1fr] gap-12">
          <div className="reveal">
            <div className="eyebrow text-ink-900/50 mb-4">SSS</div>
            <h2 className="display text-[44px] md:text-[52px] text-ink-900 leading-[1]">Merak edilenler.</h2>
            <p className="mt-4 text-ink-900/55 text-[15px] max-w-[260px]">Burada yoksa bize yaz, 24 saat içinde cevap veriyoruz.</p>
            <div className="mt-8 flex flex-wrap gap-2" role="tablist" id="faq-tabs">
              {TABS.map((t, i) => (
                <button key={t.cat} className={`faq-tab chip ${i === 0 ? "chip-volt" : "chip-dark"}`} data-cat={t.cat} style={i === 0 ? { background: "#0A0F2C", color: "white", borderColor: "#0A0F2C" } : {}}>{t.label}</button>
              ))}
            </div>
          </div>

          <div id="faq-list" className="reveal">
            {ITEMS.map((it, idx) => (
              <details key={idx} className={`faq-item py-5 ${idx < ITEMS.length - 1 ? "border-b" : ""}`} data-cat={it.cat} style={{ borderColor: "rgba(10,15,44,.08)" }}>
                <summary className="flex items-center justify-between gap-4 text-[17px] font-medium">
                  {it.q}
                  <span className="chev inline-flex w-6 h-6 items-center justify-center rounded-full border transition-transform" style={{ borderColor: "rgba(10,15,44,.15)" }}>+</span>
                </summary>
                <p className="mt-3 text-ink-900/65 text-[15px] leading-[1.65] max-w-[620px]">{it.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
