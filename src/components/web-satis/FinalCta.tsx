import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="relative py-32 overflow-hidden grain mesh-cta" style={{ color: "white" }}>
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <div className="mesh-orb" style={{ width: 600, height: 600, right: -100, top: -150, background: "radial-gradient(circle,#9B6BF0,transparent 60%)", opacity: .35 }}></div>
      <div className="mesh-orb" style={{ width: 480, height: 480, left: -120, bottom: -100, background: "radial-gradient(circle,#4FD1C5,transparent 60%)", opacity: .28 }}></div>

      <div className="relative max-w-[1100px] mx-auto px-6 text-center">
        <div className="chip chip-plum mb-6 reveal">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A6FF", boxShadow: "0 0 8px #B794F6" }}></span>
          5 DAKİKADA CANLIDA
        </div>
        <h2 className="display text-[64px] md:text-[96px] leading-[0.95] reveal">Online satışa<br/>bugün başla.</h2>
        <p className="mt-7 text-[18px] text-white/65 max-w-[580px] mx-auto reveal">İlk siteni 5 dakikada kur. Kredi kartı vermeden test et.</p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center reveal">
          <Link href="/#iletisim" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-medium btn-primary text-[15px]">
            Ücretsiz Demo Başlat
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
          <a href="#sablonlar" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-medium btn-ghost-dark text-[15px]">Şablonları Gör</a>
        </div>
        <div className="mt-12 flex items-center justify-center gap-8 text-[12px] font-mono text-white/45 reveal flex-wrap">
          <span>● 3D Secure</span>
          <span>● 6 branş · 300+ ürün</span>
          <span>● PCI DSS + SSL 256</span>
        </div>
      </div>
    </section>
  );
}
