"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientScripts() {
  const pathname = usePathname();

  useEffect(() => {
    // reveal on scroll — also immediately flip elements already in viewport
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
    revealEls.forEach((el) => {
      // Already-visible elements should reveal immediately (above-the-fold after nav)
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("in");
      } else {
        io.observe(el);
      }
    });

    // counters
    const counters = document.querySelectorAll<HTMLElement>(".counter");
    const co = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const target = parseInt(el.dataset.target || "0", 10);
          const suffix = el.dataset.suffix || "";
          const dur = 1400;
          const start = performance.now();
          const step = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            const val = Math.round(target * eased);
            el.textContent = val + suffix;
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          co.unobserve(el);
        });
      },
      { threshold: 0.4 },
    );
    counters.forEach((c) => co.observe(c));

    // FAQ filter tabs
    const faqClick = (tab: HTMLElement) => {
      const cat = tab.dataset.cat;
      document.querySelectorAll<HTMLElement>(".faq-tab").forEach((t) => {
        t.classList.remove("chip-volt");
        t.classList.add("chip-dark");
        t.style.background = "";
        t.style.color = "";
        t.style.borderColor = "";
      });
      tab.classList.remove("chip-dark");
      tab.classList.add("chip-volt");
      tab.style.background = "#0A0F2C";
      tab.style.color = "white";
      tab.style.borderColor = "#0A0F2C";
      document.querySelectorAll<HTMLDetailsElement>(".faq-item").forEach((item) => {
        const show = cat === "all" || item.dataset.cat === cat;
        item.style.display = show ? "" : "none";
        item.open = false;
      });
    };
    const faqHandlers: Array<[HTMLElement, () => void]> = [];
    document.querySelectorAll<HTMLElement>(".faq-tab").forEach((tab) => {
      const h = () => faqClick(tab);
      tab.addEventListener("click", h);
      faqHandlers.push([tab, h]);
    });

    // Details chev +/-
    const detailsHandlers: Array<[HTMLDetailsElement, () => void]> = [];
    document.querySelectorAll<HTMLDetailsElement>("details").forEach((d) => {
      const h = () => {
        const chev = d.querySelector<HTMLElement>(".chev");
        if (chev) chev.textContent = d.open ? "–" : "+";
      };
      d.addEventListener("toggle", h);
      detailsHandlers.push([d, h]);
    });

    // Screenshot gallery tabs
    const galleryHandlers: Array<[HTMLElement, () => void]> = [];
    document.querySelectorAll<HTMLElement>(".tab-btn").forEach((btn) => {
      const h = () => {
        const tab = btn.dataset.tab;
        document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
        document.querySelector(`.tab-panel[data-panel="${tab}"]`)?.classList.add("active");
      };
      btn.addEventListener("click", h);
      galleryHandlers.push([btn, h]);
    });

    return () => {
      io.disconnect();
      co.disconnect();
      faqHandlers.forEach(([el, h]) => el.removeEventListener("click", h));
      detailsHandlers.forEach(([el, h]) => el.removeEventListener("toggle", h));
      galleryHandlers.forEach(([el, h]) => el.removeEventListener("click", h));
    };
  }, [pathname]);

  return null;
}
