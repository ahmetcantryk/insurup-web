export default function Testimonial() {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: "#050818", color: "white" }}>
      <div className="absolute inset-0 grid-bg opacity-40"></div>
      <div className="mesh-orb" style={{ width: 500, height: 500, left: -100, top: "10%", background: "radial-gradient(circle,#7C3AED,transparent 60%)", opacity: .3 }}></div>
      <div className="mesh-orb" style={{ width: 420, height: 420, right: -80, bottom: -60, background: "radial-gradient(circle,#14B8A6,transparent 60%)", opacity: .25 }}></div>

      <div className="relative max-w-[1100px] mx-auto px-6 text-center reveal">
        <svg width="48" height="38" viewBox="0 0 28 22" fill="none" className="mx-auto mb-8 opacity-50">
          <path d="M0 22V12C0 5 4 1 11 0L12 3C8 4 6 7 6 11H11V22H0ZM17 22V12C17 5 21 1 28 0L29 3C25 4 23 7 23 11H28V22H17Z" fill="#A78BFA"/>
        </svg>
        <blockquote className="display text-[36px] md:text-[56px] leading-[1.1] max-w-[900px] mx-auto">
          Geceleri bile müşteri kaçırmıyoruz artık.{" "}
          <span className="ai-grad">InsurChat</span> sayesinde hafta sonu satışlarımız <span className="ai-grad">%40 arttı.</span>
        </blockquote>
        <div className="mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-full" style={{ background: "rgba(124,58,237,.1)", border: "1px solid rgba(124,58,237,.3)" }}>
          <div className="w-10 h-10 rounded-full flex items-center justify-center font-mono text-[12px] ai-grad-bg ai-glow-sm">HÖ</div>
          <div className="text-left">
            <div className="text-[13.5px] font-semibold">Hüseyin Öz</div>
            <div className="text-[11.5px] font-mono text-white/55">Öz Sigorta · İstanbul</div>
          </div>
        </div>
      </div>
    </section>
  );
}
