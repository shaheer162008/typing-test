import Image from "next/image";

function FeatureItem({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="text-center p-6">
      <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
        <Image src={icon} alt="" width={32} height={32} className="object-contain" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}

export default function WordTypingFeatures() {
  return (
    <section className="py-16 px-6 bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Word Count Mode?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureItem title="No Timer Pressure" description="Type at your own pace. Focus on accuracy, not racing the clock." icon="/icons/time-locked.svg" />
          <FeatureItem title="Exact Measurement" description="Precise word count gives consistent benchmarks for daily comparison." icon="/icons/real-time.svg" />
          <FeatureItem title="Instant Certificates" description="Complete a test and get a verifiable certificate. Share your achievement." icon="/icons/certificate.svg" />
        </div>
      </div>
    </section>
  );
}
