import Link from "next/link";

const COMPANIES = ["Anadolu", "AXA", "Allianz", "HDI", "Türkiye", "Ak Sigorta", "Mapfre", "Ray", "Sompo", "Zurich", "Quick", "+ 20 daha"];

export default function IntegrationsSummary() {
  return (
    <section className="relative py-28" style={{ background: "var(--bone-100)" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-end justify-between mb-10 reveal">
          <div>
            <div className="eyebrow text-ink-900/50 mb-4">ENTEGRASYONLAR</div>
            <h2 className="display text-[44px] md:text-[54px] text-ink-900 max-w-[640px]">CRM, 30+ sigorta şirketiyle konuşur.</h2>
          </div>
          <Link href="/#entegrasyonlar" className="font-mono text-[13px] underline underline-offset-4 text-ink-900/70">tüm entegrasyonlar →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 reveal">
          {COMPANIES.map((c) => (
            <div key={c} className="card-light p-5 flex items-center justify-center min-h-[80px] hover-lift">
              <div className="font-mono text-[14px] text-ink-900/70">{c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
