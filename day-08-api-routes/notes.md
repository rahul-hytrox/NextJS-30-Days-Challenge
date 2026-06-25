# Day 8: API Routes (Route Handlers)

## Core Concept
Next.js allows you to build API endpoints directly inside your app using **Route Handlers**. These are server-side functions that handle HTTP requests (GET, POST, PUT, DELETE, etc.) and return JSON responses.

## Folder Structure
```
app/api/
├── hello/
│   └── route.js        → GET /api/hello
├── users/
│   ├── route.js         → GET /api/users, POST /api/users
│   └── [id]/
│       └── route.js     → GET /api/users/123, PUT, DELETE
```

## File Naming Rule
- API routes **must** be defined in `route.js` files.
- Each `route.js` file is inside a folder inside `app/api/`.
- The folder name becomes the URL path (e.g., `users/route.js` → `/api/users`).

## HTTP Methods (Named Exports)
```javascript
export async function GET(request) { ... }
export async function POST(request) { ... }
export async function PUT(request) { ... }
export async function DELETE(request) { ... }
```
**Important:** Use named exports, not default export. `default` export is only for `page.js` / `layout.js`.

## Request & Response

### Reading Request Body (POST/PUT)
```javascript
const body = await request.json();
```

### Returning JSON Response
```javascript
return Response.json({ message: 'Success', data: body });
```

### Custom Status Code
```javascript
return Response.json({ error: 'Not found' }, { status: 404 });
// or
return Response.json({ success: true }, { status: 201 });
```

## Dynamic Routes (`[param]`)
- Use square brackets in folder name: `[id]`
- Access the param via `params` (second argument)
- **Next.js 15+:** `params` is a Promise — you must `await` it.

```javascript
export async function GET(request, { params }) {
  const { id } = await params;  // ✅ required in Next.js 15+
  // use id
}
```

## Error Handling
Always wrap logic in try-catch to avoid server crashes.

```javascript
export async function GET() {
  try {
    const data = await fetchSomething();
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
```

## In-Memory Data (Demo Only)
Data stored in memory (like an array) resets when the server restarts. In production, use a real database (PostgreSQL, MongoDB, etc.).

## Delaying Response (Simulate Slow Network)
```javascript
export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay
  return Response.json({ message: 'After delay' });
}
```

## Summary

| Concept | Syntax |
|---|---|
| GET handler | `export async function GET(request)` |
| POST handler | `export async function POST(request)` |
| Access body | `const data = await request.json()` |
| Return JSON | `return Response.json({ ... })` |
| Custom status | `return Response.json({ ... }, { status: 201 })` |
| Dynamic param | `const { id } = await params` |
| Error response | `return Response.json({ error: '...' }, { status: 500 })` |
