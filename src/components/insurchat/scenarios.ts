export type M =
  | { role: "user"; text: string; delay?: number }
  | { role: "ai"; text: string; badge?: string; delay?: number; typingMs?: number }
  | {
      role: "ai-cards";
      cards: Array<{ k: string; label: string; price: string; best?: boolean }>;
      delay?: number;
      typingMs?: number;
    };

export type Scenario = {
  key: string;
  label: string;
  icon: string;
  messages: M[];
};

export const SCENARIOS: Scenario[] = [
  {
    key: "kasko",
    label: "Kasko Teklifi",
    icon: "🚗",
    messages: [
      { role: "user", text: "Merhaba, kasko teklifi almak istiyorum", delay: 900 },
      { role: "ai", badge: "AI · KASKO", text: "Tabii! Plakanızı paylaşır mısınız? 📋", delay: 1000, typingMs: 1000 },
      { role: "user", text: "34 ABC 1234", delay: 1300 },
      {
        role: "ai",
        badge: "AI · VERİ ALINDI",
        text: "Teşekkürler! 30 sigorta şirketinden teklifler hazırlanıyor ⚡",
        delay: 1100,
        typingMs: 1100,
      },
      {
        role: "ai-cards",
        cards: [
          { k: "ANA", label: "Anadolu", price: "₺4.280", best: true },
          { k: "AXA", label: "AXA", price: "₺4.710" },
          { k: "HDI", label: "HDI", price: "₺4.920" },
        ],
        delay: 1600,
        typingMs: 1400,
      },
    ],
  },
  {
    key: "police",
    label: "Poliçe Sorgulama",
    icon: "📄",
    messages: [
      { role: "user", text: "Poliçemi görmek istiyorum", delay: 900 },
      { role: "ai", badge: "AI · POLİÇE", text: "Elbette 👋 TC kimlik numaranı paylaşır mısın?", delay: 1000, typingMs: 1000 },
      { role: "user", text: "1234••••••123", delay: 1300 },
      {
        role: "ai",
        badge: "AI · 3 POLİÇE",
        text: "3 aktif poliçen var: Kasko, Trafik, DASK. Hangisini açayım? 📄",
        delay: 1100,
        typingMs: 1200,
      },
    ],
  },
  {
    key: "yenileme",
    label: "DASK Yenileme",
    icon: "⟲",
    messages: [
      { role: "user", text: "DASK yenilenecek mi?", delay: 900 },
      {
        role: "ai",
        badge: "AI · YENİLEME",
        text: "Evet! DASK poliçen 5 gün içinde dolacak. Yeni fiyatı göstereyim mi?",
        delay: 1100,
        typingMs: 1200,
      },
      { role: "user", text: "Göster lütfen", delay: 1100 },
      {
        role: "ai",
        badge: "AI · HAZIR",
        text: "AXA Sigorta · ₺ 312 · 3D Secure ile tek tıkla yenile ✓",
        delay: 1100,
        typingMs: 1000,
      },
    ],
  },
  {
    key: "hasar",
    label: "Hasar İhbarı",
    icon: "🛠",
    messages: [
      { role: "user", text: "Hasar var, nasıl yaparım?", delay: 900 },
      {
        role: "ai",
        badge: "AI · HASAR",
        text: "Geçmiş olsun 🤝 Plakanı ve poliçe numaranı paylaş, hasar formunu burada dolduralım.",
        delay: 1100,
        typingMs: 1300,
      },
    ],
  },
];
