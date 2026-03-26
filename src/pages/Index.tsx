import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

const SegmentsSection = lazy(() => import("@/components/SegmentsSection"));
const WhyChooseUsSection = lazy(() => import("@/components/WhyChooseUsSection"));
const BrandsSection = lazy(() => import("@/components/BrandsSection"));
const TeamSection = lazy(() => import("@/components/TeamSection"));
const LocationSection = lazy(() => import("@/components/LocationSection"));
const FooterSection = lazy(() => import("@/components/FooterSection"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Suspense fallback={null}>
        <SegmentsSection />
        <WhyChooseUsSection />
        <BrandsSection />
        <TeamSection />
        <LocationSection />
        <FooterSection />
      </Suspense>
    </div>
  );
};

export default Index;
