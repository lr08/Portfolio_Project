import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.DATABASE_URL as string;

if (!uri) {
  throw new Error("Please define the DATABASE_URL environment variable inside .env.local");
}

let cachedClient: MongoClient | null = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();
  console.log("✅ Connected to MongoDB");

  cachedClient = client;
  return client;
}
