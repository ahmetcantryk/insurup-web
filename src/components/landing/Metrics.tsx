export default function Metrics() {
  return (
    <section className="relative py-28" style={{ background: "var(--bone-50)" }}>
      <div className="absolute inset-0 grid-bg-light opacity-40"></div>
      <div className="relative max-w-[1280px] mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-ink-900/10">
          <div className="reveal p-8 md:px-10">
            <div className="eyebrow text-ink-900/50 mb-4">BÜYÜME HIZI</div>
            <div className="display text-[88px] text-ink-900 tnum counter" data-target="3" data-suffix="x">0x</div>
            <div className="mt-2 text-ink-900/60 text-[14px]">Ortalama acente cirosu artışı · 12 ay</div>
          </div>
          <div className="reveal p-8 md:px-10">
            <div className="eyebrow text-ink-900/50 mb-4">ENTEGRASYON</div>
            <div className="display text-[88px] text-ink-900 tnum counter" data-target="30" data-suffix="+">0+</div>
            <div className="mt-2 text-ink-900/60 text-[14px]">Sigorta şirketi · tek çatı</div>
          </div>
          <div className="reveal p-8 md:px-10">
            <div className="eyebrow text-ink-900/50 mb-4">ÜRÜN DESTEĞİ</div>
            <div className="display text-[88px] text-ink-900 tnum counter" data-target="300" data-suffix="+">0+</div>
            <div className="mt-2 text-ink-900/60 text-[14px]">Sigorta ürünü · tüm branşlar</div>
          </div>
          <div className="reveal p-8 md:px-10">
            <div className="eyebrow text-ink-900/50 mb-4">AI ASİSTAN</div>
            <div className="display text-[88px] text-ink-900 tnum">7<span className="text-ink-900/30">/</span>24</div>
            <div className="mt-2 text-ink-900/60 text-[14px]">Kesintisiz teklif ve poliçe</div>
          </div>
        </div>
      </div>
    </section>
  );
}
