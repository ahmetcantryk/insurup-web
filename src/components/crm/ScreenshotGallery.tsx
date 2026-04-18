function WinChrome({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-1.5 px-4 py-3 border-b" style={{ borderColor: "rgba(10,15,44,.08)" }}>
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }}></span>
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEBC2E" }}></span>
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }}></span>
      <span className="ml-3 text-[11px] font-mono text-ink-900/40">{url}</span>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="card-light overflow-hidden" style={{ boxShadow: "0 40px 80px -30px rgba(10,15,44,.2)" }}>
      <WinChrome url="app.insurup.co / dashboard" />
      <div className="grid grid-cols-[220px_1fr] min-h-[480px]">
        <aside className="p-5 border-r" style={{ borderColor: "rgba(10,15,44,.08)", background: "#FAFAF9" }}>
          <div className="text-[10px] font-mono text-ink-900/40 mb-3 tracking-wider">OPERASYON</div>
          <ul className="space-y-1 text-[13px]">
            <li className="flex items-center gap-2 px-2 py-1.5 rounded-md text-ink-900 font-medium" style={{ background: "rgba(76,110,245,.08)" }}><span className="w-1 h-1 rounded-full" style={{ background: "#4C6EF5" }}></span> Dashboard</li>
            <li className="flex items-center gap-2 px-2 py-1.5 rounded-md text-ink-900/65">Teklifler <span className="ml-auto text-[11px] font-mono text-ink-900/45">248</span></li>
            <li className="flex items-center gap-2 px-2 py-1.5 rounded-md text-ink-900/65">Poliçeler <span className="ml-auto text-[11px] font-mono text-ink-900/45">1.4k</span></li>
            <li className="flex items-center gap-2 px-2 py-1.5 rounded-md text-ink-900/65">Müşteriler</li>
            <li className="flex items-center gap-2 px-2 py-1.5 rounded-md text-ink-900/65">Yenilemeler <span className="ml-auto chip text-[9px]" style={{ background: "rgba(76,110,245,.12)", color: "#4C6EF5", padding: "1px 6px" }}>12</span></li>
            <li className="flex items-center gap-2 px-2 py-1.5 rounded-md text-ink-900/65">Raporlar</li>
          </ul>
        </aside>
        <div className="p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="text-[12px] font-mono text-ink-900/45">BU HAFTA</div>
              <div className="text-[28px] font-semibold tnum tracking-tight">₺ 2.847.200 <span className="text-[13px] font-medium ml-2" style={{ color: "#0F8E7F" }}>+34%</span></div>
            </div>
            <div className="flex gap-1">
              <button className="chip" style={{ background: "#F2F1EE", color: "rgba(10,15,44,.65)", border: "1px solid rgba(10,15,44,.08)" }}>7G</button>
              <button className="chip" style={{ background: "#0A0F2C", color: "white" }}>30G</button>
              <button className="chip" style={{ background: "#F2F1EE", color: "rgba(10,15,44,.65)", border: "1px solid rgba(10,15,44,.08)" }}>90G</button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3 mb-5">
            <div className="p-4 rounded-xl" style={{ background: "rgba(76,110,245,.08)", border: "1px solid rgba(76,110,245,.2)" }}>
              <div className="text-[10px] font-mono text-ink-900/50">YENİ TEKLİF</div>
              <div className="text-[24px] font-semibold tnum mt-1">247</div>
              <div className="text-[11px] font-mono" style={{ color: "#0F8E7F" }}>+12%</div>
            </div>
            <div className="p-4 rounded-xl border" style={{ borderColor: "rgba(10,15,44,.08)" }}>
              <div className="text-[10px] font-mono text-ink-900/50">KESİLEN POLİÇE</div>
              <div className="text-[24px] font-semibold tnum mt-1">89</div>
              <div className="text-[11px] font-mono" style={{ color: "#0F8E7F" }}>+18%</div>
            </div>
            <div className="p-4 rounded-xl border" style={{ borderColor: "rgba(10,15,44,.08)" }}>
              <div className="text-[10px] font-mono text-ink-900/50">DÖNÜŞÜM</div>
              <div className="text-[24px] font-semibold tnum mt-1">%36</div>
              <div className="text-[11px] font-mono" style={{ color: "#0F8E7F" }}>+4pt</div>
            </div>
            <div className="p-4 rounded-xl border" style={{ borderColor: "rgba(10,15,44,.08)" }}>
              <div className="text-[10px] font-mono text-ink-900/50">YENİLEME</div>
              <div className="text-[24px] font-semibold tnum mt-1">12</div>
              <div className="text-[11px] font-mono text-ink-900/50">önümüzdeki 7 gün</div>
            </div>
          </div>
          <div className="rounded-xl border p-4" style={{ borderColor: "rgba(10,15,44,.08)" }}>
            <div className="flex items-center justify-between mb-3">
              <div className="text-[13px] font-semibold">Son Aktiviteler</div>
              <div className="text-[11px] font-mono text-ink-900/45">canlı akış</div>
            </div>
            <div className="space-y-1.5 text-[12.5px]">
              {[
                { ini: "MY", bg: "rgba(76,110,245,.14)", color: "#4C6EF5", name: "Mehmet Yıldız · Kasko · Anadolu", badge: "KESİLDİ", badgeStyle: { background: "rgba(79,209,197,.12)", color: "#0F8E7F", border: "1px solid rgba(79,209,197,.3)" }, price: "₺ 4.280" },
                { ini: "AK", bg: "rgba(155,107,240,.14)", color: "#9B6BF0", name: "Ayşe Kara · DASK · AXA", badge: "TEKLİF", badgeStyle: { background: "#F2F1EE", color: "rgba(10,15,44,.7)", border: "1px solid rgba(10,15,44,.08)" }, price: "₺ 312" },
                { ini: "HÖ", bg: "rgba(79,209,197,.14)", color: "#0F8E7F", name: "Hüseyin Öz · Konut · HDI", badge: "YENİLEME", badgeClass: "chip-volt", price: "₺ 1.840" },
                { ini: "FD", bg: "rgba(76,110,245,.14)", color: "#4C6EF5", name: "Fatma Demir · Trafik · Mapfre", badge: "KESİLDİ", badgeStyle: { background: "rgba(79,209,197,.12)", color: "#0F8E7F", border: "1px solid rgba(79,209,197,.3)" }, price: "₺ 2.140" },
              ].map((r, i) => (
                <div key={i} className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-ink-900/[.02]">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono" style={{ background: r.bg, color: r.color }}>{r.ini}</span>
                  <div>{r.name}</div>
                  <span className={`ml-auto chip ${r.badgeClass ?? ""}`} style={{ fontSize: 10, ...(r.badgeStyle ?? {}) }}>{r.badge}</span>
                  <span className="font-mono text-[11px] text-ink-900/55 tnum w-16 text-right">{r.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Customer() {
  return (
    <div className="card-light overflow-hidden" style={{ boxShadow: "0 40px 80px -30px rgba(10,15,44,.2)" }}>
      <WinChrome url="müşteri / mehmet-yildiz" />
      <div className="p-6 min-h-[480px]">
        <div className="flex items-center gap-4 mb-6 pb-6 border-b" style={{ borderColor: "rgba(10,15,44,.08)" }}>
          <div className="w-16 h-16 rounded-full flex items-center justify-center text-[22px] font-mono" style={{ background: "linear-gradient(135deg,#6E8BFF,#9B6BF0)", color: "white" }}>MY</div>
          <div className="flex-1">
            <div className="text-[22px] font-semibold tracking-tight">Mehmet Yıldız</div>
            <div className="text-[12.5px] font-mono text-ink-900/55">TC 1234••••••123 · +90 532 ••• 45 67</div>
          </div>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div><div className="text-[22px] font-semibold tnum">7</div><div className="text-[10px] font-mono text-ink-900/50">POLİÇE</div></div>
            <div><div className="text-[22px] font-semibold tnum">₺ 18.4K</div><div className="text-[10px] font-mono text-ink-900/50">TOPLAM PRİM</div></div>
            <div><div className="text-[22px] font-semibold tnum" style={{ color: "#0F8E7F" }}>%100</div><div className="text-[10px] font-mono text-ink-900/50">YENİLEME</div></div>
          </div>
        </div>
        <div className="grid grid-cols-[1.3fr_1fr] gap-6">
          <div>
            <div className="text-[11px] font-mono text-ink-900/45 mb-3">AKTİF POLİÇELER</div>
            <div className="space-y-2">
              {[
                { k: "ANA", bg: "#0A0F2C", title: "Kasko · 2018 Renault Clio", sub: "34 ABC 123 · Anadolu Sigorta", price: "₺ 4.280", footer: "Kal. 284 gün" },
                { k: "HDI", bg: "#0A0F2C", title: "Trafik · 2018 Renault Clio", sub: "34 ABC 123 · HDI Sigorta", price: "₺ 1.840", footer: "Kal. 284 gün" },
                { k: "AXA", bg: "#9B6BF0", title: "DASK · Kadıköy Konut", sub: "AXA Sigorta", price: "₺ 312", footer: "Yenilenir · 5 gün", warn: true },
              ].map((r, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg border" style={r.warn ? { borderColor: "rgba(155,107,240,.3)", background: "rgba(155,107,240,.04)" } : { borderColor: "rgba(10,15,44,.08)" }}>
                  <div className="w-9 h-9 rounded-md flex items-center justify-center font-mono text-[10px]" style={{ background: r.bg, color: "white" }}>{r.k}</div>
                  <div className="flex-1">
                    <div className="text-[13px] font-medium">{r.title}</div>
                    <div className="text-[11px] font-mono text-ink-900/50">{r.sub}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[13px] font-semibold tnum">{r.price}</div>
                    <div className="text-[10px] font-mono" style={r.warn ? { color: "#9B6BF0" } : { color: "rgba(10,15,44,.5)" }}>{r.footer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[11px] font-mono text-ink-900/45 mb-3">ZAMAN ÇİZELGESİ</div>
            <div className="space-y-3 text-[12.5px]">
              <div className="flex gap-3"><span className="w-2 h-2 rounded-full mt-1.5" style={{ background: "#4C6EF5" }}></span><div><div className="text-ink-900/90">WhatsApp · &quot;DASK yenileme yakın&quot;</div><div className="text-[10.5px] font-mono text-ink-900/45">2 saat önce</div></div></div>
              <div className="flex gap-3"><span className="w-2 h-2 rounded-full mt-1.5" style={{ background: "#0F8E7F" }}></span><div><div className="text-ink-900/90">Kasko poliçesi kesildi · Anadolu</div><div className="text-[10.5px] font-mono text-ink-900/45">Dün · 14:28</div></div></div>
              <div className="flex gap-3"><span className="w-2 h-2 rounded-full mt-1.5" style={{ background: "#9B6BF0" }}></span><div><div className="text-ink-900/90">Teklif alındı · 8 şirket paralel</div><div className="text-[10.5px] font-mono text-ink-900/45">Dün · 14:24</div></div></div>
              <div className="flex gap-3"><span className="w-2 h-2 rounded-full mt-1.5 bg-ink-900/30"></span><div><div className="text-ink-900/75">Not: &quot;Değer kaybı teminatı istiyor&quot;</div><div className="text-[10.5px] font-mono text-ink-900/45">3 gün önce</div></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Quote() {
  const rows = [
    { k: "ANA", label: "Anadolu", price: "₺ 4.280", dk: "✓ Dahil", imm: "2.000.000 ₺", asist: "✓ Asistans", best: true },
    { k: "AXA", label: "AXA", price: "₺ 4.710", dk: "✓ Dahil", imm: "1.000.000 ₺", asist: "✓ Asistans" },
    { k: "HDI", label: "HDI", price: "₺ 4.920", dk: "—", imm: "2.000.000 ₺", asist: "✓ Asistans" },
    { k: "ALL", label: "Allianz", price: "₺ 5.140", dk: "✓ Dahil", imm: "2.000.000 ₺", asist: "✓ Premium" },
    { k: "MAP", label: "Mapfre", price: "₺ 5.290", dk: "✓ Dahil", imm: "1.000.000 ₺", asist: "—" },
    { k: "RAY", label: "Ray", price: "₺ 5.480", dk: "✓ Dahil", imm: "2.000.000 ₺", asist: "✓ Asistans" },
  ];
  return (
    <div className="card-light overflow-hidden" style={{ boxShadow: "0 40px 80px -30px rgba(10,15,44,.2)" }}>
      <WinChrome url="teklif / TKL-2847" />
      <div className="p-6 min-h-[480px]">
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="text-[11px] font-mono text-ink-900/45">KASKO TEKLİFİ · 2018 RENAULT CLIO</div>
            <div className="text-[22px] font-semibold tracking-tight mt-0.5">8 şirket · 23 teklif · 1.2s</div>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-2 rounded-md text-[12px] font-medium border" style={{ borderColor: "rgba(10,15,44,.12)" }}>Filtre</button>
            <button className="px-3 py-2 rounded-md text-[12px] font-medium btn-primary text-white">Poliçeye Dön</button>
          </div>
        </div>
        <div className="grid grid-cols-[auto_1fr_1fr_1fr_1fr_auto] gap-x-4 gap-y-2 text-[12px]">
          <div className="col-span-6 grid grid-cols-subgrid text-[10px] font-mono text-ink-900/45 uppercase tracking-wider pb-2 border-b" style={{ borderColor: "rgba(10,15,44,.08)" }}>
            <div>Şirket</div><div>Prim</div><div>Değer Kaybı</div><div>IMM</div><div>Asistans</div><div>Aksiyon</div>
          </div>
          {rows.map((r) => (
            <div key={r.k} className="col-span-6 grid grid-cols-subgrid items-center py-2.5 rounded-lg -mx-2 px-2" style={r.best ? { background: "rgba(76,110,245,.06)" } : {}}>
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-md flex items-center justify-center text-[10px] font-mono font-semibold" style={r.best ? { background: "#0A0F2C", color: "white" } : { background: "#F2F1EE" }}>{r.k}</span>
                <span className="font-medium">{r.label}</span>
              </div>
              <div className="font-semibold tnum text-[14px]">{r.price}{r.best && <span className="text-[10px] font-mono ml-2" style={{ color: "#0F8E7F" }}>★ EN İYİ</span>}</div>
              <div className={r.dk === "—" ? "text-ink-900/40" : ""}>{r.dk}</div>
              <div>{r.imm}</div>
              <div className={r.asist === "—" ? "text-ink-900/40" : ""}>{r.asist}</div>
              {r.best
                ? <button className="px-3 py-1.5 rounded-md text-[11px] font-medium btn-primary text-white">Seç</button>
                : <button className="px-3 py-1.5 rounded-md text-[11px] font-medium border" style={{ borderColor: "rgba(10,15,44,.15)" }}>Seç</button>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Renewal() {
  const days = [
    { d: "14" }, { d: "15", chip: 2 }, { d: "16" }, { d: "17", today: true }, { d: "18", chip: 3 }, { d: "19" }, { d: "20", chip: 1 },
    { d: "21" }, { d: "22", chip: 4 }, { d: "23", chip: 2 }, { d: "24" }, { d: "25", late: 1 }, { d: "26" }, { d: "27" },
  ];
  return (
    <div className="card-light overflow-hidden" style={{ boxShadow: "0 40px 80px -30px rgba(10,15,44,.2)" }}>
      <WinChrome url="yenilemeler" />
      <div className="p-6 min-h-[480px]">
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="text-[22px] font-semibold tracking-tight">Önümüzdeki 30 gün · 47 yenileme</div>
            <div className="text-[12.5px] font-mono text-ink-900/50 mt-1">Toplam prim · ₺ 184.320 · otomatik hatırlatma aktif</div>
          </div>
          <div className="flex gap-2">
            <button className="chip chip-volt">BU HAFTA · 12</button>
            <button className="chip" style={{ background: "#F2F1EE", color: "#0A0F2C", border: "1px solid rgba(10,15,44,.08)" }}>GELECEK HAFTA · 18</button>
            <button className="chip" style={{ background: "#F2F1EE", color: "#0A0F2C", border: "1px solid rgba(10,15,44,.08)" }}>GEÇ · 3</button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2 mb-5">
          {["PZT","SAL","ÇAR","PER","CUM","CMT","PAZ"].map(d => (
            <div key={d} className="text-[10px] font-mono text-ink-900/40 text-center">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {days.map((c, i) => (
            <div key={i} className="aspect-square rounded-lg p-2 flex flex-col" style={c.today ? { background: "rgba(76,110,245,.08)", border: "1px solid rgba(76,110,245,.3)" } : { border: "1px solid rgba(10,15,44,.08)" }}>
              <span className="text-[11px] font-mono" style={c.today ? { color: "#4C6EF5" } : { color: "rgba(10,15,44,.5)" }}>{c.d}</span>
              {c.today && <div className="mt-auto text-[10px] font-medium" style={{ color: "#4C6EF5" }}>Bugün</div>}
              {c.chip && <span className="mt-auto chip chip-volt" style={{ fontSize: 9, padding: "1px 6px" }}>{c.chip}</span>}
              {c.late && <span className="mt-auto chip" style={{ background: "rgba(255,95,87,.12)", color: "#CC3A32", fontSize: 9, padding: "1px 6px", border: "1px solid rgba(255,95,87,.3)" }}>geç {c.late}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Reports() {
  return (
    <div className="card-light overflow-hidden" style={{ boxShadow: "0 40px 80px -30px rgba(10,15,44,.2)" }}>
      <WinChrome url="raporlar / aylık" />
      <div className="p-6 min-h-[480px]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-[11px] font-mono text-ink-900/45">OCAK 2026 · ÖZET</div>
            <div className="text-[22px] font-semibold tracking-tight mt-0.5">Prim Üretim Raporu</div>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-2 rounded-md text-[12px] font-medium border" style={{ borderColor: "rgba(10,15,44,.12)" }}>PDF indir</button>
            <button className="px-3 py-2 rounded-md text-[12px] font-medium border" style={{ borderColor: "rgba(10,15,44,.12)" }}>Excel indir</button>
          </div>
        </div>
        <div className="grid grid-cols-[2fr_1fr] gap-6">
          <div>
            <div className="h-[220px] rounded-xl p-4 border" style={{ borderColor: "rgba(10,15,44,.08)", background: "#FAFAF9" }}>
              <svg viewBox="0 0 500 180" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="bar-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#6E8BFF"/><stop offset="100%" stopColor="#4C6EF5"/></linearGradient>
                </defs>
                <g fill="url(#bar-g)">
                  {[[10,120,60],[40,100,80],[70,110,70],[100,85,95],[130,70,110],[160,60,120],[190,50,130],[220,40,140],[250,55,125],[280,30,150],[310,20,160],[340,10,170]].map(([x,y,h],i) => (
                    <rect key={i} x={x} y={y} width="18" height={h} rx="3"/>
                  ))}
                </g>
              </svg>
            </div>
            <div className="flex justify-between text-[10px] font-mono text-ink-900/45 mt-2 px-3">
              <span>01</span><span>08</span><span>15</span><span>22</span><span>31</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="p-4 rounded-xl border" style={{ borderColor: "rgba(10,15,44,.08)" }}>
              <div className="text-[10px] font-mono text-ink-900/50">TOPLAM PRİM</div>
              <div className="text-[22px] font-semibold tnum mt-1">₺ 2.847.200</div>
              <div className="text-[11px] font-mono" style={{ color: "#0F8E7F" }}>+34% · geçen aya göre</div>
            </div>
            <div className="p-4 rounded-xl border" style={{ borderColor: "rgba(10,15,44,.08)" }}>
              <div className="text-[10px] font-mono text-ink-900/50">KOMİSYON</div>
              <div className="text-[22px] font-semibold tnum mt-1">₺ 427.080</div>
              <div className="text-[11px] font-mono text-ink-900/50">%15 ort. oran</div>
            </div>
            <div className="p-4 rounded-xl border" style={{ borderColor: "rgba(10,15,44,.08)" }}>
              <div className="text-[10px] font-mono text-ink-900/50">EN YÜKSEK ŞUBE</div>
              <div className="text-[15px] font-semibold mt-1">Kadıköy · ₺ 847K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const TABS = [
  { key: "dash", label: "Dashboard", render: <Dashboard /> },
  { key: "customer", label: "Müşteri Profili", render: <Customer /> },
  { key: "quote", label: "Teklif Karşılaştırma", render: <Quote /> },
  { key: "renewal", label: "Yenileme Takvimi", render: <Renewal /> },
  { key: "reports", label: "Raporlar", render: <Reports /> },
];

export default function ScreenshotGallery() {
  return (
    <section className="relative py-28" style={{ background: "var(--bone-100)" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-10 reveal">
          <div className="eyebrow text-ink-900/50 mb-4">EKRANLAR</div>
          <h2 className="display text-[48px] md:text-[60px] text-ink-900 max-w-[800px] mx-auto">Her ekran, acente günlük işleri için tasarlandı.</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal">
          {TABS.map((t, i) => (
            <button key={t.key} className={`tab-btn${i === 0 ? " active" : ""}`} data-tab={t.key}>{t.label}</button>
          ))}
        </div>

        <div className="reveal">
          {TABS.map((t, i) => (
            <div key={t.key} className={`tab-panel${i === 0 ? " active" : ""}`} data-panel={t.key}>
              {t.render}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
