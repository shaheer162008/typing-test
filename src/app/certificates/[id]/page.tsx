"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";

export default function PublicCertificatePage({ params }: { params: Promise<{ id: string }> }) {
  const { id: certId } = use(params);
  const [certData, setCertData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const q = query(collection(db, "certificates"), where("certId", "==", certId));
        const snap = await getDocs(q);

        if (!snap.empty) {
          const data = snap.docs[0].data();
          
          // Fetch user name
          const userDocRef = doc(db, "users", data.userId);
          const userDoc = await getDoc(userDocRef);
          const userName = userDoc.exists() ? userDoc.data().displayName : "Anonymous";

          setCertData({ ...data, userName });
        } else {
          setError(true);
        }
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchCertificate();
  }, [certId]);

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center print:hidden">
        <div className="w-8 h-8 border-4 border-blue-200 border-t-[#126dfb] rounded-full animate-spin"></div>
      </main>
    );
  }

  if (error || !certData) {
    return (
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 print:hidden">
        <div className="bg-white p-8 rounded-2xl shadow-sm text-center max-w-md border border-gray-100">
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
            ✕
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Certificate Not Found</h1>
          <p className="text-gray-500 mb-6">This certificate ID does not exist or has been removed.</p>
          <Link href="/certificates" className="text-[#126dfb] font-semibold hover:underline">
            Go to Verification Portal
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6 flex flex-col items-center justify-center print:p-0 print:bg-white print:min-h-0">
      
      {/* Non-print Web UI Controls */}
      <div className="max-w-4xl w-full flex items-center justify-between mb-8 print:hidden">
        <Link href="/" className="text-gray-500 hover:text-gray-900 font-medium text-sm flex items-center gap-2 transition-colors">
          &larr; Back to Platform
        </Link>
        <div className="flex gap-4">
          <button 
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert("Link copied to clipboard!");
            }}
            className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-2.5 px-6 rounded-xl font-semibold text-sm transition-colors shadow-sm flex items-center gap-2"
          >
            Copy Link
          </button>
          <button 
            onClick={() => window.print()}
            className="bg-[#126dfb] hover:bg-blue-600 text-white py-2.5 px-6 rounded-xl font-semibold text-sm transition-colors shadow-sm flex items-center gap-2"
          >
            Download PDF
          </button>
        </div>
      </div>

      {/* The Printable Certificate Design */}
      <div 
        className="relative w-full max-w-[1000px] aspect-[1.414/1] bg-white border border-gray-200 shadow-2xl rounded-none print:shadow-none print:border-none print:w-[100%] print:h-[100%] mx-auto overflow-hidden flex flex-col"
        style={{
          backgroundImage: "url('/patterns/topography.svg')", // optional subtle bg pattern
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
          backgroundColor: "#ffffff"
        }}
      >
        {/* Certificate Border decoration */}
        <div className="absolute inset-4 border-2 border-blue-900/10 pointer-events-none"></div>
        <div className="absolute inset-5 border border-blue-900/5 pointer-events-none"></div>

        {/* Header */}
        <div className="px-16 pt-16 flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#126dfb] rounded-2xl flex items-center justify-center shadow-lg">
              <Image src="/icons/keyboard_logo.png" alt="Logo" width={32} height={32} className="brightness-0 invert" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">TYPING TEST</h2>
              <p className="text-sm font-bold text-[#126dfb] tracking-[0.2em] uppercase">Skill Certification</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-xs font-mono font-bold uppercase tracking-widest mb-1">Certificate ID</p>
            <p className="text-gray-900 font-mono text-sm">{certData.certId}</p>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 flex flex-col items-center justify-center px-16 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight" style={{ fontFamily: "serif" }}>
            Certificate of {certData.title}
          </h1>
          <p className="text-lg text-gray-500 uppercase tracking-[0.2em] mb-12">
            Is proudly presented to
          </p>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#126dfb] mb-12 border-b-2 border-gray-100 pb-4 inline-block px-12">
            {certData.userName}
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            For successfully demonstrating outstanding typing proficiency on our official platform, achieving an impressive speed of 
            <strong className="text-gray-900"> {certData.wpm} Words Per Minute </strong>.
          </p>
        </div>

        {/* Footer */}
        <div className="px-16 pb-16 flex justify-between items-end">
          <div>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Date of Achievement</p>
            <p className="text-gray-900 font-medium border-b border-gray-300 pb-1 px-4 inline-block min-w-[150px] text-center">
              {certData.timestamp?.toDate ? certData.timestamp.toDate().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : "Recently"}
            </p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 mb-2 mx-auto opacity-20">
              <Image src="/icons/certificate.svg" alt="Seal" width={96} height={96} />
            </div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Official Seal</p>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Verified via</p>
            <p className="text-gray-900 font-mono text-sm border-b border-gray-300 pb-1 px-4 inline-block min-w-[150px] text-center">
              typingtest.com
            </p>
          </div>
        </div>
      </div>
      
      {/* Print Instructions */}
      <div className="mt-8 text-center text-sm text-gray-400 print:hidden">
        Tip: For best PDF results, enable "Background graphics" and set margins to "None" in the print dialog.
      </div>
    </main>
  );
}
