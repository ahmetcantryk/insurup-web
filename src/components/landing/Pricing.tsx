export default function Pricing() {
  return (
    <section id="fiyat" className="relative py-28" style={{ background: "#FAFAF9" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-[720px] mx-auto mb-16 reveal">
          <div className="eyebrow text-ink-900/50 mb-4">FİYATLANDIRMA</div>
          <h2 className="display text-[56px] md:text-[72px] text-ink-900">Acentenize göre fiyat.</h2>
          <p className="mt-5 text-ink-900/60 text-[17px] leading-[1.6]">Acentenin büyüklüğüne ve ihtiyaç duyduğun modüllere göre özel fiyat veriyoruz. Tüm paketlerde sınırsız kullanıcı.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <div className="card-light p-7 hover-lift flex flex-col reveal">
            <div className="eyebrow text-ink-900/50 mb-5">01 · PROFESYONEL</div>
            <h3 className="text-[26px] font-semibold tracking-tight">Hızlı teklif ve CRM ihtiyaçları için.</h3>
            <p className="mt-3 text-ink-900/55 text-[14px]">Yeni dijitalleşmeye başlayan acenteler.</p>
            <div className="mt-6 pb-6 border-b" style={{ borderColor: "rgba(10,15,44,.08)" }}>
              <a href="#iletisim" className="block w-full py-3 rounded-lg font-medium text-center btn-ghost-light">Teklif Al</a>
            </div>
            <ul className="mt-6 space-y-3 text-[13.5px] text-ink-900/75 flex-1">
              <li className="flex gap-2.5"><span>✓</span> InsurUp CRM · temel</li>
              <li className="flex gap-2.5"><span>✓</span> 10+ sigorta şirketi entegrasyonu</li>
              <li className="flex gap-2.5"><span>✓</span> Trafik, Kasko, DASK branşları</li>
              <li className="flex gap-2.5"><span>✓</span> Müşteri 360° paneli</li>
              <li className="flex gap-2.5"><span>✓</span> E-posta destek</li>
            </ul>
            <div className="mt-6 font-mono text-[11px] text-ink-900/40">10 kişilik ekibe kadar</div>
          </div>

          <div className="pricing-featured p-7 flex flex-col relative reveal" style={{ color: "white", boxShadow: "0 40px 80px -30px rgba(110,139,255,.45)" }}>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 chip chip-volt" style={{ background: "#0A0F2C", border: "1px solid rgba(110,139,255,.6)", color: "#AFBFFF", fontSize: 10.5, padding: "5px 10px" }}>★ EN ÇOK TERCİH EDİLEN</div>
            <div className="eyebrow text-white/55 mb-5">02 · DİJİTAL PROFESYONEL</div>
            <h3 className="text-[26px] font-semibold tracking-tight">Uçtan uca dijitalleşme için.</h3>
            <p className="mt-3 text-white/55 text-[14px]">Hızla büyüyen acenteler için tam paket.</p>
            <div className="mt-6 pb-6 border-b" style={{ borderColor: "rgba(255,255,255,.08)" }}>
              <a href="#iletisim" className="block w-full py-3 rounded-lg font-medium text-center btn-primary">Teklif Al</a>
            </div>
            <ul className="mt-6 space-y-3 text-[13.5px] text-white/80 flex-1">
              <li className="flex gap-2.5"><span style={{ color: "#7C9BFF" }}>✓</span> <strong className="text-white">Her şey Profesyonel&apos;de</strong></li>
              <li className="flex gap-2.5"><span style={{ color: "#7C9BFF" }}>✓</span> Web Satış Platformu · branded</li>
              <li className="flex gap-2.5"><span style={{ color: "#7C9BFF" }}>✓</span> 30+ sigorta şirketi entegrasyonu</li>
              <li className="flex gap-2.5"><span style={{ color: "#7C9BFF" }}>✓</span> Tüm branşlar · TSS, İMM dahil</li>
              <li className="flex gap-2.5"><span style={{ color: "#7C9BFF" }}>✓</span> Otomatik yenileme + SMS/WhatsApp</li>
              <li className="flex gap-2.5"><span style={{ color: "#7C9BFF" }}>✓</span> Şube ve ekip yönetimi</li>
              <li className="flex gap-2.5"><span style={{ color: "#7C9BFF" }}>✓</span> Öncelikli canlı destek</li>
            </ul>
            <div className="mt-6 font-mono text-[11px] text-white/40">Sınırsız kullanıcı · Sınırsız poliçe</div>
          </div>

          <div className="card-light p-7 hover-lift flex flex-col reveal">
            <div className="eyebrow mb-5" style={{ color: "#0F8E7F" }}>03 · INSURCHAT AKILLI TEKLİF</div>
            <h3 className="text-[26px] font-semibold tracking-tight">7/24 AI satış asistanı.</h3>
            <p className="mt-3 text-ink-900/55 text-[14px]">Dijital Profesyonel üzerine bir üst paket.</p>
            <div className="mt-6 pb-6 border-b" style={{ borderColor: "rgba(10,15,44,.08)" }}>
              <a href="#iletisim" className="block w-full py-3 rounded-lg font-medium text-center text-white" style={{ background: "#0A0F2C" }}>Teklif Al</a>
            </div>
            <ul className="mt-6 space-y-3 text-[13.5px] text-ink-900/75 flex-1">
              <li className="flex gap-2.5"><span style={{ color: "#0F8E7F" }}>✓</span> <strong className="text-ink-900">Her şey Dijital Profesyonel&apos;de</strong></li>
              <li className="flex gap-2.5"><span style={{ color: "#0F8E7F" }}>✓</span> InsurChat · WhatsApp entegrasyonu</li>
              <li className="flex gap-2.5"><span style={{ color: "#0F8E7F" }}>✓</span> AI niyet tespiti + teklif üretimi</li>
              <li className="flex gap-2.5"><span style={{ color: "#0F8E7F" }}>✓</span> Otomatik poliçe kesimi</li>
              <li className="flex gap-2.5"><span style={{ color: "#0F8E7F" }}>✓</span> Özel danışmanlık ve eğitim</li>
            </ul>
            <div className="mt-6 font-mono text-[11px] text-ink-900/40">Özel kurulum · 15 gün onboarding</div>
          </div>
        </div>

        <div className="mt-12 text-center font-mono text-[12px] text-ink-900/40">
          Tüm paketlerde · KVKK uyumlu · ISO 27001 · 14 gün ücretsiz deneme
        </div>
      </div>
    </section>
  );
}
