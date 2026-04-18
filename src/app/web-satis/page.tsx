import { getPageMetadata } from "@/utils/metadata";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/landing/Contact";
import Hero from "@/components/web-satis/Hero";
import HowItWorks from "@/components/web-satis/HowItWorks";
import TemplateGallery from "@/components/web-satis/TemplateGallery";
import FeatureQuote from "@/components/web-satis/FeatureQuote";
import FeaturePortal from "@/components/web-satis/FeaturePortal";
import FeaturePayment from "@/components/web-satis/FeaturePayment";
import Branches from "@/components/web-satis/Branches";
import Comparison from "@/components/web-satis/Comparison";
import CaseStudy from "@/components/web-satis/CaseStudy";
import Faq from "@/components/web-satis/Faq";
import FinalCta from "@/components/web-satis/FinalCta";
import RelatedProducts from "@/components/web-satis/RelatedProducts";

export const metadata = getPageMetadata("/web-satis");

export default function WebSatisPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <TemplateGallery />
      <FeatureQuote />
      <FeaturePortal />
      <FeaturePayment />
      <Branches />
      <Comparison />
      <CaseStudy />
      <Faq />
      <FinalCta />
      <Contact />
      <RelatedProducts />
      <Footer />
    </>
  );
}
