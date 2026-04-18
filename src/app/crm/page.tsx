import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CrmHero from "@/components/crm/CrmHero";
import StatStrip from "@/components/crm/StatStrip";
import FeatureGrid from "@/components/crm/FeatureGrid";
import CrmHowItWorks from "@/components/crm/CrmHowItWorks";
import ScreenshotGallery from "@/components/crm/ScreenshotGallery";
import Comparison from "@/components/crm/Comparison";
import CaseStudy from "@/components/crm/CaseStudy";
import IntegrationsSummary from "@/components/crm/IntegrationsSummary";
import PricingSummary from "@/components/crm/PricingSummary";
import CrmFaq from "@/components/crm/CrmFaq";
import CrmCta from "@/components/crm/CrmCta";
import { getPageMetadata } from "@/utils/metadata";

export const metadata = getPageMetadata("/crm");

export default function CrmPage() {
  return (
    <>
      <Navbar />
      <CrmHero />
      <StatStrip />
      <FeatureGrid />
      <CrmHowItWorks />
      <ScreenshotGallery />
      <Comparison />
      <CaseStudy />
      <IntegrationsSummary />
      <PricingSummary />
      <CrmFaq />
      <CrmCta />
      <Footer />
    </>
  );
}
