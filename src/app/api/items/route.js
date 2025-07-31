import { dbConnect } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function GET() {
  try {
    const client = await dbConnect();
    const db = client.db("NextJs");
    const collection = db.collection("textNextJs");

    const data = await collection.find({}).toArray();
    console.log("Fetched Data:", data);

    return Response.json(data);
  } catch (err) {
    console.error("Error fetching from DB:", err);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const postedData = await req.json();

    const client = await dbConnect();
    const db = client.db("NextJs");
    const collection = db.collection("textNextJs");

    const result = await collection.insertOne(postedData);
    revalidatePath("/products");

    return Response.json(result);
  } catch (err) {
    console.error("Error inserting into DB:", err);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
