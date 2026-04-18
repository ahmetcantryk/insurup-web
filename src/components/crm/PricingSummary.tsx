import Link from "next/link";

export default function PricingSummary() {
  return (
    <section className="relative py-28" style={{ background: "var(--bone-50)" }}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="eyebrow text-ink-900/50 mb-4">FİYATLANDIRMA</div>
          <h2 className="display text-[44px] md:text-[52px] text-ink-900">CRM&apos;i hangi pakette kullanırım?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="card-light p-6 hover-lift reveal">
            <div className="eyebrow text-ink-900/50 mb-4">PROFESYONEL</div>
            <h3 className="text-[22px] font-semibold tracking-tight">CRM · Temel</h3>
            <p className="text-[13px] text-ink-900/55 mt-2">10+ şirket · Trafik, Kasko, DASK</p>
            <Link href="/#iletisim" className="block mt-5 text-center py-2.5 rounded-lg text-[13px] font-medium btn-ghost-light">Teklif al</Link>
          </div>
          <div className="p-6 hover-lift reveal relative rounded-2xl text-white" style={{ background: "linear-gradient(180deg,#0F1638,#0A0F2C)", border: "1px solid rgba(110,139,255,.4)", boxShadow: "0 30px 60px -30px rgba(110,139,255,.45)" }}>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 chip chip-volt" style={{ background: "#0A0F2C", fontSize: 10 }}>★ ÖNERİLEN</div>
            <div className="eyebrow text-white/55 mb-4">DİJİTAL PROFESYONEL</div>
            <h3 className="text-[22px] font-semibold tracking-tight">CRM + Web Satış</h3>
            <p className="text-[13px] text-white/65 mt-2">30+ şirket · Tüm branşlar · Otomasyon</p>
            <Link href="/#iletisim" className="block mt-5 text-center py-2.5 rounded-lg text-[13px] font-medium btn-primary">Teklif al</Link>
          </div>
          <div className="card-light p-6 hover-lift reveal">
            <div className="eyebrow mb-4" style={{ color: "#0F8E7F" }}>INSURCHAT</div>
            <h3 className="text-[22px] font-semibold tracking-tight">CRM + Web + AI</h3>
            <p className="text-[13px] text-ink-900/55 mt-2">Dijital Profesyonel + WhatsApp AI</p>
            <Link href="/#iletisim" className="block mt-5 text-center py-2.5 rounded-lg text-[13px] font-medium text-white" style={{ background: "#0A0F2C" }}>Teklif al</Link>
          </div>
        </div>
        <div className="mt-8 text-center font-mono text-[12px] text-ink-900/45">14 gün ücretsiz deneme · KVKK uyumlu · ISO 27001</div>
      </div>
    </section>
  );
}
