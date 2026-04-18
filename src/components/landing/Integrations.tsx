"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Lane = {
  top: number;
  accent?: boolean;
  // durations in seconds — idle (slow) and fast (active scroll) modes
  idle: number;
  fast: number;
  ltr: string[];
  rtl: string[];
};

const LANES: Lane[] = [
  {
    top: 60,
    idle: 32,
    fast: 6,
    ltr: ["Anadolu Sigorta", "HDI Sigorta", "Mapfre Sigorta", "Ray Sigorta", "Türkiye Sigorta"],
    rtl: ["Neova Sigorta", "Unico Sigorta", "Doğa Sigorta", "Quick Sigorta", "Generali Sigorta"],
  },
  {
    top: 150,
    accent: true,
    idle: 22,
    fast: 4,
    ltr: ["AXA Sigorta", "Sompo Sigorta", "Orient Sigorta", "Ziraat Sigorta", "Halk Sigorta"],
    rtl: ["Zurich Sigorta", "Groupama Sigorta", "Corpus Sigorta", "Ziraat Hayat", "Vakıf Emeklilik"],
  },
  {
    top: 240,
    idle: 38,
    fast: 7.5,
    ltr: ["Allianz Sigorta", "Ak Sigorta", "Güneş Sigorta", "Aksigorta", "Fiba Sigorta"],
    rtl: ["Türk Nippon Sigorta", "Allianz Yaşam", "Magdeburger Sigorta", "Ankara Sigorta", "Ethica Sigorta"],
  },
];

const ICON_PATH =
  "M27.9437 1.87079L25.8746 9.7929C25.6045 10.827 26.2022 11.6637 27.2109 11.6637H34.9385C35.9472 11.6637 36.5449 12.5004 36.2748 13.5345L33.7143 23.3304H24.159C23.1503 23.3304 22.5525 22.4937 22.8227 21.4596L24.8918 13.5374C25.1619 12.5034 24.5642 11.6667 23.5555 11.6667H15.8279C14.8192 11.6667 14.2214 10.83 14.4916 9.7959L17.0521 0H26.6074C27.6161 0 28.2139 0.8367 27.9437 1.87079ZM19.9428 19.9835L21.943 22.7852H21.9458C22.1987 23.1358 22.2648 23.6102 22.1355 24.1081L19.2876 34.9999H9.73228C8.72359 34.9999 8.12584 34.1632 8.39598 33.1291L10.6174 24.6266C10.7109 24.2698 10.6547 23.9463 10.4877 23.712L18.5232 19.7537C19.0807 19.4885 19.6554 19.5828 19.9428 19.9835ZM10.487 23.7111C10.4873 23.7114 10.4875 23.7117 10.4877 23.712L10.4852 23.7133L10.487 23.7111ZM10.487 23.7111C10.3202 23.4777 10.0434 23.3332 9.69493 23.3332H1.40121C0.39251 23.3332 -0.205236 22.4965 0.0648991 21.4624L2.62256 11.6695H13.2469C13.7297 11.6695 14.1435 11.8669 14.3936 12.2175L16.4742 15.1312C16.7644 15.5407 16.6868 16.1682 16.2845 16.672L10.487 23.7111Z";

const evenDelay = (i: number, total: number, duration: number) =>
  `-${((i * duration) / total).toFixed(2)}s`;

