import Image from "next/image";
import Link from "next/link";
import { blogArticles, featuredArticle, ctaBadges } from "@/lib/constants";

export default function BlogSection() {
  return (
    <section className="py-24 bg-white overflow-hidden" aria-labelledby="blog-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <header className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#126dfb] text-[13px] font-medium mb-6" role="status">
            {ctaBadges.blog}
          </div>
          <h2 id="blog-heading" className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-5 leading-tight">
            Level Up From <br /> The Blog
          </h2>
          <p className="text-[15px] md:text-[16px] text-gray-500 leading-relaxed">
            Simple, practical guides that turn practice into progress. Read one article, take a test, watch the number move.
          </p>
        </header>

        {/* Featured Top Article Card (Horizontal Layout) */}
        <article className="bg-white rounded-[2.5rem] p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 mb-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Image */}
          <div className="lg:col-span-7 relative h-[280px] md:h-[350px] rounded-3xl overflow-hidden bg-gray-100">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/10 to-transparent z-10" aria-hidden="true" />
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm font-medium bg-gray-200" aria-hidden="true">
              [Featured Article Image]
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-[#126dfb] text-xs font-semibold w-max mb-4">
              {featuredArticle.category}
            </span>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              {featuredArticle.title}
            </h3>

            <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
              {featuredArticle.description}
            </p>

            <Link
              href={featuredArticle.href}
              className="text-[15px] font-semibold text-[#126dfb] hover:underline inline-flex items-center gap-1.5 w-max"
            >
              <span>Read article</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>

        {/* Bottom 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16" role="list">
          {blogArticles.map((item, index) => (
            <article
              key={item.href}
              className="bg-white rounded-[2rem] p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              role="listitem"
            >
              <div>
                {/* Card Thumbnail */}
                <div className="relative h-48 rounded-2xl overflow-hidden bg-gray-100 mb-6">
                  <span className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold text-gray-800 shadow-sm">
                    {item.category}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs font-medium bg-gray-200" aria-hidden="true">
                    [Article Image {index + 1}]
                  </div>
                </div>

                {/* Title & Description */}
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#126dfb] transition-colors leading-snug">
                  {item.title}
                </h4>
                <p className="text-[14px] text-gray-500 leading-relaxed mb-6">{item.description}</p>
              </div>

              {/* Read link */}
              <Link
                href={item.href}
                className="text-[14px] font-semibold text-gray-900 group-hover:text-[#126dfb] inline-flex items-center gap-1 transition-colors"
              >
                <span>Read article</span>
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>

        {/* View All Center Button */}
        <div className="flex justify-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-gray-200 text-gray-800 text-[15px] font-semibold hover:bg-gray-50 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#126dfb] focus-visible:ring-offset-2"
          >
            <span>View all</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}