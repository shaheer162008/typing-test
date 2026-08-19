"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  type User,
  onAuthStateChanged,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAdmin: false,
  loading: true,
  signOut: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);

      if (firebaseUser) {
        // Set a simple cookie so Next.js middleware can detect auth state
        // (Firebase tokens are validated client-side; this cookie is just a presence signal)
        const token = await firebaseUser.getIdToken();
        document.cookie = `auth-token=${token}; path=/; max-age=3600; SameSite=Lax`;

        // Check admin role from Firestore — wrapped in try/catch
        try {
          const userDocRef = doc(db, "users", firebaseUser.uid);
          const userDoc = await getDoc(userDocRef);

          if (!userDoc.exists()) {
            // If user document was deleted from Firestore (or is brand new), create it
            import("firebase/firestore").then(async ({ setDoc, serverTimestamp }) => {
              await setDoc(userDocRef, {
                email: firebaseUser.email,
                displayName: firebaseUser.displayName || "User",
                role: "user",
                createdAt: serverTimestamp(),
                stats: { topWpm: 0, avgWpm: 0, testsTaken: 0 },
                badges: []
              });
            });
            setIsAdmin(false);
          } else {
            setIsAdmin(userDoc.data()?.role === "admin");
          }
        } catch (err) {
          console.warn("Could not fetch user role from Firestore:", err);
          setIsAdmin(false);
        }
      } else {
        // Clear the cookie on sign-out
        document.cookie = "auth-token=; path=/; max-age=0";
        setIsAdmin(false);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signOut = async () => {
    await firebaseSignOut(auth);
    // Cookie will be cleared by the onAuthStateChanged listener above
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
