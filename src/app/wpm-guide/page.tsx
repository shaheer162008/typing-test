import WpmGuideHero from "@/components/wpm-guide/WpmGuideHero";
import WpmCalculation from "@/components/wpm-guide/WpmCalculation";
import WpmSkillLevels from "@/components/wpm-guide/WpmSkillLevels";
import RealWorldBenchmarks from "@/components/wpm-guide/RealWorldBenchmarks";
import WpmTips from "@/components/wpm-guide/WpmTips";
import QuickReference from "@/components/tips/QuickReference";
import FinalCta from "@/components/FinalCta";

export default function WpmGuidePage() {
  return (
    <main className="min-h-screen bg-white">
      <WpmGuideHero />
      <WpmCalculation />
      <WpmSkillLevels />
      <RealWorldBenchmarks />
      <WpmTips />
      <QuickReference />
      <FinalCta />
    </main>
  );
}