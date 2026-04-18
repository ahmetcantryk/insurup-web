export type Category = "crm" | "dijital" | "urun" | "web-satis" | "ai";

export const CATEGORIES: Array<{ key: Category | "all"; label: string; color: string }> = [
  { key: "all", label: "Tümü", color: "#0A0F2C" },
  { key: "crm", label: "CRM", color: "#4C6EF5" },
  { key: "dijital", label: "Dijital Dönüşüm", color: "#9B6BF0" },
  { key: "urun", label: "Ürün", color: "#0F8E7F" },
  { key: "web-satis", label: "Web Satış", color: "#F97316" },
  { key: "ai", label: "AI", color: "#7C3AED" },
];

export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  gradient: string;
  count: number;
  twitter?: string;
  linkedin?: string;
};

export const AUTHORS: Record<string, Author> = {
  tugce: {
    slug: "tugce",
    name: "Tuğçe Akgül",
    role: "Content Lead",
    bio: "Sigorta sektörü ve dijital dönüşüm üzerine yazıyor.",
    initials: "TA",
    gradient: "linear-gradient(135deg,#6E8BFF,#9B6BF0)",
    count: 12,
    twitter: "#",
    linkedin: "#",
  },
  mehmet: {
    slug: "mehmet",
    name: "Mehmet Yılmaz",
    role: "Head of Product",
    bio: "InsurUp ürün stratejisi ve CRM deneyimi.",
    initials: "MY",
    gradient: "linear-gradient(135deg,#9B6BF0,#4FD1C5)",
    count: 7,
    linkedin: "#",
  },
  ayse: {
    slug: "ayse",
    name: "Ayşe Kara",
    role: "Growth Marketing",
    bio: "Online satış, SEO ve dönüşüm optimizasyonu.",
    initials: "AK",
    gradient: "linear-gradient(135deg,#4FD1C5,#6E8BFF)",
    count: 9,
    twitter: "#",
    linkedin: "#",
  },
  huseyin: {
    slug: "huseyin",
    name: "Hüseyin Öz",
    role: "AI Lead",
    bio: "InsurAI ve üretken yapay zeka araştırması.",
    initials: "HÖ",
    gradient: "linear-gradient(135deg,#7C3AED,#14B8A6)",
    count: 5,
    twitter: "#",
  },
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  authorKey: keyof typeof AUTHORS;
  date: string;
  readMinutes: number;
  coverFrom: string;
  coverTo: string;
  pattern?: "dots" | "grid" | "waves" | "rays";
  featured?: boolean;
  hero?: boolean;
};

