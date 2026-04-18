import Link from "next/link";

export default function CrmCta() {
  return (
    <section className="relative py-28 overflow-hidden grain mesh-cta" style={{ color: "white" }}>
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <div className="relative max-w-[1000px] mx-auto px-6 text-center">
        <div className="chip chip-volt mb-6 reveal">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#7C9BFF", boxShadow: "0 0 8px #7C9BFF" }}></span>
          CRM&apos;İ BUGÜN DENE
        </div>
        <h2 className="display text-[56px] md:text-[84px] leading-[0.98] reveal">Tek ekrana geç.<br/>Hayatın değişsin.</h2>
        <p className="mt-6 text-[17px] text-white/65 max-w-[580px] mx-auto reveal">14 gün ücretsiz. Kredi kartı istemiyoruz. İlk teklifini 5 dakika içinde al.</p>
        <div className="mt-9 flex flex-wrap gap-3 justify-center reveal">
          <Link href="/#iletisim" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-medium btn-primary text-[15px]">
            Demo Talep Et
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
          <Link href="/#web" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-medium btn-ghost-dark text-[15px]">Web Satış&apos;a bak →</Link>
        </div>
      </div>
    </section>
  );
}
