import TipsHero from "@/components/tips/TipsHero";
import TipsGrid from "@/components/tips/TipsGrid";
import QuickReference from "@/components/tips/QuickReference";
import FinalCta from "@/components/FinalCta";

export default function TipsPage() {
  return (
    <main className="min-h-screen bg-white">
      <TipsHero />
      <TipsGrid />
      <QuickReference />
      <FinalCta />
    </main>
  );
}