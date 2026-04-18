"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const height = h.scrollHeight - h.clientHeight;
      setP(height > 0 ? (scrolled / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-16 left-0 right-0 z-40" style={{ height: 3, background: "transparent" }}>
      <div
        className="h-full transition-[width]"
        style={{
          width: `${p}%`,
          background: "linear-gradient(90deg,#4C6EF5,#9B6BF0,#14B8A6)",
          boxShadow: "0 0 6px rgba(76,110,245,.5)",
        }}
      />
    </div>
  );
}
