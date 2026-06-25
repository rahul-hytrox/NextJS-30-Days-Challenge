// Mock database (in-memory)
let users = [
    { id: 1, name: 'Rahul' },
    { id: 2, name: 'Sneha' },
];

// GET /api/users
export async function GET() {
    return Response.json({ users });
}

// POST /api/users
export async function POST(request) {
    const body = await request.json();
    const newUser = {
        id: users.length + 1,
        name: body.name
    };
    users.push(newUser);
    return Response.json({
        message: 'User created!',
        user: newUser
    });
}