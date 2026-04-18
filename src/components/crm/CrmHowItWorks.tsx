export default function CrmHowItWorks() {
  return (
    <section className="relative py-28 overflow-hidden grain" style={{ background: "#06081A", color: "white" }}>
      <div className="absolute inset-0 grid-bg opacity-40"></div>
      <div className="mesh-orb" style={{ width: 600, height: 600, left: "50%", top: -200, transform: "translateX(-50%)", background: "radial-gradient(circle,#4C6EF5,transparent 60%)", opacity: .25 }}></div>
      <div className="relative max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <div className="eyebrow text-white/50 mb-4">İŞ AKIŞI</div>
          <h2 className="display text-[48px] md:text-[60px] max-w-[760px] mx-auto">Teklif çağrısından poliçe numarasına — 4 adımda.</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-0 relative">
          <div className="hidden md:block absolute top-[52px] left-[12%] right-[12%] h-px stepper-line"></div>

          {[
            { n: "01", t: "Müşteri ara", d: "Plaka, TC ya da telefondan müşteriyi bul. Yoksa tek satırda yeni kayıt aç.",
              icon: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#AFBFFF" strokeWidth="1.6"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>,
              foot: <div className="mt-4 inline-flex items-center gap-1"><span className="kbd">⌘</span><span className="kbd">K</span></div> },
            { n: "02", t: "Branş seç", d: "Kasko, trafik, DASK, konut, TSS... Form akıllı — eksik veriyi sen doldurmadan sistem tamamlar.",
              icon: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#AFBFFF" strokeWidth="1.6"><path d="M4 8h16M4 14h16"/><circle cx="8" cy="8" r="1.2" fill="#AFBFFF" stroke="none"/><circle cx="16" cy="14" r="1.2" fill="#AFBFFF" stroke="none"/></svg>,
              foot: <div className="mt-4 font-mono text-[11px] text-white/40">300+ ürün</div> },
            { n: "03", t: "Paralel sorgula", d: "8 şirket aynı anda fiyat döner. En uygun teklif otomatik işaretlenir.",
              icon: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#AFBFFF" strokeWidth="1.6"><path d="M13 2 L4 14 H11 L10 22 L20 10 H13 Z"/></svg>,
              foot: <div className="mt-4 font-mono text-[11px]" style={{ color: "#4FD1C5" }}>1.2s ortalama</div>,
              accent: true },
            { n: "04", t: "Poliçeyi kes", d: "Tek tık ile poliçe oluştur. Müşteriye WhatsApp'tan PDF + ödeme linki gönder.",
              icon: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#AFBFFF" strokeWidth="1.6"><path d="M4 12 L10 18 L20 6"/></svg>,
              foot: <div className="mt-4 font-mono text-[11px] text-white/40">Anında arşivlenir</div> },
          ].map((s, i) => (
            <div key={s.n} className={`reveal text-center px-4${i > 0 ? " mt-10 md:mt-0" : ""}`}>
              <div className="relative mx-auto w-[104px] h-[104px] rounded-2xl mb-5 flex items-center justify-center" style={s.accent ? { background: "rgba(110,139,255,.1)", border: "1px solid rgba(110,139,255,.25)", boxShadow: "0 12px 30px -12px rgba(110,139,255,.5)" } : { background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.1)", boxShadow: "0 12px 30px -12px rgba(110,139,255,.3)" }}>
                <span className="font-mono text-[11px] absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-white" style={{ background: "#4C6EF5" }}>{s.n}</span>
                {s.icon}
              </div>
              <h3 className="text-[19px] font-semibold tracking-tight mb-2">{s.t}</h3>
              <p className="text-white/55 text-[13.5px] leading-[1.55] max-w-[230px] mx-auto">{s.d}</p>
              {s.foot}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
