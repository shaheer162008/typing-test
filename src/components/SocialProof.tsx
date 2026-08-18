import { testimonials, ctaBadges } from "@/lib/constants";

// Missing icon: star-icon.png - using text placeholder
const starIcon = <span className="text-yellow-400 text-[14px]" aria-hidden="true">★</span>;

export default function SocialProof() {
  return (
    <section className="py-24 bg-white overflow-hidden" aria-labelledby="socialproof-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <header className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#126dfb] text-[13px] font-medium mb-6" role="status">
            {ctaBadges.testimonials}
          </div>
          <h2 id="socialproof-heading" className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-5 leading-tight">
            Typists Who <br /> Came Back
          </h2>
          <p className="text-[15px] md:text-[16px] text-gray-500 leading-relaxed">
            From beginners to power users, here's what happens when people practice consistently.
          </p>
        </header>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" role="list">
          {testimonials.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-[2rem] p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              role="listitem"
            >
              <div>
                {/* 5 Star Ratings */}
                <div className="flex gap-1 mb-6" role="img" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-[14px]" aria-hidden="true">★</span>
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="text-[15px] md:text-[16px] text-gray-700 leading-relaxed mb-8">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author Info */}
              <footer className="flex items-center gap-3.5 pt-4 border-t border-gray-50">
                <div
                  className={`w-11 h-11 rounded-full ${item.avatarBg} flex items-center justify-center font-bold text-sm shadow-inner`}
                  aria-hidden="true"
                >
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-gray-900 leading-tight">{item.author}</h4>
                  <p className="text-[13px] text-gray-400 font-medium mt-0.5">{item.role}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}