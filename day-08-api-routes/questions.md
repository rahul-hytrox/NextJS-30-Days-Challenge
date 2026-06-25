# Day 8 – API Routes (Questions & Answers)

## Q1: What should be the filename for an API route in Next.js?
**Answer:**
`route.js` — it must be placed inside a folder within the `app/api/` directory.

---

## Q2: Which function do you export to handle a GET request in an API route?
**Answer:**
`export async function GET(request) { ... }` — named export.

---

## Q3: How do you access the request body in a POST request?
**Answer:**
```javascript
const body = await request.json();
```

---

## Q4: What should be the folder structure for a dynamic route like `/api/users/5`?
**Answer:**
Use a `[id]` folder: `app/api/users/[id]/route.js`. Access the params using:
```javascript
const { id } = await params;
```

---

## Q5: Why do we need to `await` the `params` object in Next.js 15?
**Answer:**
In Next.js 15, `params` is a Promise. This change enables better background data fetching, parallel fetching, and improved SSR/SSG integration for dynamic routes.

---

## Q6: What does `Response.json()` do?
**Answer:**
It returns a JSON response with the `Content-Type: application/json` header automatically set. It also stringifies the provided object.

---

## Q7: How do you return a custom HTTP status code (e.g., 201 Created) from an API route?
**Answer:**
```javascript
return Response.json({ message: 'Created' }, { status: 201 });
```

---

## Q8: Why does an in-memory database (e.g., a `users` array) reset when the server restarts?
**Answer:**
Because the data is stored in RAM (server memory). When the server restarts, the memory is cleared. For production, a persistent database like PostgreSQL or MongoDB is used.

---

## Q9: How do you handle errors in an API route?
**Answer:**
Use a `try-catch` block:
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

---

## Q10: Why can't we use `export default` in `route.js`?
**Answer:**
Because Next.js App Router Route Handlers are designed to use named exports (`GET`, `POST`, etc.) for each HTTP method. `default export` is reserved for `page.js` and `layout.js`.

---

## Q11: Which function do you export to handle a DELETE request?
**Answer:**
```javascript
export async function DELETE(request, { params }) { ... }
```

---

## Q12: How do you simulate a slow network by adding a delay in an API route?
**Answer:**
Use a Promise-based delay with `setTimeout`:
```javascript
await new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay
```
