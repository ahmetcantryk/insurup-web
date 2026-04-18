import type { ReactNode } from "react";

type Feature = { title: string; desc: string; icon: ReactNode };

const FEATURES: Feature[] = [
  { title: "Paralel teklif motoru", desc: "Tek tıkla 8 sigorta şirketine aynı anda sorgu gönder. Ortalama 1.2 saniyede fiyat karşılaştırması.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4C6EF5" strokeWidth="1.8"><path d="M3 6h18M3 12h18M3 18h12"/><circle cx="20" cy="18" r="2" fill="#4C6EF5" stroke="none"/></svg> },
  { title: "360° müşteri profili", desc: "Poliçeler, iletişim geçmişi, notlar, yenileme tarihleri, tahsilat durumu — tek sayfada.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4C6EF5" strokeWidth="1.8"><circle cx="12" cy="8" r="3"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg> },
  { title: "Otomatik yenileme", desc: "30, 15, 5 gün önce WhatsApp + SMS + e-posta hatırlatmaları. Hiçbir yenileme artık kaçmaz.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4C6EF5" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 6 V12 L16 14"/></svg> },
  { title: "Poliçe arşivi", desc: "Tüm poliçeler dijital olarak saklanır. Tek arama kutusundan plaka, TC ya da isimle bul.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4C6EF5" strokeWidth="1.8"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 8h8M9 12h6M9 16h4"/></svg> },
  { title: "Rol bazlı yetki", desc: "Acente sahibi, yönetici, satış temsilcisi — her role özel panel ve görme yetkileri.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4C6EF5" strokeWidth="1.8"><path d="M12 2 L4 6 V12 C4 17 7.5 21 12 22 C16.5 21 20 17 20 12 V6 Z"/><path d="M8 12 L11 15 L16 9"/></svg> },
  { title: "Gerçek zamanlı rapor", desc: "Prim, komisyon, şube ve temsilci performansı — PDF ve Excel olarak dışa aktar.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4C6EF5" strokeWidth="1.8"><path d="M3 17 L9 11 L13 15 L21 7"/><path d="M16 7 H21 V12"/></svg> },
  { title: "Tahsilat takibi", desc: "Taksit planları, geciken ödemeler, otomatik tahsilat hatırlatmaları — hepsi tek ekranda.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4C6EF5" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9h4M7 13h10"/></svg> },
  { title: "Çoklu şube", desc: "Tüm şubeleri tek panelden yönet. Şubeler arası müşteri aktarımı ve komisyon paylaşımı.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4C6EF5" strokeWidth="1.8"><path d="M4 7h16M4 12h16M4 17h10"/><circle cx="19" cy="17" r="2" fill="#4C6EF5" stroke="none"/></svg> },
  { title: "API & webhook", desc: "REST API ile muhasebe, çağrı merkezi ve ERP'ne bağlan. Her olay için webhook tetikle.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4C6EF5" strokeWidth="1.8"><path d="M4 4h16v6H4zM4 14h16v6H4z"/><path d="M8 7h.01M8 17h.01"/></svg> },
];

export default function FeatureGrid() {
  return (
    <section id="ozellikler" className="relative py-28" style={{ background: "var(--bone-50)" }}>
      <div className="absolute inset-0 grid-bg-light opacity-30"></div>
      <div className="relative max-w-[1280px] mx-auto px-6">
        <div className="flex items-end justify-between mb-14 reveal">
          <div>
            <div className="eyebrow text-ink-900/50 mb-4">ÖZELLİKLER</div>
            <h2 className="display text-[48px] md:text-[60px] text-ink-900 max-w-[720px]">Bir sigorta acentesinin ihtiyaç duyduğu her şey.</h2>
          </div>
          <p className="hidden md:block max-w-[300px] text-ink-900/55 text-[14.5px] leading-[1.6] pb-3">
            CRM&apos;in her modülü, Türkiye pazarındaki acente operasyonu düşünülerek tasarlandı.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="card-light p-7 hover-lift reveal">
              <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-5" style={{ background: "rgba(76,110,245,.1)" }}>{f.icon}</div>
              <h3 className="text-[19px] font-semibold tracking-tight mb-2">{f.title}</h3>
              <p className="text-ink-900/60 text-[14px] leading-[1.6]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
