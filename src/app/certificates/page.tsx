import Link from "next/link";
import Image from "next/image";
import FinalCta from "@/components/FinalCta";

const certificates = [
  { id: 1, title: "Speed Demon", wpm: "100+", description: "Achieved 100+ WPM on a verified test", date: "Aug 15, 2025", status: "earned" },
  { id: 2, title: "Accuracy Master", wpm: "98%+", description: "Maintained 98%+ accuracy over 10 tests", date: "Aug 12, 2025", status: "earned" },
  { id: 3, title: "Streak Champion", wpm: "30 days", description: "Completed a test every day for 30 days", date: "Aug 10, 2025", status: "earned" },
  { id: 4, title: "Century Club", wpm: "100 WPM", description: "Reached 100 WPM milestone", date: "—", status: "locked" },
  { id: 5, title: "Marathon Typist", wpm: "10 min", description: "Completed a 10-minute test at 80+ WPM", date: "—", status: "locked" },
  { id: 6, title: "Perfectionist", wpm: "100%", description: "Achieved 100% accuracy on any test", date: "—", status: "locked" },
];

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-[13px] font-bold mb-6 uppercase tracking-wider">
            Your Achievements
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
            Typing <br className="hidden md:block" /> Certificates
          </h1>
          <p className="text-[17px] text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
            Earn verifiable certificates for every milestone. Share them on LinkedIn, add to your resume, or print them for your wall.
          </p>
          <Link
            href="/typing-test"
            className="inline-flex items-center justify-center gap-2 bg-[#126dfb] hover:bg-blue-600 text-white font-semibold py-3.5 px-8 rounded-xl transition-all shadow-sm"
          >
            <Image src="/icons/keyboard_logo.png" alt="" width={20} height={20} className="object-contain" aria-hidden="true" />
            Start Earning Certificates
          </Link>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <CertificateCard key={cert.id} cert={cert} />
            ))}
          </div>
        </div>
      </section>

      {/* How to Earn */}
      <section className="py-16 px-6 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How to Earn Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard step="1" title="Take a Test" description="Choose any timed or word-count test and complete it with your best effort." />
            <StepCard step="2" title="Meet the Threshold" description="Hit the required WPM or accuracy milestone for the certificate you want." />
            <StepCard step="3" title="Get Certified" description="Instantly receive a verifiable, shareable certificate with a unique ID." />
          </div>
        </div>
      </section>

      <FinalCta />
    </main>
  );
}

function CertificateCard({ cert }: { cert: typeof certificates[0] }) {
  const isEarned = cert.status === "earned";

  return (
    <div className={`relative bg-white rounded-2xl border overflow-hidden transition-all duration-300 ${
      isEarned ? "border-purple-200 hover:border-purple-300 hover:shadow-lg" : "border-gray-100 opacity-60"
    }`}>
      {/* Certificate Preview */}
      <div className="aspect-[4/3] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 bg-white/80 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Image src="/icons/certificate.svg" alt="" width={24} height={24} className="object-contain text-purple-600" aria-hidden="true" />
            </div>
            <span className={`text-2xl font-bold ${isEarned ? "text-purple-600" : "text-gray-300"}`}>
              {isEarned ? "✓" : "🔒"}
            </span>
          </div>
          <div className="text-center">
            <p className={`text-3xl font-bold ${isEarned ? "text-gray-900" : "text-gray-400"}`}>{cert.title}</p>
            <p className={`text-lg font-semibold mt-2 ${isEarned ? "text-[#126dfb]" : "text-gray-300"}`}>{cert.wpm}</p>
          </div>
          <div className="text-right">
            {isEarned && <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full">Verified • {cert.date}</span>}
            {!isEarned && <span className="text-xs text-gray-400 font-semibold bg-gray-100 px-2 py-1 rounded-full">Locked</span>}
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="p-6">
        <p className={`text-sm leading-relaxed mb-4 ${isEarned ? "text-gray-600" : "text-gray-400"}`}>{cert.description}</p>
        {isEarned ? (
          <div className="flex gap-3">
            <button className="flex-1 bg-[#126dfb] hover:bg-blue-600 text-white py-2.5 rounded-xl font-medium text-sm transition-colors">
              View Certificate
            </button>
            <button className="flex-1 border border-gray-200 hover:bg-gray-50 text-gray-700 py-2.5 rounded-xl font-medium text-sm transition-colors">
              Share
            </button>
          </div>
        ) : (
          <Link
            href="/typing-test"
            className="block w-full text-center bg-gray-100 text-gray-400 py-2.5 rounded-xl font-medium text-sm cursor-not-allowed"
            aria-disabled="true"
          >
            Complete a Test to Unlock
          </Link>
        )}
      </div>
    </div>
  );
}

function StepCard({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="text-center p-6">
      <div className="w-16 h-16 mx-auto mb-4 bg-[#126dfb] text-white rounded-2xl flex items-center justify-center text-2xl font-bold">
        {step}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}