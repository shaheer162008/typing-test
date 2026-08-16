import Image from "next/image";
import Hero from "@/components/hero";
import Features from "@/components/features";
import FeatureGrid from "@/components/FeatureGrid";
import HowItWorks from "@/components/HowItWorks";
import CtaBanner from "@/components/CtaBanner";
import SocialProof from "@/components/SocialProof";
import ComparisonTable from "@/components/ComparisonTable";
import FAQ from "@/components/FAQ";
import BlogSection from "@/components/BlogSection";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <>
    <Hero />
    <Features />
    <FeatureGrid />
    <HowItWorks />
    <CtaBanner />
    <SocialProof />
    <ComparisonTable />
    <FAQ />
    <BlogSection />
    <FinalCta />
    </>
  );
}
