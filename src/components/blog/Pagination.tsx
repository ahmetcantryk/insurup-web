export default function Pagination() {
  return (
    <section className="relative py-10" style={{ background: "#FAFAF9" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col items-center gap-5">
          <button
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium text-[14px]"
            style={{ background: "white", border: "1px solid rgba(10,15,44,.12)", color: "rgba(10,15,44,.85)" }}
          >
            Daha Fazla Yükle
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex items-center gap-1 font-mono text-[12px] text-ink-900/60">
            <button className="w-9 h-9 rounded-md flex items-center justify-center hover:bg-ink-900/[.04]">←</button>
            {[1, 2, 3].map((p) => (
              <button
                key={p}
                className="w-9 h-9 rounded-md"
                style={
                  p === 1
                    ? { background: "#0A0F2C", color: "white" }
                    : { background: "transparent", color: "rgba(10,15,44,.7)" }
                }
              >
                {p}
              </button>
            ))}
            <span className="px-2">…</span>
            <button className="w-9 h-9 rounded-md hover:bg-ink-900/[.04]">8</button>
            <button className="w-9 h-9 rounded-md flex items-center justify-center hover:bg-ink-900/[.04]">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
