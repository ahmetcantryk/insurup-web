"use client";

import { useCallback, useState } from "react";
import LiveWhatsApp from "./LiveWhatsApp";
import { SCENARIOS } from "./scenarios";

function DashboardBack() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ perspective: 1600 }}
    >
      <div
        className="absolute inset-0"
        style={{
          transform: "rotateY(-14deg) rotateX(8deg) rotateZ(-2deg)",
          transformOrigin: "center",
        }}
      >
        <div
          className="card-dark overflow-hidden relative h-full"
          style={{
            background: "#0B0D1F",
            border: "1px solid rgba(124,58,237,.22)",
            boxShadow:
              "0 80px 160px -50px rgba(124,58,237,.5), 0 0 0 1px rgba(255,255,255,.04)",
          }}
        >
          <div className="ai-scan-line" style={{ top: 0 }}></div>
          <div className="win-bar">
            <span></span>
            <span></span>
            <span></span>
            <div className="ml-auto font-mono text-[10px] text-white/40">
              insurchat.ai / dashboard
            </div>
          </div>

          <div
            className="relative p-5"
            style={{ background: "linear-gradient(180deg,#0B0D1F,#050818)" }}
          >
            {/* top metrics */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div
                className="p-3 rounded-lg"
                style={{
                  background: "rgba(124,58,237,.08)",
                  border: "1px solid rgba(124,58,237,.25)",
                }}
              >
                <div className="text-[9px] font-mono text-white/50 tracking-wider">
                  AKTİF KONUŞMA
                </div>
                <div className="text-[20px] font-semibold tnum text-white mt-0.5">
                  47
                </div>
                <div
                  className="text-[9.5px] font-mono"
                  style={{ color: "#5EEAD4" }}
                >
                  +12 son 1s
                </div>
              </div>
              <div
                className="p-3 rounded-lg"
                style={{
                  background: "rgba(20,184,166,.06)",
                  border: "1px solid rgba(20,184,166,.2)",
                }}
              >
                <div className="text-[9px] font-mono text-white/50 tracking-wider">
                  ORT. YANIT
                </div>
                <div className="text-[20px] font-semibold tnum ai-grad mt-0.5">
                  1.8s
                </div>
                <div className="text-[9.5px] font-mono text-white/40">
                  -0.4s bu hafta
                </div>
              </div>
              <div
                className="p-3 rounded-lg"
                style={{
                  background: "rgba(255,255,255,.03)",
                  border: "1px solid rgba(255,255,255,.08)",
                }}
              >
                <div className="text-[9px] font-mono text-white/50 tracking-wider">
                  BUGÜN POLİÇE
                </div>
                <div className="text-[20px] font-semibold tnum text-white mt-0.5">
                  34
                </div>
                <div
                  className="text-[9.5px] font-mono"
                  style={{ color: "#5EEAD4" }}
                >
                  +24%
                </div>
              </div>
            </div>

            {/* bar chart */}
            <div
              className="rounded-lg p-3 mb-4"
              style={{
                background: "rgba(255,255,255,.02)",
                border: "1px solid rgba(255,255,255,.06)",
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-[10px] font-mono text-white/55 tracking-wider">
                  SON 12 SAAT · YANITLAR
                </div>
                <span className="flex items-center gap-1 text-[9.5px] font-mono text-white/60">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "#5EEAD4", boxShadow: "0 0 6px #5EEAD4" }}
                  ></span>
                  canlı
                </span>
              </div>
              <div className="flex items-end gap-1.5 h-[76px]">
                {[28, 42, 36, 55, 48, 64, 58, 78, 68, 89, 74, 96].map((b, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: `${b}%`,
                      background:
                        i >= 8
                          ? "linear-gradient(180deg,#14B8A6,#7C3AED)"
                          : "rgba(124,58,237,.3)",
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* channels + intent */}
            <div className="grid grid-cols-2 gap-3">
              <div
                className="p-3 rounded-lg"
                style={{
                  background: "rgba(255,255,255,.02)",
                  border: "1px solid rgba(255,255,255,.06)",
                }}
              >
                <div className="text-[10px] font-mono text-white/55 tracking-wider mb-2">
                  KANALLAR
                </div>
                <div className="space-y-1.5">
                  {[
                    { name: "WhatsApp", color: "#25D366", v: 31 },
                    { name: "Web chat", color: "#7C3AED", v: 12 },
                    { name: "Instagram", color: "#E1306C", v: 4 },
                  ].map((c) => (
                    <div key={c.name} className="flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: c.color, boxShadow: `0 0 6px ${c.color}` }}
                      ></span>
                      <span className="text-[11px] text-white/80 flex-1">
                        {c.name}
                      </span>
                      <span className="font-mono text-[10px] text-white/55 tnum">
                        {c.v}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="p-3 rounded-lg"
                style={{
                  background: "rgba(255,255,255,.02)",
                  border: "1px solid rgba(255,255,255,.06)",
                }}
              >
                <div className="text-[10px] font-mono text-white/55 tracking-wider mb-2">
                  NİYET TESPİTİ
                </div>
                <div className="space-y-1.5">
                  {[
                    { k: "Teklif", v: 62, c: "#7C3AED" },
                    { k: "Yenileme", v: 24, c: "#A78BFA" },
                    { k: "Hasar", v: 9, c: "#14B8A6" },
                  ].map((it) => (
                    <div key={it.k}>
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-[10.5px] text-white/75">{it.k}</span>
                        <span className="font-mono text-[9.5px] text-white/50 tnum">
                          %{it.v}
                        </span>
                      </div>
                      <div
                        className="h-1 rounded-full overflow-hidden"
                        style={{ background: "rgba(255,255,255,.06)" }}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${it.v}%`, background: it.c }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroVisual() {
  const [idx, setIdx] = useState(0);
  const scenario = SCENARIOS[idx];
  const next = useCallback(() => setIdx((i) => (i + 1) % SCENARIOS.length), []);

  return (
    <div className="relative reveal" style={{ minHeight: 640 }}>
      {/* 3D perspective dashboard in back + centered phone in front */}
      <div className="relative" style={{ minHeight: 640 }}>
        <DashboardBack />

        <div className="relative z-10 flex justify-center pt-6">
          <LiveWhatsApp scenario={scenario} onDone={next} height={480} width={320} />
        </div>
      </div>
    </div>
  );
}
