import Image from "next/image";
import Link from "next/link";
import type { BlogArticle } from "@/types";

const BLOG_THUMBNAIL = "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

interface BlogGridProps {
  articles: BlogArticle[];
}

export default function BlogGrid({ articles }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" role="list">
      {articles.map((item, index) => (
        <article
          key={item.href}
          className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col group"
          role="listitem"
        >
          {/* Card Thumbnail */}
          <Link href={item.href} className="block relative h-56 overflow-hidden" aria-label={`Read ${item.title}`}>
            <Image
              src={BLOG_THUMBNAIL}
              alt=""
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              aria-hidden="true"
            />
            <span className="absolute top-3 right-3 z-10 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold text-gray-800 shadow-sm">
              {item.category}
            </span>
          </Link>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            {/* Title & Description */}
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#126dfb] transition-colors leading-snug">
              <Link href={item.href} className="hover:underline">
                {item.title}
              </Link>
            </h3>
            <p className="text-[14px] text-gray-500 leading-relaxed mb-6 flex-1">{item.description}</p>

            {/* Read link */}
            <Link
              href={item.href}
              className="text-[14px] font-semibold text-gray-900 group-hover:text-[#126dfb] inline-flex items-center gap-1 transition-colors self-start"
            >
              <span>Read article</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}