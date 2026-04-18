const CHECK = (
  <span className="mt-1 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "rgba(155,107,240,.14)" }}>
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 5 L4 8 L9 2" stroke="#9B6BF0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </span>
);

export default function SplitWeb() {
  return (
    <section className="relative py-28" style={{ background: "#F2F1EE" }}>
      <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal order-2 lg:order-1 float2">
          <div className="card-light overflow-hidden" style={{ boxShadow: "0 40px 80px -30px rgba(10,15,44,.25)" }}>
            <div className="flex items-center gap-1.5 px-4 py-3 border-b" style={{ borderColor: "rgba(10,15,44,.08)", background: "#fff" }}>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }}></span>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEBC2E" }}></span>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }}></span>
              <span className="ml-3 px-2.5 py-1 rounded-md text-[11px] font-mono" style={{ background: "#F2F1EE", color: "#0A0F2C" }}>🔒 acenteniz.insurup.co/teklif</span>
            </div>
            <div className="p-8" style={{ background: "linear-gradient(180deg,#fff,#F2F1EE)" }}>
              <div className="flex items-center justify-between mb-6">
                <div className="text-[13px] font-semibold tracking-tight">Yıldız Sigorta Acentesi</div>
                <div className="font-mono text-[10px] text-ink-900/40">ONLINE TEKLİF</div>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-5">
                <button className="py-2.5 rounded-lg text-[12px] font-medium text-white" style={{ background: "#0A0F2C" }}>Trafik</button>
                <button className="py-2.5 rounded-lg text-[12px]" style={{ background: "white", border: "1px solid rgba(10,15,44,.1)" }}>Kasko</button>
                <button className="py-2.5 rounded-lg text-[12px]" style={{ background: "white", border: "1px solid rgba(10,15,44,.1)" }}>DASK</button>
              </div>
              <div className="space-y-2">
                <div className="p-3 rounded-lg bg-white border" style={{ borderColor: "rgba(10,15,44,.08)" }}>
                  <div className="text-[10px] font-mono text-ink-900/40 mb-0.5">PLAKA</div>
                  <div className="text-[14px] font-semibold tracking-tight">34 ABC 123</div>
                </div>
                <div className="p-3 rounded-lg bg-white border" style={{ borderColor: "rgba(10,15,44,.08)" }}>
                  <div className="text-[10px] font-mono text-ink-900/40 mb-0.5">TC KİMLİK</div>
                  <div className="text-[14px] font-semibold tnum">••••••••123</div>
                </div>
              </div>
              <div className="mt-5 p-4 rounded-xl text-white" style={{ background: "linear-gradient(135deg,#0A0F2C,#1A2247)" }}>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[11px] font-mono text-white/50">EN İYİ TEKLİF</div>
                  <div className="chip chip-green">✓ HAZIR</div>
                </div>
                <div className="flex items-end gap-3">
                  <div className="text-[28px] font-semibold tnum tracking-tight">₺ 1.840</div>
                  <div className="text-[11px] text-white/50 mb-2">yıllık · 12 taksit mümkün</div>
                </div>
                <button className="mt-3 w-full py-2.5 rounded-lg font-medium text-[13px] btn-primary">Poliçeyi Satın Al</button>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal order-1 lg:order-2">
          <div className="eyebrow mb-4" style={{ color: "#9B6BF0" }}>WEB SATIŞ PLATFORMU</div>
          <h2 className="display text-[48px] md:text-[58px] text-ink-900">Müşterilerine 7/24 online teklif.</h2>
          <p className="mt-5 text-ink-900/60 text-[17px] leading-[1.6] max-w-[540px]">Kendi domainin, kendi logon, kendi renklerin. Acenten uyurken bile poliçe satıyor.</p>
          <ul className="mt-8 space-y-3.5 text-[15.5px]">
            <li className="flex gap-3">{CHECK} Anında online teklif — plaka/TC ile 2 saniyede fiyat.</li>
            <li className="flex gap-3">{CHECK} Gerçek zamanlı fiyat karşılaştırma — şeffaf + güvenilir.</li>
            <li className="flex gap-3">{CHECK} Kendi branded siten — kendi domainin + renk paletini kullan.</li>
            <li className="flex gap-3">{CHECK} Kredi kartı + kapıda ödeme — yerel ödeme altyapıları.</li>
          </ul>
          <a href="#iletisim" className="inline-flex items-center gap-2 mt-8 px-5 py-3 rounded-lg font-medium" style={{ background: "#9B6BF0", color: "white", boxShadow: "0 6px 20px -8px rgba(155,107,240,.7)" }}>Satış sitemi kur <span>→</span></a>
        </div>
      </div>
    </section>
  );
}
