import { getPageMetadata } from "@/utils/metadata";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/landing/Contact";
import Hero from "@/components/insurchat/Hero";
import MetricStrip from "@/components/insurchat/MetricStrip";
import HowItWorks from "@/components/insurchat/HowItWorks";
import LiveDemo from "@/components/insurchat/LiveDemo";
import FeatureSupport from "@/components/insurchat/FeatureSupport";
import FeatureCrm from "@/components/insurchat/FeatureCrm";
import FeaturePayment from "@/components/insurchat/FeaturePayment";
import Capabilities from "@/components/insurchat/Capabilities";
import BeforeAfter from "@/components/insurchat/BeforeAfter";
import Security from "@/components/insurchat/Security";
import Testimonial from "@/components/insurchat/Testimonial";
import Faq from "@/components/insurchat/Faq";
import FinalCta from "@/components/insurchat/FinalCta";
import RelatedProducts from "@/components/insurchat/RelatedProducts";

export const metadata = getPageMetadata("/insurchat");

export default function InsurChatPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <MetricStrip />
      <HowItWorks />
      <LiveDemo />
      <FeatureSupport />
      <FeatureCrm />
      <FeaturePayment />
      <Capabilities />
      <BeforeAfter />
      <Security />
      <Testimonial />
      <Faq />
      <FinalCta />
      <Contact />
      <RelatedProducts />
      <Footer />
    </>
  );
}
