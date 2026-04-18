import Link from "next/link";

export default function FooterCta() {
  return (
    <section className="relative py-24 overflow-hidden grain mesh-cta" style={{ color: "white" }}>
      <div className="absolute inset-0 grid-bg opacity-25"></div>
      <div className="relative max-w-[1000px] mx-auto px-6 text-center">
        <div className="eyebrow text-white/55 mb-4 reveal">UYGULAMAYA KOY</div>
        <h2 className="display text-[48px] md:text-[72px] leading-[1] reveal">Blog&apos;da bulduklarını<br/>uygulamaya koy.</h2>
        <p className="mt-6 text-[17px] text-white/65 max-w-[580px] mx-auto reveal">
          InsurUp ile sigorta operasyonlarını bugün dijitalleştir.
        </p>
        <div className="mt-9 flex flex-wrap gap-3 justify-center reveal">
          <Link href="/#iletisim" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-medium btn-primary text-[15px]">
            Demo Talep Et
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
          <Link href="/insurchat" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-medium btn-ghost-dark text-[15px]">
            Ürünleri Keşfet
          </Link>
        </div>
      </div>
    </section>
  );
}
