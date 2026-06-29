"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Profile } from "@/types/types";

interface ProfileContextValue {
  profile: Profile | null;
  isLoading: boolean;
  error: string | null;
}

const ProfileContext = createContext<ProfileContextValue>({
  profile: null,
  isLoading: true,
  error: null,
});

/**
 * Hook to consume the shared profile data.
 * Data is fetched once at the layout level and cached in memory.
 */
export function useProfile(): ProfileContextValue {
  const ctx = useContext(ProfileContext);
  if (ctx === undefined) {
    throw new Error("useProfile must be used within a <ProfileProvider>");
  }
  return ctx;
}

/**
 * Provider that fetches profile data once on mount and shares it
 * with the entire component tree. Subsequent route navigations
 * use the cached data — no additional API calls.
 */
export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchProfile() {
      try {
        const res = await fetch("/api/profile", {
          // Next.js fetch cache: revalidate every 5 minutes
          next: { revalidate: 300 },
        });

        if (!res.ok) {
          throw new Error(`API responded with status ${res.status}`);
        }

        const data: Profile = await res.json();

        if (!cancelled) {
          setProfile(data);
          setError(null);
        }
      } catch (err) {
        console.error("Failed to fetch profile:", err);
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Unknown error");
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    fetchProfile();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, isLoading, error }}>
      {children}
    </ProfileContext.Provider>
  );
}
