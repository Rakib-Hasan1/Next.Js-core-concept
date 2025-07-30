export async function GET(req, params) {

    const id = await params;
    console.log(id);

    return Response.json({ params: id })
};

export async function DELETE(req, params) {

    const id = await params;
    console.log(id);

    return Response.json({ params: id })
};

export async function PATCH(req, params) {

    const id = await params;
    console.log(id);

    return Response.json({ params: id })
};