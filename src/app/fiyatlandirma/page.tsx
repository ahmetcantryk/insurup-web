import { getPageMetadata } from "@/utils/metadata";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/pricing/Hero";
import PackageTable from "@/components/pricing/PackageTable";
import SpecialCta from "@/components/pricing/SpecialCta";
import Faq from "@/components/pricing/Faq";
import Contact from "@/components/landing/Contact";

export const metadata = getPageMetadata("/fiyatlandirma");

export default function FiyatlandirmaPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <PackageTable />
      <SpecialCta />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
