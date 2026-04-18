"use client";

export default function Newsletter() {
  return (
    <div
      className="relative overflow-hidden rounded-[22px] p-8 md:p-10 col-span-1 md:col-span-2 lg:col-span-3"
      style={{
        background: "linear-gradient(135deg,#0A0F2C 0%,#1A2247 50%,#4C6EF5 100%)",
        color: "white",
      }}
    >
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
      <div
        className="absolute pointer-events-none"
        style={{
          width: 420,
          height: 420,
          right: -80,
          top: -120,
          background: "radial-gradient(circle,#9B6BF0,transparent 60%)",
          filter: "blur(30px)",
          opacity: 0.55,
        }}
      ></div>
      <div
        className="absolute pointer-events-none"
        style={{
          width: 380,
          height: 380,
          left: -60,
          bottom: -160,
          background: "radial-gradient(circle,#14B8A6,transparent 60%)",
          filter: "blur(30px)",
          opacity: 0.35,
        }}
      ></div>

      <div className="relative grid md:grid-cols-[1.3fr_1fr] gap-8 items-center">
        <div>
          <div className="eyebrow text-white/55 mb-3">BÜLTEN</div>
          <h3 className="display text-[32px] md:text-[40px] leading-[1.05] max-w-[460px]">Haftalık içerik bültenimize katılın.</h3>
          <p className="mt-3 text-white/65 text-[14.5px] leading-[1.55] max-w-[520px]">
            Sigorta sektöründeki en son trendleri ve InsurUp güncellemelerini her Pazartesi size gönderelim.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] text-white/55">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4FD1C5" }}></span>
            3.500+ sigorta profesyoneli takip ediyor
          </div>
        </div>

        <form
          className="flex flex-col gap-2.5"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="flex items-center gap-2 rounded-full p-1.5" style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.18)", backdropFilter: "blur(10px)" }}>
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 bg-transparent outline-none px-4 text-[14px] text-white placeholder:text-white/45"
            />
            <button className="px-4 py-2 rounded-full font-medium text-[13px] btn-primary whitespace-nowrap">Abone Ol</button>
          </label>
          <div className="font-mono text-[11px] text-white/45 pl-2">Spam yok, istediğinde çıkabilirsin.</div>
        </form>
      </div>
    </div>
  );
}
