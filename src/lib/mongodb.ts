import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.DATABASE_URL as string;

let cachedClient: MongoClient | null = null;

/**
 * Circuit breaker state.
 * If MongoDB connection failed recently, skip retrying for CIRCUIT_COOLDOWN_MS
 * to avoid repeated 3-second timeouts on every API call.
 */
let circuitOpen = false;
let circuitOpenedAt = 0;
const CIRCUIT_COOLDOWN_MS = 60_000; // 60 seconds

function isCircuitOpen(): boolean {
  if (!circuitOpen) return false;
  // Auto-close the circuit after cooldown
  if (Date.now() - circuitOpenedAt > CIRCUIT_COOLDOWN_MS) {
    circuitOpen = false;
    console.log("🔄 MongoDB circuit breaker reset — will retry connection.");
    return false;
  }
  return true;
}

function openCircuit(): void {
  circuitOpen = true;
  circuitOpenedAt = Date.now();
  console.warn("⚡ MongoDB circuit breaker opened — skipping connection attempts for 60s.");
}

/**
 * Attempts to connect to MongoDB.
 * Returns the MongoClient on success, or null if the connection fails
 * (e.g., missing env var, cluster paused, network error).
 */
export async function connectToDatabase(): Promise<MongoClient | null> {
  if (cachedClient) {
    return cachedClient;
  }

  if (!uri) {
    console.warn("⚠️ DATABASE_URL not defined — falling back to static data.");
    return null;
  }

  // Circuit breaker: if MongoDB failed recently, skip the attempt
  if (isCircuitOpen()) {
    console.warn("⚠️ Circuit breaker open — skipping MongoDB connection attempt.");
    return null;
  }

  try {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
      serverSelectionTimeoutMS: 3000, // fail fast if cluster is down
    });

    await client.connect();
    console.log("✅ Connected to MongoDB");

    cachedClient = client;
    return client;
  } catch (error) {
    console.warn("⚠️ MongoDB connection failed — falling back to static data.", error);
    openCircuit(); // prevent repeated slow timeouts
    return null;
  }
}
