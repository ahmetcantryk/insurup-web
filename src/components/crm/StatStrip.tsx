export default function StatStrip() {
  return (
    <section className="relative py-16" style={{ background: "var(--bone-100)" }}>
      <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x" style={{ borderColor: "rgba(10,15,44,.1)" }}>
        <div className="reveal p-6 md:px-10">
          <div className="display text-[52px] text-ink-900 tnum">3<span style={{ color: "#4C6EF5" }}>x</span></div>
          <div className="mt-1 text-ink-900/60 text-[13px]">Ortalama ciro artışı · 12 ay</div>
        </div>
        <div className="reveal p-6 md:px-10">
          <div className="display text-[52px] text-ink-900 tnum">12<span className="text-ink-900/40 text-[28px]">dk</span></div>
          <div className="mt-1 text-ink-900/60 text-[13px]">Ortalama onboarding süresi</div>
        </div>
        <div className="reveal p-6 md:px-10">
          <div className="display text-[52px] text-ink-900 tnum">%70</div>
          <div className="mt-1 text-ink-900/60 text-[13px]">Daha az tuş vuruşu · teklif başına</div>
        </div>
        <div className="reveal p-6 md:px-10">
          <div className="display text-[52px] text-ink-900 tnum">1.2<span className="text-ink-900/40 text-[28px]">s</span></div>
          <div className="mt-1 text-ink-900/60 text-[13px]">8 şirket paralel sorgulama</div>
        </div>
      </div>
    </section>
  );
}
