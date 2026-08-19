"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs, addDoc, serverTimestamp } from "firebase/firestore";

const CERT_TIERS = [
  { id: "beginner", title: "Beginner", minWpm: 1, maxWpm: 30, description: "Just starting out. Focus on accuracy first." },
  { id: "intermediate", title: "Intermediate", minWpm: 31, maxWpm: 50, description: "Building speed. Daily practice pays off." },
  { id: "advanced", title: "Advanced", minWpm: 51, maxWpm: 70, description: "Solid technique. Ready for certification." },
  { id: "expert", title: "Expert", minWpm: 71, maxWpm: 89, description: "Top tier. Consistency is your advantage." },
  { id: "master", title: "Master", minWpm: 90, maxWpm: 999, description: "Elite speed. Certificate proves it." },
];

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [tests, setTests] = useState<Record<string, any>[]>([]);
  const [certs, setCerts] = useState<Record<string, any>[]>([]);
  const [stats, setStats] = useState({
    highestWpm: 0,
    avgAccuracy: 0,
    totalTests: 0,
    streak: 0
  });

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/auth/sign-in?from=/dashboard");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (!user) return;
    const loadData = async () => {
      try {
        const testsQ = query(collection(db, "tests"), where("userId", "==", user.uid));
        const testsSnap = await getDocs(testsQ);
        const fetchedTests: Record<string, any>[] = testsSnap.docs.map(doc => ({ id: doc.id, ...(doc.data() as Record<string, any>) }));
        
        // Sort descending by timestamp
        fetchedTests.sort((a, b) => {
          const tA = a.timestamp?.toMillis ? a.timestamp.toMillis() : 0;
          const tB = b.timestamp?.toMillis ? b.timestamp.toMillis() : 0;
          return tB - tA;
        });

        setTests(fetchedTests);

        let maxWpm = 0;
        let totalAcc = 0;
        fetchedTests.forEach(t => {
          if (t.wpm > maxWpm) maxWpm = t.wpm;
          totalAcc += (t.accuracy || 0);
        });

        setStats({
          highestWpm: maxWpm,
          avgAccuracy: fetchedTests.length > 0 ? Math.round(totalAcc / fetchedTests.length) : 0,
          totalTests: fetchedTests.length,
          streak: 0 // Simplification for now
        });

        // Load certificates
        const certsQ = query(collection(db, "certificates"), where("userId", "==", user.uid));
        const certsSnap = await getDocs(certsQ);
        let userCerts: Record<string, any>[] = certsSnap.docs.map(doc => ({ id: doc.id, ...(doc.data() as Record<string, any>) }));

        // Auto-issue certificates if highest WPM meets new tiers
        if (maxWpm > 0) {
          let hasNewCerts = false;
          for (const tier of CERT_TIERS) {
            // Check if user's maxWpm qualifies for this tier
            if (maxWpm >= tier.minWpm) {
              const alreadyHas = userCerts.find(c => c["tierId"] === tier.id);
              if (!alreadyHas) {
                // Issue new certificate
                const newCert: Record<string, any> = {
                  userId: user.uid,
                  tierId: tier.id,
                  title: tier.title,
                  wpm: maxWpm,
                  description: tier.description,
                  certId: `TT-${Math.random().toString(36).substring(2, 8).toUpperCase()}-${new Date().getFullYear()}`,
                };
                const docRef = await addDoc(collection(db, "certificates"), { ...newCert, timestamp: serverTimestamp() });
                userCerts.push({ id: docRef.id, ...newCert, timestamp: { toDate: () => new Date() } }); // Optimistic add
                hasNewCerts = true;
              }
            }
          }
          if (hasNewCerts) {
            // Sort by tier minWpm ascending just for rendering consistency
            userCerts.sort((a, b) => {
              const tA = CERT_TIERS.find(t => t.id === a["tierId"])?.minWpm || 0;
              const tB = CERT_TIERS.find(t => t.id === b["tierId"])?.minWpm || 0;
              return tA - tB;
            });
          }
        }
        
        setCerts(userCerts);
      } catch (err) {
        console.error("Failed to load dashboard data", err);
      }
    };
    loadData();
  }, [user]);

  if (loading) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-[#126dfb] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500">Loading dashboard...</p>
        </div>
      </main>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.displayName ?? user.email}</h1>
            <p className="text-gray-500 mt-1">{user.email}</p>
          </div>
          <Link
            href="/typing-test"
            className="inline-flex items-center justify-center gap-2 bg-[#126dfb] hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-xl transition-all shadow-sm"
          >
            <Image src="/icons/keyboard_logo.png" alt="" width={20} height={20} className="object-contain" aria-hidden="true" />
            Start Test
          </Link>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard title="Highest WPM" value={stats.highestWpm > 0 ? stats.highestWpm : "—"} icon="/icons/real-time.svg" color="#126dfb" />
          <StatCard title="Avg Accuracy" value={stats.totalTests > 0 ? `${stats.avgAccuracy}%` : "—"} icon="/icons/skill.svg" color="#10b981" />
          <StatCard title="Daily Streak" value={stats.streak > 0 ? stats.streak : "—"} icon="/icons/time-locked.svg" color="#f59e0b" />
          <StatCard title="Tests Completed" value={stats.totalTests} icon="/icons/dashboard.svg" color="#8b5cf6" />
        </div>

        {/* Quick Actions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ActionCard
              title="Timed Test"
              description="1–30 minute tests for endurance"
              href="/typing-test"
              icon="/icons/time-locked.svg"
            />
            <ActionCard
              title="Practice Session"
              description="Focused practice by skill level"
              href="/typing-practice"
              icon="/icons/skill.svg"
            />
            <ActionCard
              title="Word Challenge"
              description="10–100 word sprint tests"
              href="/word-typing"
              icon="/icons/certificate.svg"
            />
          </div>
        </section>

        {/* My Certificates */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">My Certificates</h2>
            <Link href="/certificates" className="text-sm text-[#126dfb] font-medium hover:underline">
              Verify a Certificate →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERT_TIERS.map((tier) => {
              const earnedCert = certs.find(c => c.tierId === tier.id);
              if (earnedCert) {
                return <CertificateCard key={tier.id} cert={{ ...earnedCert, status: "earned" }} />;
              }
              // Render locked placeholder
              return (
                <CertificateCard 
                  key={tier.id} 
                  cert={{ 
                    id: tier.id, 
                    title: tier.title, 
                    wpm: `Requires ${tier.minWpm} WPM`, 
                    description: tier.description, 
                    date: "—", 
                    status: "locked" 
                  }} 
                />
              );
            })}
          </div>
        </section>

        {/* Recent Activity */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            {tests.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                You haven't taken any tests yet.
                <div className="mt-4">
                  <Link href="/typing-test" className="text-[#126dfb] hover:underline font-medium">Take your first test</Link>
                </div>
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-[#f8fafc] border-b border-gray-100">
                  <tr>
                    <th className="text-left px-6 py-4 font-semibold text-gray-700">Date</th>
                    <th className="text-left px-6 py-4 font-semibold text-gray-700">Test Type</th>
                    <th className="text-left px-6 py-4 font-semibold text-gray-700">WPM</th>
                    <th className="text-left px-6 py-4 font-semibold text-gray-700">Accuracy</th>
                    <th className="text-left px-6 py-4 font-semibold text-gray-700">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {tests.slice(0, 10).map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 text-gray-600">
                        {item.timestamp?.toDate ? item.timestamp.toDate().toLocaleDateString() : "Just now"}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 capitalize">
                        {item.type === "words" ? `${item.mode.replace("-words", "")} Words` : `${item.mode.replace("-minute", "")} Min Test`}
                      </td>
                      <td className="px-6 py-4 font-bold text-[#126dfb]">{item.wpm}</td>
                      <td className="px-6 py-4 text-green-600 font-medium">{item.accuracy}%</td>
                      <td className="px-6 py-4 text-gray-500">
                        {item.durationSeconds ? 
                          (item.durationSeconds >= 60 ? 
                            `${Math.floor(item.durationSeconds / 60)}:${(item.durationSeconds % 60).toString().padStart(2, '0')}` : 
                            `${item.durationSeconds}s`
                          ) : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

function StatCard({ title, value, icon, color }: { title: string; value: string | number; icon: string; color: string }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#126dfb]/30 hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <Image src={icon} alt="" width={24} height={24} className="object-contain" style={{ filter: `drop-shadow(0 0 0 ${color})` }} aria-hidden="true" />
      </div>
      <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  );
}

function ActionCard({ title, description, href, icon }: { title: string; description: string; href: string; icon: string }) {
  return (
    <Link href={href} className="block bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#126dfb]/30 hover:shadow-md transition-all duration-300 group">
      <div className="w-12 h-12 bg-[#f8fafc] rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
        <Image src={icon} alt="" width={24} height={24} className="object-contain" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </Link>
  );
}

function CertificateCard({ cert }: { cert: any }) {
  const isEarned = cert.status === "earned";

  return (
    <div className={`relative bg-white rounded-2xl border overflow-hidden transition-all duration-300 ${
      isEarned ? "border-blue-200 hover:border-blue-300 hover:shadow-lg" : "border-gray-100 opacity-60"
    }`}>
      <div className="aspect-[4/3] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 bg-white/80 rounded-xl flex items-center justify-center backdrop-blur-sm border border-blue-100">
              <Image src="/icons/certificate.svg" alt="" width={24} height={24} className="object-contain text-[#126dfb]" aria-hidden="true" />
            </div>
            <span className={`text-2xl font-bold ${isEarned ? "text-[#126dfb]" : "text-gray-300"}`}>
              {isEarned ? "✓" : "🔒"}
            </span>
          </div>
          <div className="text-center">
            <p className={`text-3xl font-bold ${isEarned ? "text-gray-900" : "text-gray-400"}`}>{cert.title}</p>
            <p className={`text-lg font-semibold mt-2 ${isEarned ? "text-[#126dfb]" : "text-gray-300"}`}>{cert.wpm}</p>
          </div>
          <div className="text-right">
            {isEarned && <p className="text-xs text-gray-500 font-mono">ID: {cert.certId}</p>}
            {!isEarned && <span className="text-xs text-gray-400 font-semibold bg-gray-100 px-2 py-1 rounded-full">Locked</span>}
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className={`text-sm leading-relaxed mb-4 ${isEarned ? "text-gray-600" : "text-gray-400"}`}>{cert.description}</p>
        {isEarned ? (
          <div className="flex gap-3">
            <Link
              href={`/certificates/${cert.certId}`}
              className="flex-1 text-center bg-[#126dfb] hover:bg-blue-600 text-white py-2.5 rounded-xl font-medium text-sm transition-colors shadow-sm"
            >
              Download PDF
            </Link>
            <Link
              href={`/certificates/${cert.certId}`}
              className="flex-1 text-center border border-gray-200 hover:bg-gray-50 text-gray-700 py-2.5 rounded-xl font-medium text-sm transition-colors"
            >
              Share Link
            </Link>
          </div>
        ) : (
          <Link
            href="/typing-test"
            className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-500 py-2.5 rounded-xl font-medium text-sm transition-colors"
          >
            Take Test to Unlock
          </Link>
        )}
      </div>
    </div>
  );
}
