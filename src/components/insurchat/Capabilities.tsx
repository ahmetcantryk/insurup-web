const CAPS = [
  { emoji: "🎯", title: "Müşteri niyet tespiti", desc: "Teklif mi, yenileme mi, bilgi mi — AI konuşmanın ilk cümlesinden anlar." },
  { emoji: "💬", title: "Doğal dil anlama", desc: "Türkçenin argo, yazım hatası ve kısaltmalarına dayanıklı NLP." },
  { emoji: "📊", title: "Sigorta ürünü tavsiyesi", desc: "Müşteri profiline göre en uygun paketleri otomatik önerir." },
  { emoji: "🔄", title: "CRM senkronizasyonu", desc: "Her konuşma InsurUp CRM&apos;e lead olarak gerçek zamanlı düşer." },
  { emoji: "📱", title: "Multi-channel", desc: "Web widget + WhatsApp Business tek backend, aynı konuşma sürer." },
  { emoji: "🇹🇷", title: "Türkçe optimize", desc: "Sigorta terminolojisiyle eğitilmiş, yerel bir AI asistanı." },
];

export default function Capabilities() {
  return (
    <section className="relative py-28 overflow-hidden grain" style={{ background: "#050818", color: "white" }}>
      <div className="absolute inset-0 grid-bg opacity-40"></div>
      <div className="mesh-orb" style={{ width: 600, height: 400, left: "50%", top: "50%", transform: "translate(-50%,-50%)", background: "radial-gradient(ellipse,#14B8A6,transparent 60%)", opacity: .18 }}></div>

      <div className="relative max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <div className="eyebrow text-white/55 mb-4">YETENEKLER</div>
          <h2 className="display text-[48px] md:text-[60px] max-w-[720px] mx-auto">
            InsurChat <span className="ai-grad">neler yapabilir?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CAPS.map((c) => (
            <div key={c.title} className="reveal p-7 rounded-[20px] relative overflow-hidden group" style={{ background: "linear-gradient(180deg,rgba(124,58,237,.08),rgba(20,184,166,.04))", border: "1px solid rgba(124,58,237,.2)", transition: "all .3s" }}>
              <div className="absolute -inset-px rounded-[20px] pointer-events-none opacity-0 group-hover:opacity-100 transition" style={{ boxShadow: "0 0 40px rgba(124,58,237,.25) inset" }}></div>
              <div className="relative">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[22px] mb-4" style={{ background: "rgba(124,58,237,.14)", border: "1px solid rgba(124,58,237,.3)" }}>
                  {c.emoji}
                </div>
                <h3 className="text-[18px] font-semibold tracking-tight mb-2">{c.title}</h3>
                <p className="text-white/60 text-[14px] leading-[1.6]">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
