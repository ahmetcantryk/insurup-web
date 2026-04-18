import type { ReactNode } from "react";

type B = { name: string; icon: ReactNode; bg: string; color: string };

const BRANCHES: B[] = [
  { name: "Trafik",
    bg: "rgba(76,110,245,.1)", color: "#4C6EF5",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11"/><rect x="3" y="11" width="18" height="6" rx="2"/><circle cx="7" cy="17" r="1.5"/><circle cx="17" cy="17" r="1.5"/></svg> },
  { name: "Kasko",
    bg: "rgba(155,107,240,.1)", color: "#9B6BF0",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2 L4 6 V12 C4 17 7.5 21 12 22 C16.5 21 20 17 20 12 V6 Z"/><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11" transform="scale(.55) translate(10, 8)"/></svg> },
  { name: "DASK",
    bg: "rgba(79,209,197,.14)", color: "#0F8E7F",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 12L12 4l9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/></svg> },
  { name: "Konut",
    bg: "rgba(247,115,22,.12)", color: "#F97316",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 12L12 4l9 8"/><path d="M5 10v10h14V10"/><rect x="9" y="13" width="3" height="4"/><rect x="13" y="13" width="3" height="2"/></svg> },
  { name: "TSS",
    bg: "rgba(236,72,153,.12)", color: "#EC4899",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s-8-5-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6-8 11-8 11z" transform="translate(-1 -1)"/><path d="M11 11h2v-2h1v2h2v1h-2v2h-1v-2h-2z"/></svg> },
  { name: "İMM",
    bg: "rgba(10,15,44,.08)", color: "#0A0F2C",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M7 12h10"/></svg> },
];

export default function Branches() {
  return (
    <section className="relative py-28" style={{ background: "var(--bone-100)" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="eyebrow text-ink-900/50 mb-4">DESTEKLENEN BRANŞLAR</div>
          <h2 className="display text-[48px] md:text-[60px] text-ink-900">6 Branşta Satış Yapın.</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {BRANCHES.map((b) => (
            <div key={b.name} className="card-light p-6 hover-lift reveal text-center">
              <div className="mx-auto w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: b.bg, color: b.color }}>
                {b.icon}
              </div>
              <div className="text-[16px] font-semibold tracking-tight">{b.name}</div>
              <div className="mt-2 inline-flex items-center gap-1 font-mono text-[10.5px] text-ink-900/50 px-2 py-0.5 rounded-full" style={{ background: "#FAFAF9", border: "1px solid rgba(10,15,44,.08)" }}>30+ şirket</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
