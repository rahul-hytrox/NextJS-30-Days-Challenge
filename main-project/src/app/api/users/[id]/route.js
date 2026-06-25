// GET /api/users/123
export async function GET(request, { params }) {
    const { id } = await params;
    return Response.json({
        user: {
            id,
            name: `User ${id}`,
            email: `user${id}@example.com`
        }
    });
}

// PUT /api/users/123
export async function PUT(request, { params }) {
    const { id } = await params;
    const body = await request.json();
    return Response.json({
        message: `User ${id} updated successfully!`,
        updatedData: body
    });
}