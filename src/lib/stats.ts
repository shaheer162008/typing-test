import { db } from "./firebase";
import { doc, increment, setDoc } from "firebase/firestore";

/**
 * Tracks when a non-logged-in (anonymous) user completes a typing test.
 * This increments a global counter in Firestore.
 */
export const trackAnonymousTest = async () => {
  try {
    const statsRef = doc(db, "metadata", "platform_stats");
    // Use setDoc with merge: true to automatically create the document if it doesn't exist
    await setDoc(
      statsRef,
      {
        totalAnonymousTests: increment(1),
      },
      { merge: true }
    );
  } catch (error) {
    console.error("Failed to track anonymous test:", error);
  }
};
