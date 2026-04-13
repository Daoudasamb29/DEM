import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";
import { useRef } from "react";

// Rate limiting: max 5 logs per minute per session
const LOG_LIMIT = 5;
const LOG_WINDOW_MS = 60_000;

export function useBookingLogger() {
  const timestamps = useRef([]);

  async function logBooking(route, time) {
    const now = Date.now();

    // Purge old entries
    timestamps.current = timestamps.current.filter(t => now - t < LOG_WINDOW_MS);

    if (timestamps.current.length >= LOG_LIMIT) {
      console.warn("Rate limit: too many bookings logged.");
      return;
    }
    timestamps.current.push(now);

    try {
      await addDoc(collection(db, "bookings"), {
        route: String(route).slice(0, 80),
        time:  String(time).slice(0, 10),
        ts:    serverTimestamp(),
        // Never store user PII here
      });
    } catch (err) {
      console.error("Logging failed:", err);
    }
  }

  return { logBooking };
}