export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#FAFAF9", paddingTop: 120 }}>
      <div className="absolute inset-0 grid-bg-light opacity-40 pointer-events-none"></div>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(60% 40% at 50% 0%, rgba(124,58,237,.10), transparent 60%), radial-gradient(40% 30% at 80% 10%, rgba(20,184,166,.08), transparent 70%)",
      }}></div>

      <div className="relative max-w-[1100px] mx-auto px-6 pb-16 text-center reveal">
        <div className="eyebrow text-ink-900/50 mb-5">INSURUP BLOG</div>
        <h1 className="display text-[56px] md:text-[84px] text-ink-900 leading-[0.98] max-w-[900px] mx-auto">
          Sigorta dünyasında{" "}
          <span style={{
            backgroundImage: "linear-gradient(90deg,#4C6EF5,#9B6BF0 60%,#14B8A6)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}>
            dijital dönüşümü
          </span>{" "}
          anlayın.
        </h1>
        <p className="mt-7 text-ink-900/60 text-[18px] leading-[1.6] max-w-[620px] mx-auto">
          Sigorta acenteleri için trendler, stratejiler ve ürün güncellemeleri.
        </p>

        <form className="mt-10 max-w-[560px] mx-auto">
          <label
            className="flex items-center gap-3 px-5 py-3.5 rounded-full transition"
            style={{
              background: "white",
              border: "1px solid rgba(10,15,44,.1)",
              boxShadow: "0 10px 30px -12px rgba(10,15,44,.12)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(10,15,44,.45)" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4-4" />
            </svg>
            <input
              type="search"
              name="q"
              placeholder="Makale ara..."
              className="flex-1 bg-transparent outline-none text-[15px] placeholder:text-ink-900/40"
            />
            <span
              className="hidden sm:inline-flex font-mono text-[10.5px] px-2 py-1 rounded-md"
              style={{ background: "#F2F1EE", color: "rgba(10,15,44,.55)" }}
            >
              ⌘ K
            </span>
          </label>
        </form>
      </div>
    </section>
  );
}
