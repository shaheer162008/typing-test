import { blogArticles, featuredArticle } from "@/lib/constants";
import BlogHero from "@/components/BlogHero";
import BlogSection from "@/components/BlogSection";
import FinalCta from "@/components/FinalCta";

export default function BlogsPage() {
  return (
    <main className="min-h-screen">
      <BlogHero />
      <BlogSection />
      <FinalCta />
    </main>
  );
}