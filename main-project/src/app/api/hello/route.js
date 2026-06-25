// GET /api/hello
export async function GET() {
    return Response.json({
        message: 'Hello from Next.js API!',
        timestamp: new Date().toISOString()
    });
}

// POST /api/hello
export async function POST(request) {
    const body = await request.json();
    return Response.json({
        received: body,
        message: 'Data received successfully!'
    });
}