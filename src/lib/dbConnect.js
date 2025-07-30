import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
// console.log("DB URI:", process.env.MONGODB_URI);

let cachedClient = null;

export async function dbConnect() {
    if (cachedClient) return cachedClient;

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
    });

    await client.connect();
    cachedClient = client;
    return client;
}
