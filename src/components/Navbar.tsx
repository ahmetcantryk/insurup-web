import Link from "next/link";

export default function Navbar() {
  return (
    <header
      id="nav"
      className="fixed top-0 left-0 right-0 z-50 nav-blur"
      style={{ background: "rgba(10,15,44,.92)", borderBottom: "1px solid rgba(255,255,255,.08)", boxShadow: "0 1px 0 rgba(0,0,0,.15)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between text-white">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="inline-flex items-center justify-center w-7 h-7 rounded-md"
            style={{ background: "linear-gradient(135deg,#6E8BFF,#9B6BF0)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 14 L10 8 L14 12 L20 6"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 6 H20 V10"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="font-semibold tracking-tight text-[17px]">InsurUp</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          <div className="relative group">
            <button className="px-3 py-2 rounded-md text-white/80 hover:text-white hover:bg-white/5 flex items-center gap-1">
              Ürünler
              <svg width="10" height="10" viewBox="0 0 10 10" className="opacity-60">
                <path d="M1 3 L5 7 L9 3" stroke="currentColor" strokeWidth="1.4" fill="none" />
              </svg>
            </button>
            <div className="absolute left-0 top-full mt-2 w-[340px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
              <div
                className="card-dark p-2"
                style={{ background: "rgba(17,24,56,.96)", backdropFilter: "blur(20px)" }}
              >
                <Link href="/crm" className="flex gap-3 p-3 rounded-lg hover:bg-white/5">
                  <div
                    className="w-9 h-9 rounded-md flex items-center justify-center"
                    style={{ background: "rgba(110,139,255,.15)", border: "1px solid rgba(110,139,255,.3)" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#AFBFFF" strokeWidth="1.8">
                      <rect x="3" y="4" width="18" height="16" rx="2" />
                      <path d="M3 9h18M8 14h3" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white text-[13px] font-medium">InsurUp CRM</div>
                    <div className="text-white/50 text-[12px]">Teklif, poliçe, müşteri</div>
                  </div>
                </Link>
                <Link href="/web-satis" className="flex gap-3 p-3 rounded-lg hover:bg-white/5">
                  <div
                    className="w-9 h-9 rounded-md flex items-center justify-center"
                    style={{ background: "rgba(155,107,240,.15)", border: "1px solid rgba(155,107,240,.3)" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A6FF" strokeWidth="1.8">
                      <rect x="3" y="4" width="18" height="16" rx="2" />
                      <path d="M3 9h18" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white text-[13px] font-medium">Web Satış Platformu</div>
                    <div className="text-white/50 text-[12px]">Branded online satış siteleri</div>
                  </div>
                </Link>
                <Link href="/insurchat" className="flex gap-3 p-3 rounded-lg hover:bg-white/5">
                  <div
                    className="w-9 h-9 rounded-md flex items-center justify-center"
                    style={{ background: "rgba(79,209,197,.15)", border: "1px solid rgba(79,209,197,.3)" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4FD1C5" strokeWidth="1.8">
                      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white text-[13px] font-medium">InsurChat</div>
                    <div className="text-white/50 text-[12px]">WhatsApp&apos;ta AI satış asistanı</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <a href="/#nasil" className="px-3 py-2 rounded-md text-white/80 hover:text-white hover:bg-white/5">Çözümler</a>
          <Link href="/fiyatlandirma" className="px-3 py-2 rounded-md text-white/80 hover:text-white hover:bg-white/5">Fiyatlandırma</Link>
          <Link href="/blog" className="px-3 py-2 rounded-md text-white/80 hover:text-white hover:bg-white/5">Blog</Link>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#" className="hidden sm:inline-flex px-3.5 py-2 rounded-md text-sm btn-ghost-dark">Acente Girişi</a>
          <a href="/#iletisim" className="inline-flex px-4 py-2 rounded-md text-sm font-medium btn-primary">Demo Talep Et</a>
        </div>
      </div>
    </header>
  );
}
