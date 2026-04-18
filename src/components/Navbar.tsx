"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type NavProduct = {
  key: string;
  href: string;
  label: string;
  color: string;
  gradFrom: string;
  gradTo: string;
  icon: React.ReactNode;
};

const PRODUCTS: NavProduct[] = [
  {
    key: "crm",
    href: "/crm",
    label: "CRM",
    color: "#4C6EF5",
    gradFrom: "#6E8BFF",
    gradTo: "#4C6EF5",
    icon: (
      <svg width="12" height="12" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="14" height="12" rx="2" />
        <path d="M3 8h14M6 12h3" />
      </svg>
    ),
  },
  {
    key: "web-satis",
    href: "/web-satis",
    label: "Web Satış",
    color: "#9B6BF0",
    gradFrom: "#B794F6",
    gradTo: "#9B6BF0",
    icon: (
      <svg width="12" height="12" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="7.5" />
        <path d="M2.5 10h15" />
        <path d="M10 2.5c2 2 3 4.5 3 7.5s-1 5.5-3 7.5M10 2.5C8 4.5 7 7 7 10s1 5.5 3 7.5" />
      </svg>
    ),
  },
  {
    key: "insurchat",
    href: "/insurchat",
    label: "InsurChat",
    color: "#0F8E7F",
    gradFrom: "#4FD1C5",
    gradTo: "#0F8E7F",
    icon: (
      <svg width="12" height="12" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 11.25a3.33 3.33 0 0 1-3.33 3.33H7.5L3.33 17.5V5a3.33 3.33 0 0 1 3.33-3.33h8.34a3.33 3.33 0 0 1 3.33 3.33z" />
        <path d="M7.5 8h5M7.5 11h3" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [instant, setInstant] = useState(false);
  const [hiddenByScene, setHiddenByScene] = useState(false);
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // External nav-toggle (e.g. pinned full-screen scroll scenes)
  useEffect(() => {
    const onToggle = (e: Event) => {
      const show = (e as CustomEvent<boolean>).detail;
      setHiddenByScene(!show);
    };
    window.addEventListener("nav-toggle", onToggle);
    return () => window.removeEventListener("nav-toggle", onToggle);
  }, []);

  // Route change — reset without animation to avoid "menu jump" during navigation
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      setInstant(true);
      setScrolled(false);
      // Re-enable animations after two frames (one to apply style, one to settle)
      const raf = requestAnimationFrame(() =>
        requestAnimationFrame(() => setInstant(false)),
      );
      return () => cancelAnimationFrame(raf);
    }
  }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  // Inner colors flip based on scroll state
  const textMuted = scrolled ? "rgba(10,15,44,.7)" : "rgba(255,255,255,.8)";
  const textActive = scrolled ? "#0A0F2C" : "#FFFFFF";

  return (
    <header
      id="nav"
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        pointerEvents: hiddenByScene ? "none" : "none",
        transform: hiddenByScene ? "translateY(-140%)" : "translateY(0)",
        transition: "transform 450ms cubic-bezier(.4,.0,.2,1)",
      }}
    >
      <div
        className={
          instant
            ? "transition-none"
            : "transition-[max-width,margin,border-radius,background,border-color,box-shadow,backdrop-filter] duration-500 ease-[cubic-bezier(.2,.7,.2,1)]"
        }
        style={{
          pointerEvents: "auto",
          maxWidth: scrolled ? 1060 : "100%",
          margin: scrolled ? "14px auto 0" : "0 auto",
          borderRadius: scrolled ? 9999 : 0,
          background: scrolled ? "#FFFFFF" : "rgba(10,15,44,.92)",
          border: `1px solid ${scrolled ? "rgba(10,15,44,.08)" : "rgba(255,255,255,.08)"}`,
          backdropFilter: scrolled ? "none" : "saturate(160%) blur(14px)",
          WebkitBackdropFilter: scrolled ? "none" : "saturate(160%) blur(14px)",
          boxShadow: scrolled
            ? "0 14px 40px -12px rgba(10,15,44,.18), 0 2px 6px -2px rgba(10,15,44,.06)"
            : "0 1px 0 rgba(0,0,0,.15)",
        }}
      >
        <div
          className={`flex items-center justify-between h-14 transition-all duration-500 ease-out ${
            scrolled ? "px-4 max-w-none mx-0" : "px-6 max-w-[1280px] mx-auto"
          }`}
        >
          {/* Logo (crossfade) */}
          <Link href="/" className="flex items-center shrink-0 outline-none focus:outline-none" aria-label="InsurUp">
            <div className="relative" style={{ width: 110, height: 26 }}>
              <Image
                src="/logos/logo-white.svg"
                alt="InsurUp"
                fill
                className={instant ? "" : "transition-opacity duration-500"}
                style={{ objectFit: "contain", objectPosition: "left", opacity: scrolled ? 0 : 1 }}
                priority
              />
              <Image
                src="/InsurUp/insurup-logo.svg"
                alt="InsurUp"
                fill
                className={instant ? "" : "transition-opacity duration-500"}
                style={{ objectFit: "contain", objectPosition: "left", opacity: scrolled ? 1 : 0 }}
              />
            </div>
          </Link>

          {/* Center menu — products inline, distinctive branded style when scrolled */}
          <nav className="hidden md:flex items-center gap-0.5 text-sm">
            {PRODUCTS.map((p) => {
              const active = isActive(p.href);

              if (scrolled) {
                // Scrolled: each product has its own gradient "app tile" + underline
                return (
                  <Link
                    key={p.key}
                    href={p.href}
                    className="group relative inline-flex items-center gap-2 px-3 py-2 rounded-full whitespace-nowrap transition-all duration-300 outline-none focus:outline-none focus-visible:outline-none"
                  >
                    {/* Gradient app tile */}
                    <span
                      className="inline-flex items-center justify-center w-6 h-6 rounded-[7px] transition-all duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${p.gradFrom}, ${p.gradTo})`,
                        color: "white",
                        boxShadow: active
                          ? `0 4px 14px -4px ${p.color}88, inset 0 1px 0 rgba(255,255,255,.25)`
                          : `0 1px 2px -1px rgba(10,15,44,.18), inset 0 1px 0 rgba(255,255,255,.2)`,
                        transform: active ? "scale(1.02)" : "scale(1)",
                      }}
                    >
                      {p.icon}
                    </span>
                    <span
                      className="font-medium text-[13.5px] whitespace-nowrap transition-colors duration-300"
                      style={{
                        color: active ? p.color : "rgba(10,15,44,.82)",
                      }}
                    >
                      {p.label}
                    </span>
                    {/* Active gradient underline */}
                    <span
                      className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(90deg, ${p.gradFrom}, ${p.gradTo})`,
                        opacity: active ? 1 : 0,
                      }}
                    />
                    {/* Hover glow underline */}
                    <span
                      className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `linear-gradient(90deg, ${p.gradFrom}, ${p.gradTo})`,
                      }}
                    />
                  </Link>
                );
              }

              // Default (dark nav): simple inline
              return (
                <Link
                  key={p.key}
                  href={p.href}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full transition-colors duration-200 whitespace-nowrap outline-none focus:outline-none focus-visible:outline-none"
                  style={{
                    color: active ? p.color : textMuted,
                    background: active ? "rgba(255,255,255,.06)" : "transparent",
                  }}
                >
                  <span
                    className="inline-flex items-center justify-center"
                    style={{ color: active ? p.color : textMuted, opacity: active ? 1 : 0.75 }}
                  >
                    {p.icon}
                  </span>
                  <span className="font-medium text-[13.5px] whitespace-nowrap">{p.label}</span>
                </Link>
              );
            })}

            <span
              className="mx-1.5 h-4 w-px transition-colors duration-300"
              style={{ background: scrolled ? "rgba(10,15,44,.12)" : "rgba(255,255,255,.14)" }}
            />

            <Link
              href="/fiyatlandirma"
              className="px-3 py-2 rounded-full text-[13.5px] font-medium whitespace-nowrap transition-colors duration-200 outline-none focus:outline-none focus-visible:outline-none"
              style={{
                color: isActive("/fiyatlandirma") ? textActive : textMuted,
                background: isActive("/fiyatlandirma")
                  ? scrolled ? "rgba(10,15,44,.06)" : "rgba(255,255,255,.08)"
                  : "transparent",
              }}
            >
              Fiyatlandırma
            </Link>
            <Link
              href="/blog"
              className="px-3 py-2 rounded-full text-[13.5px] font-medium whitespace-nowrap transition-colors duration-200 outline-none focus:outline-none focus-visible:outline-none"
              style={{
                color: isActive("/blog") ? textActive : textMuted,
                background: isActive("/blog")
                  ? scrolled ? "rgba(10,15,44,.06)" : "rgba(255,255,255,.08)"
                  : "transparent",
              }}
            >
              Blog
            </Link>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="#"
              className="hidden sm:inline-flex px-3.5 py-2 rounded-full text-[13px] font-medium whitespace-nowrap transition-all duration-300 outline-none focus:outline-none focus-visible:outline-none"
              style={{
                color: scrolled ? "rgba(10,15,44,.8)" : "rgba(255,255,255,.9)",
                background: scrolled ? "rgba(10,15,44,.04)" : "rgba(255,255,255,.06)",
                border: `1px solid ${scrolled ? "rgba(10,15,44,.08)" : "rgba(255,255,255,.14)"}`,
              }}
            >
              Acente Girişi
            </a>
            <a
              href="/#iletisim"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-medium btn-primary whitespace-nowrap outline-none focus:outline-none focus-visible:outline-none"
            >
              Demo Talep Et
              <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
