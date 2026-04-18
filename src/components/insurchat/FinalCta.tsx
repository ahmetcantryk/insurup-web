import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="relative py-36 overflow-hidden grain" style={{ background: "#050818", color: "white" }}>
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <div className="mesh-orb" style={{ width: 700, height: 700, left: "50%", top: "50%", transform: "translate(-50%,-50%)", background: "radial-gradient(circle,#7C3AED,transparent 60%)", opacity: .35 }}></div>

      <div className="relative max-w-[1100px] mx-auto px-6 text-center">
        {/* central AI orb */}
        <div className="relative mx-auto ai-orb reveal" style={{ width: 120, height: 120 }}>
          <div className="absolute inset-0 rounded-full" style={{ boxShadow: "0 0 80px rgba(124,58,237,.6), 0 0 160px rgba(20,184,166,.3)" }}></div>
        </div>

        <div className="mt-10 chip chip-ai reveal">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#C4B5FD", boxShadow: "0 0 8px #A78BFA" }}></span>
          AI ASİSTAN · HAZIR
        </div>
        <h2 className="display text-[64px] md:text-[104px] leading-[0.95] mt-6 reveal">
          Müşteriniz<br/>
          <span className="ai-grad">hiç beklemesin.</span>
        </h2>
        <p className="mt-7 text-[18px] text-white/65 max-w-[620px] mx-auto reveal">
          İlk AI satış asistanınızı 10 dakikada kurun. Kredi kartı istemiyoruz, kurulum ücretsiz.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center reveal">
          <Link href="/#iletisim" className="inline-flex items-center gap-2 px-7 py-4 rounded-lg font-medium btn-ai text-[15.5px]">
            Hemen Başla
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
          <a href="#canli-demo" className="inline-flex items-center gap-2 px-7 py-4 rounded-lg font-medium btn-ghost-dark text-[15.5px]">Canlı Demo Dene</a>
        </div>
        <div className="mt-12 flex items-center justify-center gap-8 text-[12px] font-mono text-white/50 reveal flex-wrap">
          <span>● 7/24 AI</span>
          <span>● Web + WhatsApp</span>
          <span>● InsurAI altyapısı</span>
        </div>
      </div>
    </section>
  );
}
