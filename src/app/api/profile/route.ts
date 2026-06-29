import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { STATIC_PROFILE } from "@/data/profile";

/**
 * In-memory server-side cache for profile data.
 * Avoids hitting MongoDB on every API call.
 */
let cachedProfile: Record<string, unknown> | null = null;
let cacheTimestamp = 0;
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

function isCacheValid(): boolean {
  return cachedProfile !== null && Date.now() - cacheTimestamp < CACHE_TTL_MS;
}

export async function GET() {
  // Return cached data if still fresh
  if (isCacheValid()) {
    return NextResponse.json(cachedProfile, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=60",
      },
    });
  }

  try {
    const client = await connectToDatabase();

    if (!client) {
      // MongoDB unavailable — return static fallback
      return NextResponse.json(STATIC_PROFILE, {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
        },
      });
    }

    const db = client.db("DevCrafted"); // ✅ Replace with your actual database name
    const collection = db.collection("Profile"); // ✅ Replace with your collection name

    const profileData = await collection.findOne();

    if (!profileData) {
      console.warn("⚠️ No profile found in DB, using static fallback data.");
      return NextResponse.json(STATIC_PROFILE, {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
        },
      });
    }

    // Update server-side cache
    cachedProfile = profileData as unknown as Record<string, unknown>;
    cacheTimestamp = Date.now();

    return NextResponse.json(profileData, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=60",
      },
    });
  } catch (error) {
    console.error("❌ Database connection error:", error);
    console.warn("⚠️ Falling back to static profile data.");
    return NextResponse.json(STATIC_PROFILE, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
      },
    });
  }
}
