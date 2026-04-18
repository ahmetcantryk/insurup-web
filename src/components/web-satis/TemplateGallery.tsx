type Tpl = { name: string; tag: string; gradient: string; textOn?: "light" | "dark" };

const TEMPLATES: Tpl[] = [
  { name: "Aurora", tag: "Modern", gradient: "linear-gradient(135deg,#0A0F2C 0%,#4C6EF5 60%,#9B6BF0 100%)" },
  { name: "Klasik", tag: "Klasik", gradient: "linear-gradient(135deg,#F2F1EE,#D1CEC5)", textOn: "dark" },
  { name: "Minimal", tag: "Minimal", gradient: "linear-gradient(135deg,#FAFAF9,#FFFFFF)", textOn: "dark" },
  { name: "Corporate", tag: "Corporate", gradient: "linear-gradient(135deg,#0A0F2C,#2A3360)" },
  { name: "Sunset", tag: "Vibrant", gradient: "linear-gradient(135deg,#9B6BF0,#F97316)" },
  { name: "Mint", tag: "Fresh", gradient: "linear-gradient(135deg,#0F8E7F,#4FD1C5)" },
];

function TemplateCard({ t }: { t: Tpl }) {
  const onDark = t.textOn !== "dark";
  return (
    <div className="card-light overflow-hidden hover-lift group relative cursor-pointer">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b" style={{ borderColor: "rgba(10,15,44,.08)", background: "#FAFAF9" }}>
        <span className="w-2 h-2 rounded-full" style={{ background: "#FF5F57" }}></span>
        <span className="w-2 h-2 rounded-full" style={{ background: "#FEBC2E" }}></span>
        <span className="w-2 h-2 rounded-full" style={{ background: "#28C840" }}></span>
        <span className="ml-2 text-[9.5px] font-mono text-ink-900/40 truncate">{t.name.toLowerCase()}.insurup.co</span>
      </div>
      <div className="relative h-[180px] overflow-hidden" style={{ background: t.gradient }}>
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="relative p-4 h-full flex flex-col">
          <div className="flex items-center justify-between">
            <div className={`text-[9px] font-mono ${onDark ? "text-white/60" : "text-ink-900/50"}`}>ACENTE</div>
            <div className="flex gap-2">
              {["KASKO","TRAFİK","DASK"].map((l) => (
                <span key={l} className={`text-[8px] font-mono ${onDark ? "text-white/50" : "text-ink-900/45"}`}>{l}</span>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <div className={`text-[14px] font-semibold leading-tight ${onDark ? "text-white" : "text-ink-900"}`}>Kasko fiyatını<br/>30 saniyede al.</div>
            <div className={`mt-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[9.5px] font-semibold ${onDark ? "bg-white text-ink-900" : "bg-ink-900 text-white"}`}>Teklif Al →</div>
          </div>
          <div className="mt-auto grid grid-cols-3 gap-1.5">
            {[0,1,2].map((i) => (
              <div key={i} className={`h-8 rounded ${onDark ? "bg-white/10" : "bg-ink-900/10"}`} style={onDark ? { border: "1px solid rgba(255,255,255,.12)" } : { border: "1px solid rgba(10,15,44,.08)" }}></div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition" style={{ background: "rgba(10,15,44,.55)" }}>
          <div className="px-4 py-2 rounded-lg font-medium text-[13px] btn-primary">Bu şablonu seç</div>
        </div>
      </div>
      <div className="px-4 py-3 flex items-center justify-between">
        <div>
          <div className="text-[14px] font-semibold tracking-tight">{t.name}</div>
          <div className="text-[11px] font-mono text-ink-900/45">{t.tag}</div>
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-40 group-hover:opacity-90 transition"><path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5"/></svg>
      </div>
    </div>
  );
}

export default function TemplateGallery() {
  return (
    <section id="sablonlar" className="relative py-28" style={{ background: "#F2F1EE" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="eyebrow text-ink-900/50 mb-4">ŞABLON GALERİSİ</div>
          <h2 className="display text-[48px] md:text-[60px] text-ink-900 max-w-[820px] mx-auto">Markanıza uygun şablonu seçin.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
          {TEMPLATES.map((t) => <TemplateCard key={t.name} t={t} />)}
        </div>
        <div className="mt-10 flex justify-center reveal">
          <span className="chip chip-volt">Daha fazla şablon yolda →</span>
        </div>
      </div>
    </section>
  );
}
