"use client";

type Props = { title: string };

export default function ShareButtons({ title }: Props) {
  const href = typeof window !== "undefined" ? window.location.href : "";
  const enc = encodeURIComponent;

  const links = [
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(href)}`,
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 3h3l-7 8 8 10h-6l-5-6-5 6H3l7-9L2 3h6l4 5z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(href)}`,
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 4h4v4H4zM4 10h4v10H4zM10 10h4v2c1-2 3-2 4-2 3 0 4 2 4 5v5h-4v-4c0-2 0-3-2-3s-2 1-2 3v4h-4z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${enc(title + " " + href)}`,
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4A10 10 0 0 0 4 17l-1 4 4-1A10 10 0 1 0 20 4zM7 9h3l1 3-2 1a5 5 0 0 0 2 2l1-2 3 1v3a1 1 0 0 1-1 1 10 10 0 0 1-9-9 1 1 0 0 1 1-1z" />
        </svg>
      ),
    },
  ];

  function copyLink() {
    if (typeof window === "undefined") return;
    navigator.clipboard.writeText(href);
  }

  return (
    <div className="hidden lg:flex sticky top-32 flex-col gap-2 items-center">
      <span className="font-mono text-[10px] text-ink-900/45 tracking-wider mb-1">PAYLAŞ</span>
      {links.map((l) => (
        <a
          key={l.name}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.name}
          className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-ink-900/[.06] transition"
          style={{
            background: "white",
            border: "1px solid rgba(10,15,44,.1)",
            color: "rgba(10,15,44,.65)",
          }}
        >
          {l.icon}
        </a>
      ))}
      <button
        onClick={copyLink}
        aria-label="Bağlantıyı kopyala"
        className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-ink-900/[.06] transition"
        style={{
          background: "white",
          border: "1px solid rgba(10,15,44,.1)",
          color: "rgba(10,15,44,.65)",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="9" y="9" width="13" height="13" rx="2" />
          <path d="M5 15V5a2 2 0 0 1 2-2h10" />
        </svg>
      </button>
    </div>
  );
}
