import { dbConnect } from "@/lib/dbConnect";

const client = await dbConnect();
const db = client.db("NextJs");
const collection = db.collection("textNextJs");


export async function GET() {
  try {


    const data = await collection.find({}).toArray();
    console.log("Fetched Data:", data); // should log array with docs

    return Response.json(data);
  } catch (err) {
    console.error("Error fetching from DB:", err);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


export async function POST(req) {

  const postedData = await req.json();
  const result = await collection.insertOne(postedData);

  return Response.json(result);
};