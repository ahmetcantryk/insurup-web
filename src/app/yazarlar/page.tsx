import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AUTHORS, POSTS } from "@/data/blog";
import { getPageMetadata } from "@/utils/metadata";

export const metadata = getPageMetadata("/yazarlar");

export default function YazarlarPage() {
  return (
    <>
      <Navbar />
      <section className="relative pt-28 pb-12" style={{ background: "#FAFAF9" }}>
        <div className="absolute inset-0 grid-bg-light opacity-30 pointer-events-none"></div>
        <div className="relative max-w-[1100px] mx-auto px-6 text-center">
          <div className="eyebrow text-ink-900/50 mb-4">YAZARLARIMIZ</div>
          <h1 className="display text-[48px] md:text-[72px] text-ink-900 leading-[1]">
            InsurUp yazar ekibi.
          </h1>
          <p className="mt-5 text-ink-900/60 text-[17px] max-w-[540px] mx-auto">
            Dijital sigortacılık, CRM, AI ve online satış üzerine yazıyoruz.
          </p>
        </div>
      </section>

      <section className="relative py-16" style={{ background: "#FAFAF9" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.values(AUTHORS).map((a) => {
              const count = POSTS.filter((p) => p.authorKey === a.slug).length;
              return (
                <Link
                  key={a.slug}
                  href={`/yazarlar/${a.slug}`}
                  className="card-light p-6 hover-lift flex flex-col gap-4 group"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center font-mono text-[16px] text-white"
                    style={{ background: a.gradient }}
                  >
                    {a.initials}
                  </div>
                  <div>
                    <div className="text-[17px] font-semibold tracking-tight">{a.name}</div>
                    <div className="font-mono text-[11px] text-ink-900/50">{a.role}</div>
                  </div>
                  <p className="text-ink-900/60 text-[13.5px] leading-[1.55]">{a.bio}</p>
                  <div
                    className="mt-auto pt-4 border-t flex items-center justify-between"
                    style={{ borderColor: "rgba(10,15,44,.08)" }}
                  >
                    <span className="font-mono text-[11px] text-ink-900/55">{count || a.count} yazı</span>
                    <span className="font-mono text-[11px] group-hover:translate-x-1 transition" style={{ color: "#4C6EF5" }}>
                      profile →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
