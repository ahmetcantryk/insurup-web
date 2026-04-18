"use client";

import { useEffect, useRef, useState } from "react";

type Prompt = { label: string; answer: string };

const PROMPTS: Prompt[] = [
  {
    label: "Kasko teklifi al",
    answer:
      "Tabii! 🚗 Plakanı ve TC kimlik numaranı paylaşır mısın? 8 sigorta şirketinden paralel sorgulama ile sana en uygun 3 teklifi saniyeler içinde hazırlayacağım.",
  },
  {
    label: "Poliçemi görmek istiyorum",
    answer:
      "Seni sigortalı hesabına yönlendiriyorum. Aktif poliçelerin, yenileme tarihlerin ve ödeme bilgilerin portalda tek ekranda. Giriş bağlantısını WhatsApp'tan paylaşayım mı? 🔒",
  },
  {
    label: "Trafik sigortası ne kadar?",
    answer:
      "Trafik sigortası fiyatı araç tipi, model, hasarsızlık indirimi ve ilin gibi faktörlere göre değişir. Plakanı verirsen 30+ şirketten güncel fiyatları 1.2 saniyede listeleyeyim. 📊",
  },
  {
    label: "Hasar var, nasıl yaparım?",
    answer:
      "Geçmiş olsun! 🤝 Hasar ihbarı için plakanı ve poliçe numaranı paylaş, ilgili sigorta şirketinin hasar formunu anında buradan dolduralım. Hasar uzmanımız 24 saat içinde seninle iletişime geçer.",
  },
];

export default function LiveDemo() {
  const [messages, setMessages] = useState<
    Array<{ role: "user" | "ai"; text: string; streaming?: boolean }>
  >([
    { role: "ai", text: "Merhaba 👋 Ben InsurChat. Aşağıdaki sorulardan birini seçerek beni canlı deneyebilirsin." },
  ]);
  const [streaming, setStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = (p: Prompt) => {
    if (streaming) return;
    setMessages((m) => [...m, { role: "user", text: p.label }]);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "ai", text: "", streaming: true }]);
      setStreaming(true);
      let i = 0;
      const id = setInterval(() => {
        i += 2;
        setMessages((m) => {
          const next = [...m];
          const last = next[next.length - 1];
          if (last?.role === "ai") last.text = p.answer.slice(0, i);
          return next;
        });
        if (i >= p.answer.length) {
          clearInterval(id);
          setMessages((m) => {
            const next = [...m];
            const last = next[next.length - 1];
            if (last?.role === "ai") last.streaming = false;
            return next;
          });
          setStreaming(false);
        }
      }, 18);
    }, 500);
  };

  const reset = () => {
    if (streaming) return;
    setMessages([
      { role: "ai", text: "Merhaba 👋 Ben InsurChat. Aşağıdaki sorulardan birini seçerek beni canlı deneyebilirsin." },
    ]);
  };

  return (
    <section id="canli-demo" className="relative py-28 overflow-hidden grain" style={{ background: "#050818", color: "white" }}>
      <div className="absolute inset-0 grid-bg opacity-40"></div>
      <div className="mesh-orb" style={{ width: 520, height: 520, left: "50%", top: "50%", transform: "translate(-50%,-50%)", background: "radial-gradient(circle,#7C3AED,transparent 60%)", opacity: .28 }}></div>

      <div className="relative max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-10 reveal">
          <div className="eyebrow text-white/55 mb-4">CANLI DEMO</div>
          <h2 className="display text-[44px] md:text-[58px] max-w-[720px] mx-auto">
            InsurChat&apos;i <span className="ai-grad">canlı olarak</span> dene.
          </h2>
          <p className="mt-4 text-white/55 text-[15px] max-w-[520px] mx-auto">Bir soruya tıkla — AI yanıtı gerçek zamanlı olarak yazılsın.</p>
        </div>

        <div className="reveal card-dark overflow-hidden ai-glow" style={{ background: "#0B0D1F", border: "1px solid rgba(124,58,237,.3)" }}>
          <div className="flex items-center gap-3 px-4 py-3 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#7C3AED,#14B8A6)" }}>
            <div className="ai-scan-line" style={{ top: 0 }}></div>
            <div className="ai-orb" style={{ width: 26, height: 26 }}></div>
            <div>
              <div className="text-[13px] font-semibold">InsurChat · AI asistan</div>
              <div className="text-[10.5px] font-mono text-white/80">powered by InsurAI</div>
            </div>
            <div className="ml-auto flex items-center gap-2 text-[10.5px] font-mono">
              <span className="w-2 h-2 rounded-full" style={{ background: "#5EEAD4", boxShadow: "0 0 8px #5EEAD4" }}></span>
              canlı
              <button onClick={reset} className="ml-3 px-2 py-1 rounded-md text-[10px]" style={{ background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.2)" }}>Sıfırla</button>
            </div>
          </div>

          <div ref={scrollRef} className="p-5 md:p-7 min-h-[380px] max-h-[520px] overflow-y-auto space-y-3" style={{ background: "radial-gradient(ellipse at top, rgba(124,58,237,.08), transparent 60%), #0B0D1F", overscrollBehavior: "contain" }}>
            {messages.map((m, i) =>
              m.role === "user" ? (
                <div key={i} className="ml-auto max-w-[75%] text-[13.5px] py-2.5 px-3.5 rounded-2xl rounded-br-sm" style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.08)", color: "white" }}>
                  {m.text}
                </div>
              ) : (
                <div key={i} className="max-w-[86%] text-[13.5px] py-2.5 px-3.5 rounded-2xl rounded-bl-sm" style={{ background: "linear-gradient(135deg, rgba(124,58,237,.18), rgba(20,184,166,.12))", border: "1px solid rgba(124,58,237,.3)", color: "white" }}>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="ai-orb" style={{ width: 10, height: 10 }}></span>
                    <span className="font-mono text-[9.5px] text-white/55 tracking-wider">INSURCHAT · AI</span>
                  </div>
                  <div className={m.streaming ? "caret-blink" : ""}>{m.text}</div>
                </div>
              ),
            )}
          </div>

          <div className="p-5 border-t" style={{ borderColor: "rgba(255,255,255,.06)" }}>
            <div className="text-[10.5px] font-mono text-white/40 mb-3 tracking-wider">ÖRNEK SORULAR</div>
            <div className="flex flex-wrap gap-2">
              {PROMPTS.map((p) => (
                <button
                  key={p.label}
                  onClick={() => send(p)}
                  disabled={streaming}
                  className="px-3.5 py-2 rounded-full text-[12.5px] font-medium transition disabled:opacity-40"
                  style={{ background: "rgba(124,58,237,.14)", border: "1px solid rgba(124,58,237,.35)", color: "#C4B5FD" }}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
