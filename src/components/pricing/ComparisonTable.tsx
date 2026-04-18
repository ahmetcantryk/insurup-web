type Cell = boolean | string;
type Row = { feature: string; standart: Cell; dijital: Cell; chat: Cell; group?: boolean };

const ROWS: Row[] = [
  { feature: "CRM", group: true, standart: "", dijital: "", chat: "" },
  { feature: "InsurUp CRM · Temel", standart: true, dijital: true, chat: true },
  { feature: "360° müşteri profili", standart: true, dijital: true, chat: true },
  { feature: "Poliçe arşivi", standart: true, dijital: true, chat: true },
  { feature: "Rol bazlı yetki", standart: "Temel", dijital: true, chat: true },
  { feature: "Çoklu şube", standart: false, dijital: true, chat: true },

  { feature: "Teklif motoru", group: true, standart: "", dijital: "", chat: "" },
  { feature: "Sigorta şirketi entegrasyonu", standart: "10+", dijital: "30+", chat: "30+" },
  { feature: "Paralel teklif sorgulama", standart: "4 şirket", dijital: "8 şirket", chat: "8 şirket" },
  { feature: "Branşlar", standart: "Trafik · Kasko · DASK", dijital: "Tüm branşlar (TSS + İMM)", chat: "Tüm branşlar (TSS + İMM)" },

  { feature: "Web satış platformu", group: true, standart: "", dijital: "", chat: "" },
  { feature: "Branded online satış siten", standart: false, dijital: true, chat: true },
  { feature: "6 branşta online teklif", standart: false, dijital: true, chat: true },
  { feature: "3D Secure ödeme", standart: false, dijital: true, chat: true },
  { feature: "Müşteri portalı", standart: false, dijital: true, chat: true },

  { feature: "AI & Otomasyon", group: true, standart: "", dijital: "", chat: "" },
  { feature: "Otomatik yenileme hatırlatmaları", standart: "E-posta", dijital: "E-posta + SMS + WhatsApp", chat: "E-posta + SMS + WhatsApp" },
  { feature: "InsurChat · WhatsApp AI asistan", standart: false, dijital: false, chat: true },
  { feature: "AI niyet tespiti", standart: false, dijital: false, chat: true },
  { feature: "Otomatik poliçe kesimi", standart: false, dijital: false, chat: true },

  { feature: "Destek", group: true, standart: "", dijital: "", chat: "" },
  { feature: "Destek kanalı", standart: "E-posta", dijital: "Öncelikli canlı destek", chat: "Özel danışman + eğitim" },
  { feature: "Onboarding", standart: "Self-servis", dijital: "Yönlendirmeli", chat: "15 gün birebir" },
  { feature: "Kullanıcı sayısı", standart: "10 kişi", dijital: "Sınırsız", chat: "Sınırsız" },
];

function cellContent(v: Cell) {
  if (v === true) return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="inline-block"><path d="M3 8 L7 12 L13 4" stroke="#0F8E7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  if (v === false) return <span className="text-ink-900/25">—</span>;
  return <span className="text-ink-900/70">{v}</span>;
}

export default function ComparisonTable() {
  return (
    <section className="relative py-24" style={{ background: "#F2F1EE" }}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="eyebrow text-ink-900/50 mb-4">DETAYLI KARŞILAŞTIRMA</div>
          <h2 className="display text-[40px] md:text-[52px] text-ink-900 max-w-[720px] mx-auto">Hangi paket size göre?</h2>
        </div>

        <div className="card-light overflow-hidden reveal" style={{ boxShadow: "0 20px 60px -30px rgba(10,15,44,.15)" }}>
          <div className="overflow-x-auto">
            <table className="w-full text-[14px]" style={{ minWidth: 720 }}>
              <thead>
                <tr style={{ background: "#FAFAF9", borderBottom: "1px solid rgba(10,15,44,.08)" }}>
                  <th className="text-left p-4 font-mono text-[11px] text-ink-900/55 tracking-wider uppercase" style={{ width: "40%" }}>Özellik</th>
                  <th className="p-4 text-center font-mono text-[11px] text-ink-900/55 tracking-wider uppercase">Profesyonel</th>
                  <th className="p-4 text-center font-mono text-[11px] tracking-wider uppercase" style={{ color: "#4C6EF5", background: "rgba(76,110,245,.05)" }}>Dijital Profesyonel</th>
                  <th className="p-4 text-center font-mono text-[11px] tracking-wider uppercase" style={{ color: "#0F8E7F" }}>InsurChat</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r, i) => (
                  r.group ? (
                    <tr key={i} style={{ background: "#FAFAF9" }}>
                      <td colSpan={4} className="px-4 py-2.5 font-mono text-[10.5px] text-ink-900/50 tracking-[0.14em] uppercase">{r.feature}</td>
                    </tr>
                  ) : (
                    <tr key={i} style={{ borderTop: "1px solid rgba(10,15,44,.05)" }}>
                      <td className="px-4 py-3 text-ink-900/85">{r.feature}</td>
                      <td className="px-4 py-3 text-center">{cellContent(r.standart)}</td>
                      <td className="px-4 py-3 text-center" style={{ background: "rgba(76,110,245,.03)" }}>{cellContent(r.dijital)}</td>
                      <td className="px-4 py-3 text-center">{cellContent(r.chat)}</td>
                    </tr>
                  )
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 text-center font-mono text-[12px] text-ink-900/45">
          Tüm paketlerde · KVKK uyumlu · ISO 27001 · 14 gün ücretsiz deneme
        </div>
      </div>
    </section>
  );
}
