import FinalCta from "@/components/FinalCta";
import AboutHero from "@/components/AboutHero";
import OurStory from "@/components/OurStory";
import Features from "@/components/features";
import OurAim from "@/components/OurAim";

const About = () => {
  return (
      <main className="min-h-screen">
        <AboutHero />
        <OurStory />
        <Features />
        <OurAim />
      <FinalCta />
    </main>
  )
}

export default About