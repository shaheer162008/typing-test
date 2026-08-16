import Image from "next/image";
import Link from "next/link";
import type { BlogArticle } from "@/types";

const BLOG_THUMBNAIL = "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

interface FeaturedBlogPostProps {
  article: BlogArticle;
}

export default function FeaturedBlogPost({ article }: FeaturedBlogPostProps) {
  return (
    <article className="bg-white rounded-[2.5rem] p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* Left Image */}
      <div className="lg:col-span-7 relative h-[280px] md:h-[350px] rounded-3xl overflow-hidden bg-gray-100">
        <Image
          src={BLOG_THUMBNAIL}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 58vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/10 to-transparent z-10" aria-hidden="true" />
      </div>

      {/* Right Content */}
      <div className="lg:col-span-5 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
          <Link href={article.href} className="w-max">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-[#126dfb] text-xs font-semibold">
              {article.category}
            </span>
          </Link>
          <span className="text-[14px] text-gray-500 flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            5 min read
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
          {article.title}
        </h2>

        <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
          {article.description}
        </p>

        <Link
          href={article.href}
          className="text-[15px] font-semibold text-[#126dfb] hover:underline inline-flex items-center gap-1.5 w-max"
        >
          <span>Read article</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}