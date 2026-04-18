const QUOTE = (color: string, opacity: string) => (
  <svg width="28" height="22" viewBox="0 0 28 22" fill="none" className="mb-5">
    <path d="M0 22V12C0 5 4 1 11 0L12 3C8 4 6 7 6 11H11V22H0ZM17 22V12C17 5 21 1 28 0L29 3C25 4 23 7 23 11H28V22H17Z" fill={color} opacity={opacity}/>
  </svg>
);

const ITEMS = [
  { text: '"Tekliflerimiz 3 kat hızlandı. Eskiden 20 dakikada çıkardığımız kasko teklifini artık 2 dakikada müşteriye WhatsApp\'tan gönderiyoruz."', name: "Mehmet Yıldız", org: "Yıldız Sigorta · Ankara", initials: "MY", gradient: "linear-gradient(135deg,#6E8BFF,#9B6BF0)", quoteColor: "#4C6EF5", quoteOp: ".25" },
  { text: '"Web satış sitemiz 6 ayda 400+ poliçe kesti — hem de biz uyurken. Müşterilerim artık bizi gece yarısı da bulabiliyor."', name: "Ayşe Kara", org: "Ege Sigorta Aracılık · İzmir", initials: "AK", gradient: "linear-gradient(135deg,#9B6BF0,#4FD1C5)", quoteColor: "#9B6BF0", quoteOp: ".3" },
  { text: '"InsurChat gelen mesajların %70\'ini bizim müdahale etmeden cevaplıyor. Ekip artık sadece karmaşık taleplerle ilgileniyor."', name: "Hüseyin Öz", org: "Öz Sigorta · İstanbul", initials: "HÖ", gradient: "linear-gradient(135deg,#4FD1C5,#6E8BFF)", quoteColor: "#0F8E7F", quoteOp: ".3" },
];

export default function Testimonials() {
  return (
    <section className="relative py-28" style={{ background: "#F2F1EE" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-end justify-between mb-14 reveal">
          <div>
            <div className="eyebrow text-ink-900/50 mb-4">ACENTELERDEN</div>
            <h2 className="display text-[48px] md:text-[60px] text-ink-900 max-w-[640px]">1.200+ acente InsurUp ile büyüyor.</h2>
          </div>
          <div className="hidden md:flex gap-6 pb-3">
            <div>
              <div className="text-[28px] font-semibold tnum tracking-tight">4.9<span className="text-ink-900/40">/5</span></div>
              <div className="font-mono text-[11px] text-ink-900/50">MEMNUNİYET</div>
            </div>
            <div>
              <div className="text-[28px] font-semibold tnum tracking-tight">12dk</div>
              <div className="font-mono text-[11px] text-ink-900/50">ORT. KURULUM</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {ITEMS.map((t) => (
            <div key={t.name} className="card-light p-7 reveal">
              {QUOTE(t.quoteColor, t.quoteOp)}
              <p className="text-[16px] leading-[1.55] text-ink-900/85">{t.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full flex items-center justify-center font-mono text-[13px]" style={{ background: t.gradient, color: "white" }}>{t.initials}</div>
                <div>
                  <div className="font-medium text-[14px]">{t.name}</div>
                  <div className="text-[12px] text-ink-900/55">{t.org}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
