import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 grain" style={{ background: "#06081A", color: "white" }}>
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <div className="relative max-w-[1280px] mx-auto px-6">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="mb-4" style={{ position: "relative", width: 140, height: 32 }}>
              <Image
                src="/logos/logo-white.svg"
                alt="InsurUp"
                fill
                style={{ objectFit: "contain", objectPosition: "left" }}
              />
            </div>
            <p className="text-white/55 text-[14px] leading-[1.6] max-w-[300px]">Sigorta acenteleri için dijital operasyon platformu. Tekliften poliçeye, tek ekranda.</p>
            <div className="mt-6 flex gap-2">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-md flex items-center justify-center hover:bg-white/10" style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M4 4h4v4H4zM4 10h4v10H4zM10 10h4v2c1-2 3-2 4-2 3 0 4 2 4 5v5h-4v-4c0-2 0-3-2-3s-2 1-2 3v4h-4z"/></svg>
              </a>
              <a href="#" aria-label="X" className="w-9 h-9 rounded-md flex items-center justify-center hover:bg-white/10" style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M18 3h3l-7 8 8 10h-6l-5-6-5 6H3l7-9L2 3h6l4 5z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-md flex items-center justify-center hover:bg-white/10" style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M23 12s0-4-.5-6c-.3-1-1-2-2-2.2C18 3 12 3 12 3s-6 0-8.5.8C2.5 4 2 5 1.5 6 1 8 1 12 1 12s0 4 .5 6c.3 1 1 2 2 2.2C6 21 12 21 12 21s6 0 8.5-.8c1-.3 1.7-1.2 2-2.2.5-2 .5-6 .5-6zm-13 4V8l6 4z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <div className="eyebrow text-white/45 mb-4">ÜRÜNLER</div>
            <ul className="space-y-2.5 text-[14px] text-white/70">
              <li><a href="/crm" className="hover:text-white">InsurUp CRM</a></li>
              <li><a href="/web-satis" className="hover:text-white">Web Satış Platformu</a></li>
              <li><a href="/insurchat" className="hover:text-white">InsurChat</a></li>
              <li><a href="/#entegrasyonlar" className="hover:text-white">Entegrasyonlar</a></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow text-white/45 mb-4">ŞİRKET</div>
            <ul className="space-y-2.5 text-[14px] text-white/70">
              <li><a href="#" className="hover:text-white">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-white">Kariyer</a></li>
              <li><a href="#" className="hover:text-white">Basın Kiti</a></li>
              <li><a href="/#iletisim" className="hover:text-white">İletişim</a></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow text-white/45 mb-4">KAYNAKLAR</div>
            <ul className="space-y-2.5 text-[14px] text-white/70">
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Yardım Merkezi</a></li>
              <li><a href="#" className="hover:text-white">API Dokümantasyonu</a></li>
              <li><a href="#" className="hover:text-white">Durum</a></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow text-white/45 mb-4">YASAL</div>
            <ul className="space-y-2.5 text-[14px] text-white/70">
              <li><a href="#" className="hover:text-white">KVKK Aydınlatma</a></li>
              <li><a href="#" className="hover:text-white">Çerez Politikası</a></li>
              <li><a href="#" className="hover:text-white">Kullanım Şartları</a></li>
              <li><a href="#" className="hover:text-white">Gizlilik</a></li>
            </ul>
          </div>
        </div>
        <div className="divider-dark mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] font-mono text-white/40">
          <div>© 2026 InsurUp Teknoloji A.Ş. · Tüm hakları saklıdır.</div>
          <div className="flex items-center gap-5">
            <span>Türkiye&apos;de tasarlandı</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4FD1C5", boxShadow: "0 0 6px #4FD1C5" }}></span>
              Tüm sistemler çalışıyor
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
