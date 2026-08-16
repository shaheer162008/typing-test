import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import FinalCta from "@/components/FinalCta";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactForm />
      <FinalCta />
    </main>
  );
}