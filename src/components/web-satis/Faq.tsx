const ITEMS: Array<{ cat: string; q: string; a: string }> = [
  { cat: "start", q: "Web satış platformuna nasıl başlarım?", a: "Demo formunu doldur, satış ekibimiz 24 saat içinde sana dönsün. Onboarding ekibi bir şablon seç, logo ve renk paletini ayarla, domain bağla — ortalama 4 dakika 32 saniye içinde sitenin canlıya hazır." },
  { cat: "start", q: "Kurulum için teknik bilgi gerekir mi?", a: "Hayır. Panel üzerinden şablon seçip logo yüklüyor, renk paleti belirliyor ve domain bağlıyorsun. Kod yazmana ya da yazılım ekibine ihtiyaç yok." },
  { cat: "features", q: "Web sitemin görünümünü özelleştirebilir miyim?", a: "6+ profesyonel şablondan birini seç; logo, renkler, tipografi, ürünler, öne çıkan banner ve iletişim bilgileri dahil her şeyi panel üzerinden düzenleyebilirsin. Markanın kimliği tam senin kontrolünde." },
  { cat: "features", q: "Platform üzerinden hangi sigorta ürünlerini satabilirim?", a: "Trafik, Kasko, DASK, Konut, TSS ve İMM — 6 ana branşta 30+ sigorta şirketinin 300+ ürünü için online teklif ve satış yapabilirsin." },
  { cat: "features", q: "Müşteriler online olarak nasıl teklif alır?", a: "Müşteri, site üzerinden plaka ve TC kimlik bilgisini gönderir. Sistem 30+ şirkete paralel sorgu atar ve saniyeler içinde karşılaştırmalı teklif sunar. Müşteri uygun teklifi seçip 3D Secure ile ödeme yapar, poliçe anında kesilir." },
  { cat: "security", q: "Ödeme süreci ne kadar güvenli?", a: "Tüm ödemeler BDDK onaylı, 3D Secure destekli ödeme altyapısı üzerinden gerçekleşir. PCI DSS uyumlu, 256-bit SSL şifreleme ile korunur. Kart bilgileri sunucularında saklanmaz." },
  { cat: "security", q: "Destek hizmetleriniz nasıl çalışır?", a: "Onboarding ekibi ilk kurulumda birebir eşlik eder. Sonrasında e-posta, canlı destek ve telefon üzerinden 7/24 teknik destek alırsın. Dijital Profesyonel pakette özel danışman atanır." },
];

const TABS: Array<{ cat: string; label: string }> = [
  { cat: "all", label: "Tümü" },
  { cat: "start", label: "Başlarken" },
  { cat: "features", label: "Fonksiyonlar" },
  { cat: "security", label: "Güvenlik ve Destek" },
];

export default function Faq() {
  return (
    <section className="relative py-28" style={{ background: "var(--bone-50)" }}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-10 reveal">
          <div className="eyebrow text-ink-900/50 mb-4">SSS · WEB SATIŞ PLATFORMU</div>
          <h2 className="display text-[44px] md:text-[56px] text-ink-900">Sıkça sorulan sorular.</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal">
          {TABS.map((t, i) => (
            <button key={t.cat} className={`faq-tab chip ${i === 0 ? "chip-volt" : "chip-dark"}`} data-cat={t.cat} style={i === 0 ? { background: "#0A0F2C", color: "white", borderColor: "#0A0F2C" } : { background: "#F2F1EE", color: "rgba(10,15,44,.65)", border: "1px solid rgba(10,15,44,.08)" }}>{t.label}</button>
          ))}
        </div>

        <div className="reveal">
          {ITEMS.map((it, idx) => (
            <details key={idx} className={`faq-item py-5 ${idx < ITEMS.length - 1 ? "border-b" : ""}`} data-cat={it.cat} style={{ borderColor: "rgba(10,15,44,.08)" }}>
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
