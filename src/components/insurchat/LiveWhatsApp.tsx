"use client";

import { useEffect, useRef, useState } from "react";
import type { M, Scenario } from "./scenarios";

function AiBubble({ badge, children }: { badge?: string; children: React.ReactNode }) {
  return (
    <div className="ml-auto text-[10.5px] py-1.5 px-2.5 rounded-xl rounded-br-sm max-w-[86%]" style={{ background: "#DCF8C6" }}>
      {badge && (
        <div className="flex items-center gap-1 mb-1">
          <span className="chip chip-wa" style={{ fontSize: 9, padding: "2px 7px" }}>{badge}</span>
        </div>
      )}
      <div className="text-ink-900">{children}</div>
    </div>
  );
}

function UserBubble({ text }: { text: string }) {
  return (
    <div className="text-[10.5px] py-1.5 px-2.5 rounded-xl rounded-bl-sm max-w-[78%]" style={{ background: "white" }}>
      <div className="text-ink-900">{text}</div>
    </div>
  );
}

function TypingBubble() {
  return (
    <div className="ml-auto text-[10.5px] py-2 px-2.5 rounded-xl rounded-br-sm inline-flex items-center gap-2" style={{ background: "#DCF8C6" }}>
      <span className="ai-typing"><span></span><span></span><span></span></span>
      <span className="text-ink-900/70 text-[10px]">AI yazıyor</span>
    </div>
  );
}

type Props = {
  scenario: Scenario;
  onDone?: () => void;
  height?: number;
  width?: number;
};

export default function LiveWhatsApp({ scenario, onDone, height = 460, width = 320 }: Props) {
  const [visible, setVisible] = useState<M[]>([]);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [visible, typing]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    setVisible([]);
    setTyping(false);

    let cursor = 300;

    scenario.messages.forEach((m) => {
      const d = m.delay ?? 800;
      if (m.role === "ai" || m.role === "ai-cards") {
        timers.push(setTimeout(() => setTyping(true), cursor));
        cursor += m.typingMs ?? 900;
        timers.push(setTimeout(() => {
          setTyping(false);
          setVisible((v) => [...v, m]);
        }, cursor));
        cursor += d;
      } else {
        timers.push(setTimeout(() => setVisible((v) => [...v, m]), cursor));
        cursor += d;
      }
    });

    if (onDone) {
      timers.push(setTimeout(onDone, cursor + 2500));
    }

    return () => timers.forEach(clearTimeout);
  }, [scenario, onDone]);

  return (
    <div className="relative" style={{ width, zIndex: 10 }}>
      <div className="rounded-[32px] p-2" style={{ background: "#0A0F2C", boxShadow: "0 40px 80px -20px rgba(0,0,0,.65), 0 0 60px -10px rgba(124,58,237,.45)" }}>
        <div className="rounded-[26px] overflow-hidden" style={{ background: "#ECE5DD" }}>
          {/* WA header */}
          <div className="flex items-center gap-3 px-3 py-2.5" style={{ background: "#075E54", color: "white" }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center ai-grad-bg ai-glow-sm">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1 L9 4 V8 L6 11 L3 8 V4 Z" stroke="white" strokeWidth="1.4"/></svg>
            </div>
            <div>
              <div className="text-[12px] font-semibold">InsurChat · Yıldız Sigorta</div>
              <div className="text-[9.5px] opacity-75 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-300"></span>AI asistan · şimdi çevrimiçi</div>
            </div>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="white" className="ml-auto opacity-70"><circle cx="3" cy="7" r="1.5"/><circle cx="7" cy="7" r="1.5"/><circle cx="11" cy="7" r="1.5"/></svg>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="p-3 space-y-2"
            style={{
              height,
              overflowY: "auto",
              overscrollBehavior: "contain",
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60'><circle cx='30' cy='30' r='0.8' fill='%23d4cdc0'/></svg>\")",
              backgroundSize: "60px 60px",
              scrollbarWidth: "none",
            }}
          >
            {visible.map((m, i) => {
              if (m.role === "user") return <UserBubble key={i} text={m.text} />;
              if (m.role === "ai") return <AiBubble key={i} badge={m.badge}>{m.text}</AiBubble>;
              return (
                <AiBubble key={i} badge="AI · 3 TEKLİF HAZIR">
                  <div className="space-y-1 mt-1">
                    {m.cards.map((c) => (
                      <div key={c.k} className="flex items-center gap-2 p-1.5 rounded bg-white/70">
                        <span className="w-4 h-4 rounded text-[7px] font-mono flex items-center justify-center" style={{ background: "#0A0F2C", color: "white" }}>{c.k}</span>
                        <span className="text-[10px] text-ink-900">{c.label}</span>
                        <span className="ml-auto font-semibold tnum text-[11px]" style={c.best ? { color: "#0F8E7F" } : {}}>{c.price}</span>
                      </div>
                    ))}
                  </div>
                </AiBubble>
              );
            })}
            {typing && <TypingBubble />}
          </div>
        </div>
      </div>
    </div>
  );
}
