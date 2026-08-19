"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { db } from "@/lib/firebase";
import { collection, getDocs, doc, updateDoc, query, orderBy, limit, deleteDoc, addDoc, serverTimestamp } from "firebase/firestore";
import Link from "next/link";
import Image from "next/image";

// TABS
type TabType = "dashboard" | "users" | "certificates" | "lessons";

export default function AdminPage() {
  const { user, isAdmin, loading } = useAuth();
  const router = useRouter();
  
  const [activeTab, setActiveTab] = useState<TabType>("dashboard");
  const [dataLoading, setDataLoading] = useState(true);

  // Stats
  const [stats, setStats] = useState({ users: 0, tests: 0, certificates: 0 });
  const [recentTests, setRecentTests] = useState<any[]>([]);

  // Users
  const [users, setUsers] = useState<any[]>([]);

  // Certificates
  const [certificates, setCertificates] = useState<any[]>([]);

  // Lessons
  const [lessons, setLessons] = useState<any[]>([]);
  const [newLesson, setNewLesson] = useState({ text: "", type: "test", mode: "1-minute", difficulty: "medium" });

  const getModeOptions = () => {
    if (newLesson.type === "words") {
      return ["10-words", "25-words", "50-words", "100-words"];
    }
    return ["1-minute", "2-minute", "3-minute", "5-minute", "10-minute", "15-minute", "30-minute"];
  };

  useEffect(() => {
    if (!loading && !user) router.push("/auth/sign-in");
    if (!loading && user && !isAdmin) router.push("/dashboard");
  }, [user, isAdmin, loading, router]);

  useEffect(() => {
    if (isAdmin) {
      fetchData();
    }
  }, [isAdmin, activeTab]);

  const fetchData = async () => {
    setDataLoading(true);
    try {
      if (activeTab === "dashboard") {
        const usersSnap = await getDocs(collection(db, "users"));
        const testsSnap = await getDocs(query(collection(db, "tests"), orderBy("createdAt", "desc"), limit(10)));
        const certSnap = await getDocs(collection(db, "certificates"));
        
        setStats({
          users: usersSnap.size,
          tests: testsSnap.size, // This is just for top 10 recent, normally we use aggregations
          certificates: certSnap.size
        });
        setRecentTests(testsSnap.docs.map(d => ({ id: d.id, ...d.data() })));
      }
      else if (activeTab === "users") {
        const snap = await getDocs(collection(db, "users"));
        setUsers(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      }
      else if (activeTab === "certificates") {
        const snap = await getDocs(query(collection(db, "certificates"), orderBy("issuedAt", "desc")));
        setCertificates(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      }
      else if (activeTab === "lessons") {
        const snap = await getDocs(collection(db, "lessons"));
        setLessons(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
    setDataLoading(false);
  };

  const handleRoleChange = async (userId: string, newRole: string) => {
    try {
      await updateDoc(doc(db, "users", userId), { role: newRole });
      setUsers(users.map(u => u.id === userId ? { ...u, role: newRole } : u));
    } catch (err) {
      alert("Error updating role");
    }
  };

  const handleAddLesson = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLesson.text) return;
    try {
      await addDoc(collection(db, "lessons"), {
        text: newLesson.text,
        type: newLesson.type, // 'test', 'practice', 'words'
        mode: newLesson.mode, // '1-minute', '10-words' etc
        difficulty: newLesson.difficulty,
        createdAt: serverTimestamp()
      });
      setNewLesson({ ...newLesson, text: "" });
      fetchData(); // refresh
    } catch (err) {
      alert("Error adding lesson");
    }
  };

  const handleSeedLessons = async () => {
    if (!confirm("This will add default sample lessons to the database. Proceed?")) return;
    setDataLoading(true);
    
    const timeDurations = ["1-minute", "2-minute", "3-minute", "5-minute", "10-minute", "15-minute", "30-minute"];
    const wordCounts = ["10-words", "25-words", "50-words", "100-words"];
    
    const sampleLessons: any[] = [];
    
    // Seed Tests
    timeDurations.forEach(dur => {
      sampleLessons.push({ type: "test", mode: dur, difficulty: "medium", text: `This is a test firebase typing lesson for test mode ${dur}. The quick brown fox jumps over the lazy dog repeatedly to help you build up your typing speed and muscle memory during this assessment.` });
    });
    
    // Seed Practice
    timeDurations.forEach(dur => {
      sampleLessons.push({ type: "practice", mode: dur, difficulty: "easy", text: `This is a test firebase practice text for practice mode ${dur}. Relax and focus on your accuracy. The goal here is not raw speed, but building a consistent rhythm without errors.` });
    });
    
    // Seed Words
    wordCounts.forEach(count => {
      // Create a mock string of exactly N words
      const numWords = parseInt(count.split('-')[0]);
      const baseWords = ["test", "firebase", "apple", "banana", "typing", "skill", "keyboard", "monitor", "system", "code"];
      const generatedWords = Array.from({length: numWords}, (_, i) => baseWords[i % baseWords.length]);
      
      sampleLessons.push({ type: "words", mode: count, difficulty: "medium", text: generatedWords.join(" ") });
    });
    
    try {
      // Clear existing lessons to avoid duplicates during repeated seeding
      const existing = await getDocs(collection(db, "lessons"));
      for (const doc of existing.docs) {
        await deleteDoc(doc.ref);
      }

      // Add all new seeds
      for (const lesson of sampleLessons) {
        await addDoc(collection(db, "lessons"), { ...lesson, createdAt: serverTimestamp() });
      }
      alert("Database wiped and fresh lessons seeded successfully!");
      fetchData();
    } catch (err) {
      alert("Error seeding lessons");
    }
    setDataLoading(false);
  };

  const handleDeleteLesson = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      await deleteDoc(doc(db, "lessons", id));
      setLessons(lessons.filter(l => l.id !== id));
    } catch (err) {
      alert("Error deleting lesson");
    }
  };

  if (loading || (!user && !isAdmin)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-8 h-8 border-4 border-blue-200 border-t-[#126dfb] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full z-10">
        <div className="p-6 border-b border-gray-100">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/icons/keyboard_logo.png" alt="Logo" width={24} height={24} />
            <span className="font-black text-xl tracking-tight text-gray-900">Admin Panel</span>
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab("dashboard")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium transition-colors ${activeTab === "dashboard" ? "bg-blue-50 text-[#126dfb]" : "text-gray-600 hover:bg-gray-50"}`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => setActiveTab("users")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium transition-colors ${activeTab === "users" ? "bg-blue-50 text-[#126dfb]" : "text-gray-600 hover:bg-gray-50"}`}
          >
            Manage Users
          </button>
          <button 
            onClick={() => setActiveTab("certificates")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium transition-colors ${activeTab === "certificates" ? "bg-blue-50 text-[#126dfb]" : "text-gray-600 hover:bg-gray-50"}`}
          >
            Certificates
          </button>
          <button 
            onClick={() => setActiveTab("lessons")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium transition-colors ${activeTab === "lessons" ? "bg-blue-50 text-[#126dfb]" : "text-gray-600 hover:bg-gray-50"}`}
          >
            Lessons Base
          </button>
        </nav>
        
        <div className="p-4 border-t border-gray-100">
          <Link href="/dashboard" className="w-full flex justify-center text-sm font-semibold text-gray-500 hover:text-gray-800">
            &larr; Back to App
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8 h-screen overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 capitalize">{activeTab}</h1>
            <p className="text-gray-500 mt-1">Manage platform {activeTab}</p>
          </header>

          {dataLoading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-4 border-blue-200 border-t-[#126dfb] rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              {/* DASHBOARD TAB */}
              {activeTab === "dashboard" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Total Users</p>
                      <p className="text-4xl font-black text-gray-900">{stats.users}</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Certificates Issued</p>
                      <p className="text-4xl font-black text-[#126dfb]">{stats.certificates}</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Recent Tests</p>
                      <p className="text-4xl font-black text-green-600">{stats.tests}+</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Recent Tests Stream</h3>
                  <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                    <table className="w-full text-left">
                      <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                          <th className="px-6 py-4 text-sm font-semibold text-gray-600">User</th>
                          <th className="px-6 py-4 text-sm font-semibold text-gray-600">Mode</th>
                          <th className="px-6 py-4 text-sm font-semibold text-gray-600">WPM</th>
                          <th className="px-6 py-4 text-sm font-semibold text-gray-600">Accuracy</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {recentTests.map(test => (
                          <tr key={test.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 font-medium text-gray-900">{test.displayName || "Anonymous"}</td>
                            <td className="px-6 py-4 text-gray-500">{test.mode}</td>
                            <td className="px-6 py-4 font-bold text-[#126dfb]">{test.wpm}</td>
                            <td className="px-6 py-4 text-green-600 font-semibold">{test.accuracy}%</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* USERS TAB */}
              {activeTab === "users" && (
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                      <tr>
                        <th className="px-6 py-4 text-sm font-semibold text-gray-600">Name</th>
                        <th className="px-6 py-4 text-sm font-semibold text-gray-600">Email</th>
                        <th className="px-6 py-4 text-sm font-semibold text-gray-600">Role</th>
                        <th className="px-6 py-4 text-sm font-semibold text-gray-600">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {users.map(u => (
                        <tr key={u.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-900">{u.displayName}</td>
                          <td className="px-6 py-4 text-gray-500">{u.email}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${u.role === "admin" ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-700"}`}>
                              {u.role || "user"}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <select 
                              value={u.role || "user"} 
                              onChange={(e) => handleRoleChange(u.id, e.target.value)}
                              className="bg-white border border-gray-200 text-sm rounded-lg px-3 py-1.5 focus:ring-1 focus:ring-[#126dfb]"
                            >
                              <option value="user">User</option>
                              <option value="admin">Admin</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* CERTIFICATES TAB */}
              {activeTab === "certificates" && (
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                      <tr>
                        <th className="px-6 py-4 text-sm font-semibold text-gray-600">ID</th>
                        <th className="px-6 py-4 text-sm font-semibold text-gray-600">User</th>
                        <th className="px-6 py-4 text-sm font-semibold text-gray-600">WPM</th>
                        <th className="px-6 py-4 text-sm font-semibold text-gray-600">Accuracy</th>
                        <th className="px-6 py-4 text-sm font-semibold text-gray-600">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {certificates.length === 0 && (
                        <tr><td colSpan={5} className="p-8 text-center text-gray-500">No certificates issued yet.</td></tr>
                      )}
                      {certificates.map(cert => (
                        <tr key={cert.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm text-gray-400 font-mono">{cert.id.substring(0, 8)}...</td>
                          <td className="px-6 py-4 font-medium text-gray-900">{cert.userName}</td>
                          <td className="px-6 py-4 font-bold text-[#126dfb]">{cert.wpm}</td>
                          <td className="px-6 py-4 text-green-600 font-semibold">{cert.accuracy}%</td>
                          <td className="px-6 py-4 text-gray-500 text-sm">{cert.issuedAt?.toDate().toLocaleDateString() || "Unknown"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* LESSONS TAB */}
              {activeTab === "lessons" && (
                <div className="space-y-8">
                  <div className="flex justify-between items-center bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Database Seeding</h3>
                      <p className="text-sm text-gray-500">Automatically populate lessons for all modes.</p>
                    </div>
                    <button onClick={handleSeedLessons} className="bg-green-600 text-white font-bold py-2 px-6 rounded-xl hover:bg-green-700 transition-colors">
                      Seed Default Lessons
                    </button>
                  </div>

                  <form onSubmit={handleAddLesson} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Add Custom Lesson</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
                        <select 
                          value={newLesson.type} 
                          onChange={e => setNewLesson({...newLesson, type: e.target.value, mode: e.target.value === 'words' ? '10-words' : '1-minute'})}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 focus:ring-[#126dfb]"
                        >
                          <option value="test">Typing Test</option>
                          <option value="practice">Typing Practice</option>
                          <option value="words">Word Count</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Mode / Duration</label>
                        <select 
                          value={newLesson.mode} 
                          onChange={e => setNewLesson({...newLesson, mode: e.target.value})}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 focus:ring-[#126dfb]"
                        >
                          {getModeOptions().map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Difficulty</label>
                        <select 
                          value={newLesson.difficulty} 
                          onChange={e => setNewLesson({...newLesson, difficulty: e.target.value})}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 focus:ring-[#126dfb]"
                        >
                          <option value="easy">Easy</option>
                          <option value="medium">Medium</option>
                          <option value="hard">Hard</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Content (Text)</label>
                      <textarea 
                        value={newLesson.text}
                        onChange={e => setNewLesson({...newLesson, text: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 h-32 focus:ring-[#126dfb]"
                        placeholder="Paste the lesson text here or enter a space-separated word list..."
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="bg-[#126dfb] text-white font-bold py-2 px-6 rounded-xl hover:bg-blue-600 transition-colors">
                      Save Lesson
                    </button>
                  </form>

                  <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                    <table className="w-full text-left">
                      <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                          <th className="px-6 py-4 text-sm font-semibold text-gray-600">Content Preview</th>
                          <th className="px-6 py-4 text-sm font-semibold text-gray-600">Category & Mode</th>
                          <th className="px-6 py-4 text-sm font-semibold text-gray-600">Difficulty</th>
                          <th className="px-6 py-4 text-sm font-semibold text-gray-600">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {lessons.length === 0 && (
                          <tr><td colSpan={4} className="p-8 text-center text-gray-500">No lessons found. Use the seeder above!</td></tr>
                        )}
                        {lessons.map(lesson => (
                          <tr key={lesson.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-gray-900 text-sm max-w-[200px] truncate">{lesson.text}</td>
                            <td className="px-6 py-4">
                              <div className="flex flex-col gap-1 items-start">
                                <span className="px-2 py-0.5 bg-blue-50 text-[#126dfb] rounded text-[11px] font-bold uppercase">{lesson.type}</span>
                                <span className="text-xs font-medium text-gray-500">{lesson.mode}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 rounded text-xs font-semibold uppercase ${
                                lesson.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                                lesson.difficulty === 'medium' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                              }`}>{lesson.difficulty}</span>
                            </td>
                            <td className="px-6 py-4">
                              <button onClick={() => handleDeleteLesson(lesson.id)} className="text-red-500 hover:text-red-700 font-semibold text-sm">
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