export const POSTS: Post[] = [
  {
    slug: "12-dijital-sigorta-satis-stratejisi",
    title: "12 Farklı Dijitalden Sigorta Satış Stratejisi",
    excerpt:
      "Türkiye pazarında acentelerin çevrim içi satışı 3 kata çıkaran denenmiş 12 yaklaşım ve yatırım maliyeti karşılaştırması.",
    category: "dijital",
    authorKey: "tugce",
    date: "14 Nis 2026",
    readMinutes: 9,
    coverFrom: "#0A0F2C",
    coverTo: "#4C6EF5",
    pattern: "grid",
    hero: true,
  },
  {
    slug: "whatsapp-destekli-satis-rehberi",
    title: "Sigorta Acenteleri İçin WhatsApp Destekli Satış Rehberi",
    excerpt:
      "Satış ekibi kurmadan, yalnızca WhatsApp Business üzerinden aylık 300 poliçe nasıl kesilir?",
    category: "ai",
    authorKey: "huseyin",
    date: "12 Nis 2026",
    readMinutes: 7,
    coverFrom: "#7C3AED",
    coverTo: "#14B8A6",
    pattern: "rays",
    featured: true,
  },
  {
    slug: "teklif-satis-surec-kilavuzu",
    title: "InsurUp ile Tekliften Satışa Dijital Süreç Kılavuzu",
    excerpt:
      "Tek ekrandan 8 şirkete paralel sorgulama ile ortalama teklif süresini 20 dk'dan 1.2 sn'ye çekmek.",
    category: "urun",
    authorKey: "mehmet",
    date: "08 Nis 2026",
    readMinutes: 6,
    coverFrom: "#0F8E7F",
    coverTo: "#4FD1C5",
    pattern: "waves",
    featured: true,
  },
  {
    slug: "dijital-musteri-donusumu",
    title: "Dijital Kanallardan Gelen Sigorta Müşterileri: 0–30 Gün",
    excerpt:
      "Yeni müşteri ilk 30 gününde nasıl yönetilir? Onboarding e-postaları, yenileme takibi ve cross-sell fırsatları.",
    category: "crm",
    authorKey: "ayse",
    date: "05 Nis 2026",
    readMinutes: 8,
    coverFrom: "#1A2247",
    coverTo: "#9B6BF0",
    pattern: "dots",
  },
  {
    slug: "kisisellestirilmis-satis-deneyimi",
    title: "Kişiselleştirilmiş Dijital Satış Deneyimi Nasıl Kurulur?",
    excerpt:
      "Veri katmanı, müşteri segmentasyonu ve içerik kişiselleştirmesi için uçtan uca bir oyun planı.",
    category: "web-satis",
    authorKey: "ayse",
    date: "02 Nis 2026",
    readMinutes: 6,
    coverFrom: "#F97316",
    coverTo: "#9B6BF0",
    pattern: "waves",
  },
  {
    slug: "sigorta-crm-nedir",
    title: "Sigorta Acenteleri İçin CRM Nedir?",
    excerpt:
      "Klasik CRM'lerden sigorta odaklı CRM'lere geçiş, yatırım getirisi ve seçim kriterleri.",
    category: "crm",
    authorKey: "mehmet",
    date: "28 Mar 2026",
    readMinutes: 5,
    coverFrom: "#4C6EF5",
    coverTo: "#7C9BFF",
    pattern: "grid",
  },
  {
    slug: "ai-asistanlar-yeni-kanal",
    title: "AI Asistanlar: Sigortada Yeni Satış Kanalı",
    excerpt:
      "Gecenin 2'sinde poliçe kesen yapay zekayı nasıl kuracak ve performansını nasıl ölçeceksiniz?",
    category: "ai",
    authorKey: "huseyin",
    date: "24 Mar 2026",
    readMinutes: 7,
    coverFrom: "#050818",
    coverTo: "#7C3AED",
    pattern: "rays",
  },
  {
    slug: "5-yenileme-sablonu",
    title: "5 Otomatik Yenileme Hatırlatma Şablonu",
    excerpt:
      "En yüksek geri dönüşü alan SMS + WhatsApp + e-posta kombinasyonları, mesaj örnekleriyle.",
    category: "crm",
    authorKey: "ayse",
    date: "20 Mar 2026",
    readMinutes: 4,
    coverFrom: "#0A0F2C",
    coverTo: "#4FD1C5",
    pattern: "waves",
  },
  {
    slug: "online-teklif-donusumu",
    title: "Online Teklif Dönüşümünü %40 Artıran 7 Kural",
    excerpt:
      "Form adım sayısı, progressive disclosure ve fiyat şeffaflığı üzerine veriye dayalı öneriler.",
    category: "web-satis",
    authorKey: "ayse",
    date: "18 Mar 2026",
    readMinutes: 6,
    coverFrom: "#9B6BF0",
    coverTo: "#F97316",
    pattern: "dots",
  },
  {
    slug: "acente-dijitallesme-90-gun",
    title: "Geleneksel Acenteden Dijitale: 90 Günde Nasıl Geçtik?",
    excerpt:
      "Ankara'daki bir acentenin 3 katlık ciro artışının arkasındaki karar ve süreç değişiklikleri.",
    category: "dijital",
    authorKey: "tugce",
    date: "14 Mar 2026",
    readMinutes: 8,
    coverFrom: "#111838",
    coverTo: "#4C6EF5",
    pattern: "grid",
  },
  {
    slug: "crm-entegrasyon-kontrol-listesi",
    title: "CRM Entegrasyonunda 12 Maddelik Kontrol Listesi",
    excerpt:
      "API, webhook, muhasebe senkronizasyonu: doğru yapıldığından emin olmak için pratik bir checklist.",
    category: "urun",
    authorKey: "mehmet",
    date: "10 Mar 2026",
    readMinutes: 5,
    coverFrom: "#0F8E7F",
    coverTo: "#0A0F2C",
    pattern: "grid",
  },
  {
    slug: "seo-sigorta-pazarlamasi",
    title: "Sigorta Pazarlamasında SEO: Teknik ve İçerik Stratejisi",
    excerpt:
      "Yerel SEO, branş sayfaları ve schema markup: acenteler için organik trafiği katlamanın yolları.",
    category: "dijital",
    authorKey: "ayse",
    date: "06 Mar 2026",
    readMinutes: 9,
    coverFrom: "#4C6EF5",
    coverTo: "#14B8A6",
    pattern: "waves",
  },
  {
    slug: "yenileme-doneminde-otomasyon",
    title: "Yenileme Döneminde Otomasyon ile Müşteri Tutma",
    excerpt:
      "%94 yenileme oranı elde eden acentelerin ortak otomasyon akışı ve uyarı zamanlamaları.",
    category: "crm",
    authorKey: "tugce",
    date: "02 Mar 2026",
    readMinutes: 6,
    coverFrom: "#1A2247",
    coverTo: "#4FD1C5",
    pattern: "dots",
  },
  {
    slug: "urun-guncelleme-2026-q1",
    title: "Ürün Güncellemesi · 2026 Q1: InsurChat, Web Satış v2",
    excerpt:
      "Yeni AI akışları, şablon motoru, ödeme optimizasyonları: bu çeyreğin özet listesi.",
    category: "urun",
    authorKey: "mehmet",
    date: "28 Şub 2026",
    readMinutes: 5,
    coverFrom: "#0A0F2C",
    coverTo: "#9B6BF0",
    pattern: "grid",
  },
  {
    slug: "branded-web-satis-sitesi-kurma",
    title: "Branded Web Satış Sitesi Kurmanın 5 Adımı",
    excerpt:
      "Şablon seçimi, marka rengi ve ödeme akışı: ilk 24 saatte canlıya almanın pratik yolu.",
    category: "web-satis",
    authorKey: "ayse",
    date: "24 Şub 2026",
    readMinutes: 6,
    coverFrom: "#F97316",
    coverTo: "#4C6EF5",
    pattern: "rays",
  },
  {
    slug: "tss-imm-trend-raporu",
    title: "TSS ve İMM Trend Raporu · 2026",
    excerpt:
      "Tamamlayıcı sağlık ve İhtiyari Mali Mesuliyet branşlarındaki büyüme ve acenteler için fırsatlar.",
    category: "dijital",
    authorKey: "tugce",
    date: "20 Şub 2026",
    readMinutes: 10,
    coverFrom: "#0F8E7F",
    coverTo: "#9B6BF0",
    pattern: "waves",
  },
  {
    slug: "ai-niyet-tespiti-ornekleri",
    title: "AI Niyet Tespiti: 12 Gerçek Müşteri Konuşması",
    excerpt:
      "Türkçe yazım hatası, argo ve kısaltmalara dayanıklı bir modeli eğitirken öğrendiklerimiz.",
    category: "ai",
    authorKey: "huseyin",
    date: "16 Şub 2026",
    readMinutes: 8,
    coverFrom: "#050818",
    coverTo: "#14B8A6",
    pattern: "rays",
  },
  {
    slug: "sigorta-musteri-segmentasyonu",
    title: "Sigorta Müşteri Segmentasyonu · Pratik Bir Başlangıç",
    excerpt:
      "Bireysel, kurumsal, yüksek değerli, risk yoğun: her segment için farklı bir iletişim ritmi.",
    category: "crm",
    authorKey: "ayse",
    date: "12 Şub 2026",
    readMinutes: 7,
    coverFrom: "#4C6EF5",
    coverTo: "#0A0F2C",
    pattern: "dots",
  },
  {
    slug: "kvkk-uyumlu-pazarlama",
    title: "KVKK Uyumlu Pazarlama · Acenteler için Kısa Rehber",
    excerpt:
      "Aydınlatma metni, açık rıza, veri saklama süreleri: operasyonunuzu güvenli tutmanın temelleri.",
    category: "dijital",
    authorKey: "tugce",
    date: "08 Şub 2026",
    readMinutes: 6,
    coverFrom: "#111838",
    coverTo: "#7C9BFF",
    pattern: "grid",
  },
  {
    slug: "web-satis-donusumu-raporu",
    title: "Web Satış Dönüşüm Raporu: 120 Acenteden Öğrendiklerimiz",
    excerpt:
      "Form alanlarından ödeme yöntemlerine kadar, dönüşümü artıran (ve düşüren) kararlar.",
    category: "web-satis",
    authorKey: "mehmet",
    date: "04 Şub 2026",
    readMinutes: 11,
    coverFrom: "#9B6BF0",
    coverTo: "#0F8E7F",
    pattern: "waves",
  },
];

export const TAG_CLOUD = [
  "CRM",
  "Dijital-Dönüşüm",
  "WhatsApp-Satış",
  "Sigorta-Teknolojisi",
  "Online-Teklif",
  "Müşteri-Yönetimi",
  "Web-Platformu",
  "AI-Asistan",
  "Poliçe-Yönetimi",
  "SEO",
  "Lead-Yönetimi",
  "Yenileme",
  "KVKK",
  "TSS",
  "Paralel-Teklif",
];

export function categoryMeta(key: Category) {
  return CATEGORIES.find((c) => c.key === key) ?? CATEGORIES[0];
}
