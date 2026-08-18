import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-20">
      <div className="max-w-xl w-full text-center bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl border border-gray-100 relative overflow-hidden">
        

        {/* Error Badge */}
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#126dfb] text-[13px] font-medium mb-6">
          Error 404
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
          You've Typed Off Course
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-[16px] leading-relaxed mb-8">
          The page you are looking for doesn't exist or might have been moved. Let's get you back on track to boosting your WPM.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/" 
            className="w-full sm:w-auto bg-[#126dfb] hover:bg-blue-600 text-white font-semibold py-3.5 px-8 rounded-xl transition-all shadow-sm text-sm text-center"
          >
            Back to Home
          </Link>
          <Link 
            href="/blogs" 
            className="w-full sm:w-auto bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-semibold py-3.5 px-8 rounded-xl transition-all text-sm text-center"
          >
            Explore Blogs
          </Link>
        </div>

      </div>
    </main>
  );
}