export default function Integrations() {
  const sectionRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const heroCopyRef = useRef<HTMLDivElement>(null);
  const railsRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const emitNav = (show: boolean) =>
      window.dispatchEvent(new CustomEvent("nav-toggle", { detail: show }));

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        gsap.set(logoRef.current, {
          xPercent: -50,
          yPercent: -50,
          scale: 1.0,
          transformOrigin: "center center",
        });
        gsap.set(ctaRef.current, { opacity: 0, y: 20 });
        gsap.set(railsRef.current, { opacity: 0 });
        gsap.set(chipsRef.current, { opacity: 0 });
        // Chip speed multiplier: 1 = idle/slow, 0.2 = fast (set on chip container)
        if (chipsRef.current) chipsRef.current.style.setProperty("--speed-mult", "1");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=500%",
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onEnter: () => emitNav(false),
            onLeave: () => emitNav(true),
            onEnterBack: () => emitNav(false),
            onLeaveBack: () => emitNav(true),
            onUpdate: (self) => {
              const el = chipsRef.current;
              if (!el) return;
              // Progress 0 → slow (mult 1), Progress 1 → fast (mult 0.18)
              const mult = gsap.utils.mapRange(0, 1, 1, 0.18)(self.progress);
              // Extra velocity boost on fast scrolling (snappier feel)
              const v = Math.min(1, Math.abs(self.getVelocity()) / 2000);
              const final = Math.max(0.12, mult - v * 0.25);
              // Directly set animationDuration on every chip (bypasses CSS calc quirks)
              const chips = el.querySelectorAll<HTMLElement>(".conv-chip");
              chips.forEach((chip) => {
                const base = parseFloat(chip.dataset.base || "20");
                chip.style.animationDuration = `${(base * final).toFixed(2)}s`;
              });
            },
          },
        });

        // Millimeter-level logo growth across the whole (long) scroll
        tl.to(logoRef.current, { scale: 1.08, ease: "none" }, 0);

        // Rails + chips fade in right after scroll starts
        tl.to(railsRef.current, { opacity: 1, duration: 0.08, ease: "power1.out" }, 0.04);
        tl.to(chipsRef.current, { opacity: 1, duration: 0.08, ease: "power1.out" }, 0.04);

        // Hero copy fades out late
        tl.to(heroCopyRef.current, { opacity: 0, y: -24, ease: "power1.in" }, 0.7);

        // CTA fades in near end
        tl.to(ctaRef.current, { opacity: 1, y: 0, duration: 0.22, ease: "power2.out" }, 0.8);
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => {
      mm.revert();
      emitNav(true);
    };
  }, []);

  const allCompanies = LANES.flatMap((l) => [...l.ltr, ...l.rtl]);

  return (
    <section
      ref={sectionRef}
      id="entegrasyonlar"
      className="relative overflow-hidden grain"
      style={{ background: "#06081A", color: "white", minHeight: "100vh" }}
    >
      <div className="absolute inset-0 grid-bg opacity-50"></div>
      <div
        className="mesh-orb"
        style={{
          width: 700,
          height: 460,
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          background: "radial-gradient(ellipse,#4C6EF5,transparent 60%)",
          opacity: 0.22,
        }}
      ></div>

      {/* Full-width rails */}
      <div
        ref={railsRef}
        className="hidden md:block pointer-events-none"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          height: 300,
          zIndex: 5,
        }}
      >
        {LANES.map((lane, i) => (
          <div key={i}>
            <div
              className={`conv-rail conv-rail--l${lane.accent ? " conv-rail--accent" : ""}`}
              style={{ top: lane.top, animationDuration: "55s" }}
            ></div>
            <div
              className={`conv-rail conv-rail--r${lane.accent ? " conv-rail--accent" : ""}`}
              style={{ top: lane.top, animationDuration: "55s" }}
            ></div>
          </div>
        ))}
      </div>

      {/* Full-width chip track — CSS keyframe animations, with center+edge mask */}
      <div
        ref={chipsRef}
        className="hidden md:block pointer-events-none conv-fade"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          height: 300,
          zIndex: 10,
        }}
      >
        {LANES.map((lane, li) => (
          <div key={li}>
            <div className="conv-lane" style={{ top: lane.top }}>
              {lane.ltr.map((name, idx) => (
                <span
                  key={name}
                  data-base={lane.idle}
                  className={`conv-chip conv-ltr${lane.accent ? " conv-chip--accent" : ""}`}
                  style={{
                    animationDelay: evenDelay(idx, lane.ltr.length, lane.idle),
                    animationDuration: `${lane.idle}s`,
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
            <div className="conv-lane" style={{ top: lane.top }}>
              {lane.rtl.map((name, idx) => (
                <span
                  key={name}
                  data-base={lane.idle}
                  className={`conv-chip conv-rtl${lane.accent ? " conv-chip--accent" : ""}`}
                  style={{
                    animationDelay: evenDelay(idx, lane.rtl.length, lane.idle),
                    animationDuration: `${lane.idle}s`,
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="relative md:h-screen max-w-[1280px] mx-auto px-6 py-20 md:py-0 flex flex-col items-center md:block">
        {/* Hero copy */}
        <div
          ref={heroCopyRef}
          className="text-center md:absolute md:left-0 md:right-0"
          style={{ top: "9vh" }}
        >
          <div className="eyebrow text-white/50 mb-3">ENTEGRASYONLAR</div>
          <h2 className="display text-[38px] md:text-[54px] max-w-[820px] mx-auto leading-[1.02]">
            30+ Sigorta Şirketi ile Entegre.
          </h2>
          <p className="mt-3 text-white/55 text-[15px] max-w-[520px] mx-auto">
            Her şirketle doğrudan API bağlantısı. Tek tıkla aktive et, paralel sorgulama ile saniyeler içinde teklif al.
          </p>
        </div>

        {/* Mobile static grid */}
        <div className="md:hidden mt-10 w-full max-w-[420px] grid grid-cols-2 gap-2">
          {allCompanies.slice(0, 10).map((n) => (
            <div
              key={n}
              className="text-center font-mono text-[11.5px] text-white/75 py-2 px-2 rounded-md"
              style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)" }}
            >
              {n}
            </div>
          ))}
          <div className="col-span-2 text-center font-mono text-[11px] text-white/50 mt-2">
            + {allCompanies.length - 10} şirket daha
          </div>
        </div>

        {/* Desktop logo stage — centered */}
        <div
          className="relative hidden md:block md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
          style={{ height: 300, width: "100%", maxWidth: 1100, zIndex: 30 }}
        >
          <div
            ref={logoRef}
            className="absolute left-1/2 top-1/2"
            style={{ willChange: "transform" }}
          >
            {/* Very soft ambient colored halo — barely visible, huge blur */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                width: 900,
                height: 900,
                background:
                  "radial-gradient(circle, rgba(124,155,255,.14) 0%, rgba(155,107,240,.08) 35%, transparent 70%)",
                filter: "blur(100px)",
              }}
            ></div>
            {/* Opaque chip/rail mask — very heavy blur dissolves any visible edge */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                width: 440,
                height: 340,
                background: "#06081A",
                borderRadius: "50%",
                filter: "blur(60px)",
              }}
            ></div>
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                width: 360,
                height: 280,
                background: "#06081A",
                borderRadius: "50%",
                filter: "blur(30px)",
              }}
            ></div>
            {/* white InsurUp mark — covers all three lanes vertically */}
            <svg
              width="290"
              height="274"
              viewBox="0 0 37 35"
              fill="none"
              className="relative"
            >
              <path fillRule="evenodd" clipRule="evenodd" d={ICON_PATH} fill="#FFFFFF" />
            </svg>
          </div>
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className="md:absolute left-0 right-0 text-center md:px-6 mt-12 md:mt-0 md:pointer-events-none"
          style={{ bottom: "7vh" }}
        >
          <h3 className="display text-[24px] md:text-[34px] leading-[1.1] max-w-[720px] mx-auto">
            Sen de{" "}
            <span
              style={{
                backgroundImage:
                  "linear-gradient(90deg,#7C9BFF 0%,#B794F6 55%,#4FD1C5 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              tek tıkla
            </span>{" "}
            sigorta ekosistemine bağlan.
          </h3>
          <p className="mt-2.5 text-white/60 text-[13.5px] max-w-[460px] mx-auto">
            30+ şirket, 300+ ürün, 1.2 sn paralel teklif. 5 dakikalık görüşme yeter.
          </p>
          <div className="mt-5 inline-flex items-center gap-2.5 flex-wrap justify-center pointer-events-auto">
            <a
              href="/#iletisim"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg font-medium btn-primary text-[13px]"
            >
              Demo Talep Et
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="/crm"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium btn-ghost-dark text-[13px]"
            >
              Ürünleri Keşfet →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
