import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

const client = await dbConnect();
const db = client.db("NextJs");
const collection = db.collection("textNextJs");

export async function GET(req, { params }) {

    const id = await params.id;
    console.log(id);
    const singleData = await collection.findOne({ _id: new ObjectId(id) })

    return Response.json(singleData)
};

export async function DELETE(req, { params }) {

    const id = await params.id;
    console.log(id);
    const response = await collection.deleteOne({ _id: new ObjectId(id) })

    return Response.json(response)
};

export async function PATCH(req, { params }) {

    const id = await params.id;
    console.log(id);
    const postedData = await req.json();
    const filter = { _id: new ObjectId(id) };
    const updatedResponse = await collection.updateOne(filter, { $set: { ...postedData } }, { upsert: true });
    return Response.json(updatedResponse);
};