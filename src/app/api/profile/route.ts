import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await connectToDatabase();
    const db = client.db("DevCrafted"); // ✅ Replace with your actual database name
    const collection = db.collection("Profile"); // ✅ Replace with your collection name

    const profileData = await collection.findOne();

    if (!profileData) {
      return NextResponse.json({ message: "Profile data not found" }, { status: 404 });
    }

    return NextResponse.json(profileData, { status: 200 });
  } catch (error) {
    console.error("❌ Database connection error:", error);
    return NextResponse.json({ message: "Error fetching data" }, { status: 500 });
  }
}
