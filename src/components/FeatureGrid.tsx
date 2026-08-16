import { featureGridItems, ctaBadges } from "@/lib/constants";

export default function FeatureGrid() {
  return (
    <section className="py-24 bg-white" aria-labelledby="featuregrid-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <header className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#126dfb] text-sm font-medium mb-6" role="status">
            {ctaBadges.featureGrid}
          </div>
          <h2 id="featuregrid-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-5">
            Built For Serious Typists
          </h2>
          <p className="text-[16px] text-gray-500 leading-relaxed">
            Every feature is designed to accelerate your improvement, not just measure it.
          </p>
        </header>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" role="list">
          {featureGridItems.map((feature, index) => (
            <article
              key={feature.title}
              className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group cursor-default"
              role="listitem"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 bg-blue-50 text-[#126dfb] rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                {feature.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-[18px] font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}