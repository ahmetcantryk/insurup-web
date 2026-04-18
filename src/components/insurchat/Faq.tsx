const ITEMS: Array<{ cat: string; q: string; a: string }> = [
  { cat: "start", q: "InsurChat chatbot'unu nasıl kurarım?", a: "Demo formu aracılığıyla başvur — onboarding ekibi AI asistanını ismi, tonu ve karşılama mesajı ile birlikte yapılandırır, web sitene tek satır kod ile eklenir ve WhatsApp Business hesabına 24 saat içinde bağlanır." },
  { cat: "start", q: "Chatbot'un görünümünü özelleştirebilir miyim?", a: "Evet. Panel üzerinden renk paleti, logo, karşılama mesajı, öneri butonları, konuşma tonu (samimi / profesyonel / esnek) ve çalışma saatlerini düzenleyebilirsin. Marka kimliğin tam senin kontrolünde." },
  { cat: "features", q: "Hangi platformlara entegre edilebilir?", a: "Web sitesi (tek satır script), WhatsApp Business ve InsurUp CRM. Isteğe bağlı olarak Instagram DM ve Facebook Messenger entegrasyonları da mevcut." },
  { cat: "features", q: "Chatbot hangi soruları yanıtlayabilir?", a: "Sigorta ürünleri hakkında bilgi, teklif oluşturma, poliçe sorgulama, yenileme hatırlatma, hasar ihbarı yönlendirmesi, tahsilat ve ödeme linki paylaşımı dahil tüm satış sürecini yönetir." },
  { cat: "ai", q: "Chatbot müşteri bilgilerini CRM'e aktarabilir mi?", a: "Evet. Her konuşma InsurUp CRM'e lead olarak gerçek zamanlı düşer. Müşteri bilgileri (TC, plaka, iletişim) form doldurulmadan otomatik eşleştirilir." },
  { cat: "ai", q: "Chatbot çoklu dil desteği sunuyor mu?", a: "Temel dil Türkçe — InsurAI motoru Türk sigorta terminolojisine özel eğitilmiştir. İngilizce, Arapça ve Rusça için eklenti paketleri geliştirme aşamasındadır." },
];

const TABS: Array<{ cat: string; label: string }> = [
  { cat: "all", label: "Tümü" },
  { cat: "start", label: "Başlarken" },
  { cat: "features", label: "Özellikler" },
  { cat: "ai", label: "Yapay Zeka ve Destek" },
];

export default function Faq() {
  return (
    <section className="relative py-28" style={{ background: "var(--bone-50)" }}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-10 reveal">
          <div className="eyebrow text-ink-900/50 mb-4">SSS · INSURCHAT</div>
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
