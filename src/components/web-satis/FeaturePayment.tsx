const CHECK = (
  <span className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(79,209,197,.18)" }}>
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 5 L4 8 L9 2" stroke="#0F8E7F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </span>
);

export default function FeaturePayment() {
  return (
    <section className="relative py-28" style={{ background: "#FAFAF9" }}>
      <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal float1">
          <div className="card-light overflow-hidden" style={{ boxShadow: "0 40px 80px -30px rgba(10,15,44,.25)" }}>
            <div className="flex items-center gap-1.5 px-4 py-3 border-b" style={{ borderColor: "rgba(10,15,44,.08)" }}>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }}></span>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEBC2E" }}></span>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }}></span>
              <span className="ml-3 text-[11px] font-mono text-ink-900/40">🔒 acenteniz.com.tr · ödeme</span>
            </div>
            <div className="p-7" style={{ background: "linear-gradient(180deg,#fff,#F2F1EE)" }}>
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-[11px] font-mono text-ink-900/50">POLİÇE ÜCRETİ</div>
                  <div className="text-[24px] font-semibold tnum tracking-tight">₺ 4.280</div>
                </div>
                <span className="chip" style={{ background: "rgba(79,209,197,.12)", color: "#0F8E7F", border: "1px solid rgba(79,209,197,.3)" }}>🔒 3D SECURE</span>
              </div>
              <div className="rounded-xl p-5 text-white relative overflow-hidden mb-4" style={{ background: "linear-gradient(135deg,#0A0F2C,#1A2247)" }}>
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full" style={{ background: "radial-gradient(circle,#6E8BFF,transparent)", opacity: .35 }}></div>
                <div className="relative">
                  <div className="text-[10px] font-mono text-white/50">KREDİ KARTI</div>
                  <div className="mt-3 font-mono text-[17px] tracking-[.12em] tnum">4242 •••• •••• 4242</div>
                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <div className="text-[9px] font-mono text-white/50">KART SAHİBİ</div>
                      <div className="text-[12px] font-medium mt-0.5">AHMET YILMAZ</div>
                    </div>
                    <div>
                      <div className="text-[9px] font-mono text-white/50">SON KULLANIM</div>
                      <div className="text-[12px] font-mono mt-0.5">12/27</div>
                    </div>
                    <div className="chip" style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", color: "white", fontSize: 9 }}>VISA</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="p-2.5 rounded-md bg-white border" style={{ borderColor: "rgba(10,15,44,.08)" }}>
                  <div className="text-[9px] font-mono text-ink-900/45">CVV</div>
                  <div className="text-[13px] font-mono tnum">•••</div>
                </div>
                <div className="p-2.5 rounded-md bg-white border" style={{ borderColor: "rgba(10,15,44,.08)" }}>
                  <div className="text-[9px] font-mono text-ink-900/45">TAKSİT</div>
                  <div className="text-[13px] font-semibold">12 ay</div>
                </div>
              </div>
              <button className="w-full py-2.5 rounded-lg font-medium text-[13px] btn-primary">Poliçeyi Tamamla · 3D Secure</button>
              <div className="mt-4 flex items-center justify-center gap-3 text-[10px] font-mono text-ink-900/50">
                <span className="chip" style={{ background: "rgba(10,15,44,.04)", border: "1px solid rgba(10,15,44,.08)", color: "rgba(10,15,44,.7)", fontSize: 9 }}>PCI DSS</span>
                <span className="chip" style={{ background: "rgba(10,15,44,.04)", border: "1px solid rgba(10,15,44,.08)", color: "rgba(10,15,44,.7)", fontSize: 9 }}>SSL 256-bit</span>
                <span className="chip" style={{ background: "rgba(10,15,44,.04)", border: "1px solid rgba(10,15,44,.08)", color: "rgba(10,15,44,.7)", fontSize: 9 }}>BDDK</span>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal">
          <div className="eyebrow mb-4" style={{ color: "#0F8E7F" }}>POLİÇELEŞTİRME</div>
          <h2 className="display text-[48px] md:text-[58px] text-ink-900">Güvenli Ödeme.</h2>
          <p className="mt-5 text-ink-900/60 text-[17px] leading-[1.6] max-w-[540px]">
            3D Secure teknolojisiyle güvenli online ödeme.
          </p>
          <ul className="mt-8 space-y-3.5 text-[15.5px]">
            <li className="flex gap-3">{CHECK} 3D Secure teknolojisi.</li>
            <li className="flex gap-3">{CHECK} Güvenli online işlemler.</li>
            <li className="flex gap-3">{CHECK} Sektör uyumlu ödemeler.</li>
          </ul>
          <div className="mt-8 flex items-center gap-3 flex-wrap">
            {["PCI DSS", "SSL 256-bit", "BDDK uyumlu"].map((b) => (
              <span key={b} className="px-3 py-2 rounded-lg font-mono text-[11px]" style={{ background: "white", border: "1px solid rgba(10,15,44,.08)", color: "rgba(10,15,44,.7)" }}>🛡 {b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
