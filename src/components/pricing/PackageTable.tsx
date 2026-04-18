import Link from "next/link";
import { pricingPackages, pricingCategories, type PackageKey } from "@/data/pricing";

function Cell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="inline-block mx-auto">
        <path d="M3 8 L7 12 L13 4" stroke="#0F8E7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (value === false) {
    return <span className="text-ink-900/25 inline-block mx-auto">—</span>;
  }
  if (value === "⏳") {
    return (
      <span className="inline-flex items-center gap-1 font-mono text-[11px]" style={{ color: "#9B6BF0" }}>
        ⏳ Yakında
      </span>
    );
  }
  return <span className="text-ink-900/75 text-[13px]">{value}</span>;
}

const HIGHLIGHT: Record<PackageKey, boolean> = { starter: false, pro: true, digital: false };

export default function PackageTable() {
  return (
    <section id="paketler" className="relative py-24" style={{ background: "#FAFAF9" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <div className="eyebrow text-ink-900/50 mb-4">PAKETLER</div>
          <h2 className="display text-[44px] md:text-[56px] text-ink-900 max-w-[820px] mx-auto leading-[1.02]">
            İhtiyacınıza uygun paketi seçin.
          </h2>
          <p className="mt-5 text-ink-900/60 text-[16.5px] leading-[1.6] max-w-[640px] mx-auto">
            Sigorta satışınızı büyütmek için esnek paketlerimizle yanınızdayız. İhtiyacınıza en uygun çözümü seçin ve hemen kullanmaya başlayın.
          </p>
        </div>

        {/* Package header cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-10 reveal">
          {pricingPackages.map((pkg) => {
            const isFeatured = HIGHLIGHT[pkg.key];
            const cardStyle = isFeatured
              ? { background: "linear-gradient(180deg,#0F1638,#0A0F2C)", color: "white", border: "1px solid rgba(110,139,255,.45)", boxShadow: "0 30px 60px -30px rgba(110,139,255,.45)" }
              : { background: "white", border: "1px solid rgba(10,15,44,.08)" };
            return (
              <div key={pkg.key} className="relative p-7 rounded-[22px] flex flex-col" style={cardStyle}>
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 chip chip-volt" style={{ background: "#0A0F2C", fontSize: 10 }}>★ EN POPÜLER</div>
                )}
                <div className={`eyebrow mb-4 ${isFeatured ? "text-white/55" : "text-ink-900/50"}`}>
                  {pkg.key === "starter" ? "01 · BAŞLANGIÇ" : pkg.key === "pro" ? "02 · PROFESYONEL" : "03 · DİJİTAL"}
                </div>
                <h3 className={`text-[22px] font-semibold tracking-tight ${isFeatured ? "text-white" : "text-ink-900"}`}>{pkg.name}</h3>
                <p className={`mt-2 text-[13.5px] leading-[1.55] ${isFeatured ? "text-white/65" : "text-ink-900/55"}`}>{pkg.description}</p>

                <div className="mt-6 flex items-end gap-1.5">
                  <span className={`display text-[36px] tnum ${isFeatured ? "text-white" : "text-ink-900"}`}>
                    {pkg.priceText}
                  </span>
                  {pkg.pricePeriod && (
                    <span className={`text-[13px] font-mono mb-1.5 ${isFeatured ? "text-white/55" : "text-ink-900/50"}`}>{pkg.pricePeriod}</span>
                  )}
                </div>

                <div className={`mt-4 pt-4 border-t space-y-1.5`} style={{ borderColor: isFeatured ? "rgba(255,255,255,.1)" : "rgba(10,15,44,.08)" }}>
                  {pkg.metrics.map((m) => (
                    <div key={m.label} className="flex items-center justify-between text-[12.5px]">
                      <span className={isFeatured ? "text-white/55" : "text-ink-900/55"}>{m.label}</span>
                      <span className={`font-mono ${isFeatured ? "text-white" : "text-ink-900/80"}`}>{m.value}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="#iletisim"
                  className={`mt-6 text-center py-3 rounded-lg font-medium text-[13.5px] ${isFeatured ? "btn-primary" : "btn-ghost-light"}`}
                >
                  Teklif Al
                </Link>
              </div>
            );
          })}
        </div>

        {/* Full comparison table */}
        <div className="card-light overflow-hidden reveal" style={{ boxShadow: "0 20px 60px -30px rgba(10,15,44,.15)" }}>
          <div className="overflow-x-auto">
            <table className="w-full text-[14px]" style={{ minWidth: 860 }}>
              <thead>
                <tr style={{ background: "#FAFAF9", borderBottom: "1px solid rgba(10,15,44,.08)" }}>
                  <th className="text-left p-4 font-mono text-[11px] text-ink-900/55 tracking-wider uppercase" style={{ width: "40%" }}>Özellik</th>
                  {pricingPackages.map((pkg) => (
                    <th
                      key={pkg.key}
                      className="p-4 text-center font-mono text-[11px] tracking-wider uppercase"
                      style={HIGHLIGHT[pkg.key]
                        ? { color: "#4C6EF5", background: "rgba(76,110,245,.05)" }
                        : { color: "rgba(10,15,44,.55)" }}
                    >
                      {pkg.name.replace(" Paketi", "")}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricingCategories.map((cat, ci) => (
                  <>
                    <tr key={`cat-${ci}`} style={{ background: "#FAFAF9" }}>
                      <td colSpan={4} className="px-4 py-2.5 font-mono text-[10.5px] text-ink-900/55 tracking-[0.14em] uppercase">
                        {cat.title}
                      </td>
                    </tr>
                    {cat.features.map((f, fi) => (
                      <tr key={`r-${ci}-${fi}`} style={{ borderTop: "1px solid rgba(10,15,44,.05)" }}>
                        <td className="px-4 py-3 text-ink-900/85 text-[13.5px]">{f.label}</td>
                        {pricingPackages.map((pkg) => (
                          <td
                            key={`${pkg.key}-${ci}-${fi}`}
                            className="px-4 py-3 text-center"
                            style={HIGHLIGHT[pkg.key] ? { background: "rgba(76,110,245,.03)" } : undefined}
                          >
                            <Cell value={f.values[pkg.key]} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 text-center font-mono text-[12px] text-ink-900/45">
          Tüm paketlerde · KVKK uyumlu · Günlük yedekleme · 2FA · İstediğinde iptal
        </div>
      </div>
    </section>
  );
}
