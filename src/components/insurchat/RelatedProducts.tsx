import Link from "next/link";

export default function RelatedProducts() {
  return (
    <section className="relative py-28" style={{ background: "#F2F1EE" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-end justify-between mb-12 reveal">
          <div>
            <div className="eyebrow text-ink-900/50 mb-4">DİĞER ÜRÜNLERİMİZ</div>
            <h2 className="display text-[40px] md:text-[52px] text-ink-900 max-w-[620px]">Tek platformun gücünü keşfet.</h2>
          </div>
          <Link href="/#urunler" className="font-mono text-[13px] underline underline-offset-4 text-ink-900/70">tüm ürünler →</Link>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <Link href="/crm" className="card-light hover-lift overflow-hidden group relative p-7 reveal" style={{ minHeight: 260 }}>
            <div className="flex items-center justify-between">
              <span className="chip chip-volt">01 · CRM</span>
              <svg className="opacity-40 group-hover:opacity-90 transition" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5"/></svg>
            </div>
            <h3 className="display text-[26px] mt-5 max-w-[380px]">Tüm sigorta operasyonunu tek ekranda yönet.</h3>
            <p className="mt-3 text-ink-900/60 text-[14px] max-w-[380px]">Teklif · Poliçe · Müşteri · Yenileme. 8 şirket paralel sorgulama.</p>
            <div className="mt-6 flex gap-2 flex-wrap">
              <span className="chip" style={{ background: "rgba(76,110,245,.08)", color: "#4C6EF5", border: "1px solid rgba(76,110,245,.2)" }}>Paralel teklif</span>
              <span className="chip" style={{ background: "rgba(76,110,245,.08)", color: "#4C6EF5", border: "1px solid rgba(76,110,245,.2)" }}>360° müşteri</span>
              <span className="chip" style={{ background: "rgba(76,110,245,.08)", color: "#4C6EF5", border: "1px solid rgba(76,110,245,.2)" }}>Yenileme otomasyonu</span>
            </div>
          </Link>

          <Link href="/web-satis" className="hover-lift overflow-hidden group relative p-7 reveal rounded-[20px]" style={{ minHeight: 260, background: "linear-gradient(135deg,#0A0F2C,#9B6BF0)", color: "white" }}>
            <div className="absolute inset-0 grid-bg opacity-30"></div>
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="chip chip-plum">02 · WEB SATIŞ</span>
                <svg className="opacity-40 group-hover:opacity-90 transition" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5"/></svg>
              </div>
              <h3 className="display text-[26px] mt-5 max-w-[380px]">Kendi branded satış siten dakikalar içinde.</h3>
              <p className="mt-3 text-white/70 text-[14px] max-w-[380px]">6 branşta online teklif + 3D Secure ödeme. Kod yazmadan yayına al.</p>
              <div className="mt-6 flex gap-2 flex-wrap">
                <span className="chip chip-dark" style={{ background: "rgba(255,255,255,.1)" }}>6 şablon</span>
                <span className="chip chip-dark" style={{ background: "rgba(255,255,255,.1)" }}>Müşteri portalı</span>
                <span className="chip chip-dark" style={{ background: "rgba(255,255,255,.1)" }}>3D Secure</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
