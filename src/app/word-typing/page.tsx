import WordTypingHero from "@/components/word-typing/WordTypingHero";
import WordModesGrid from "@/components/word-typing/WordModesGrid";
import WordSkillLevels from "@/components/word-typing/WordSkillLevels";
import WordTypingFeatures from "@/components/word-typing/WordTypingFeatures";
import FinalCta from "@/components/FinalCta";

export default function WordTypingPage() {
  return (
    <main className="min-h-screen bg-white">
      <WordTypingHero />
      <WordModesGrid />
      <WordSkillLevels />
      <WordTypingFeatures />
      <FinalCta />
    </main>
  );
}
