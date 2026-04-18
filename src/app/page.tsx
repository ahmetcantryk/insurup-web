import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/landing/Hero";
import Metrics from "@/components/landing/Metrics";
import Bento from "@/components/landing/Bento";
import HowItWorks from "@/components/landing/HowItWorks";
import SplitCrm from "@/components/landing/SplitCrm";
import SplitWeb from "@/components/landing/SplitWeb";
import SplitChat from "@/components/landing/SplitChat";
import Integrations from "@/components/landing/Integrations";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import Faq from "@/components/landing/Faq";
import Blog from "@/components/landing/Blog";
import FinalCta from "@/components/landing/FinalCta";
import Contact from "@/components/landing/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Metrics />
      <Bento />
      <HowItWorks />
      <SplitCrm />
      <SplitWeb />
      <SplitChat />
      <Integrations />
      <Pricing />
      <Testimonials />
      <Faq />
      <Blog />
      <FinalCta />
      <Contact />
      <Footer />
    </>
  );
}
