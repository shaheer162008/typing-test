import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogArticles, featuredArticle } from "@/lib/constants";
import FinalCta from "@/components/FinalCta";
import { notFound } from "next/navigation";

interface BlogSlugPageProps {
  params: Promise<{ slug: string }>;
}

const allArticles = [...blogArticles, featuredArticle];

export async function generateMetadata({ params }: BlogSlugPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const article = allArticles.find((a) => a.href === `/blogs/${resolvedParams.slug}`);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${article.title} | Typing Test Skill`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogSlugPageProps) {
  const resolvedParams = await params;
  const article = allArticles.find((a) => a.href === `/blogs/${resolvedParams.slug}`);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Article Header */}
      <header className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors mb-6"
          >
            <Image src="/icons/mouse-cursor-icon.png" alt="" width={16} height={16} className="object-contain -rotate-12" aria-hidden="true" />
            Back to Blog
          </Link>
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#126dfb] text-[13px] font-bold mb-6 uppercase tracking-wider">
            {article.category}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-gray-500">
            <span>5 min read</span>
            <span>•</span>
            <span>August 2025</span>
          </div>
        </div>
      </header>

      {/* Article Image */}
      <div className="max-w-3xl mx-auto px-6 -mt-8 mb-12">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={article.image}
            alt={article.title}
            width={800}
            height={450}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6 pb-16">
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-xl text-gray-600 leading-relaxed mb-8 border-l-4 border-[#126dfb] pl-6 italic">
            {article.description}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Getting Started</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Whether you're a complete beginner or looking to sharpen your existing skills, the journey to faster typing starts with understanding the fundamentals. Most people type at around 40 words per minute, but with focused practice, reaching 80+ WPM is entirely achievable within a few months.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key Principles for Improvement</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1. Accuracy First, Speed Second</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            It's tempting to hammer the keys as fast as possible, but accuracy is the foundation of sustainable speed. Every error costs you time — not just in correction, but in breaking your rhythm. Focus on hitting 98%+ accuracy before pushing for higher WPM.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2. Consistent Daily Practice</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Fifteen minutes daily beats two hours once a week. Your muscle memory builds through repetition, and daily sessions keep the neural pathways fresh. Set a specific time each day — morning coffee, lunch break, or evening wind-down.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3. Proper Technique Matters</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Home row positioning, light touch, and minimal finger movement are the hallmarks of efficient typing. If you're hunting and pecking, invest time in learning touch typing basics first. The initial slowdown pays exponential dividends.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4. Track Your Progress</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            What gets measured gets improved. Use our real-time WPM tracking to see your trends, identify plateaus, and celebrate breakthroughs. The dashboard shows your journey — every test is a data point.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Recommended Practice Routine</h2>
          <ul className="space-y-4 text-gray-600 leading-relaxed">
            <li className="flex gap-3"><span className="text-[#126dfb] font-bold">•</span> <strong>Warm-up (2 min):</strong> 1-minute test at comfortable pace, focus on rhythm</li>
            <li className="flex gap-3"><span className="text-[#126dfb] font-bold">•</span> <strong>Drills (5 min):</strong> Practice specific letter combinations or weak keys</li>
            <li className="flex gap-3"><span className="text-[#126dfb] font-bold">•</span> <strong>Main set (10 min):</strong> 3–5 minute test pushing your current limit</li>
            <li className="flex gap-3"><span className="text-[#126dfb] font-bold">•</span> <strong>Cool-down (3 min):</strong> Word challenge or accuracy-focused test</li>
          </ul>

          <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Ready to Put This Into Practice?</h3>
            <p className="text-gray-600 mb-4">Take a free typing test right now and see where you stand. No sign-up required.</p>
            <Link
              href="/typing-test"
              className="inline-flex items-center justify-center gap-2 bg-[#126dfb] hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-sm"
            >
              <Image src="/icons/keyboard_logo.png" alt="" width={18} height={18} className="object-contain" aria-hidden="true" />
              Start Free Test
            </Link>
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm font-medium text-gray-700 mb-4">Share this article</p>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">Twitter</button>
            <button className="px-4 py-2 bg-blue-800 text-white rounded-lg text-sm hover:bg-blue-900 transition-colors">LinkedIn</button>
            <button className="px-4 py-2 border border-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors">Copy Link</button>
          </div>
        </div>
      </article>

      <FinalCta />
    </main>
  );
}