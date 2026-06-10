# Day 2: Server vs Client Components

## Core Concept

Next.js 15 uses **Server Components by default**. You only write `'use client'` when you need interactivity.

| Feature | Server Component | Client Component |
|---------|----------------|------------------|
| Default | ✅ Yes | ❌ No (needs `'use client'`) |
| Runs on | Server | Browser |
| `async` / `await` | ✅ Allowed | ❌ Not allowed |
| `useState`, `useEffect` | ❌ | ✅ |
| `onClick`, `onChange` | ❌ | ✅ |
| Direct database / API calls | ✅ | ❌ (use fetch from client) |
| Bundle size | 0 KB (no client JS) | Includes component JS |
| SEO | Excellent (HTML prerendered) | Normal |

## When to use which?

### ✅ Use Server Component when:
- Fetching data from database or API directly
- SEO is important (product pages, blog posts)
- You don’t need `useState` or `useEffect`
- You want smaller bundle size

### ✅ Use Client Component when:
- You need state (`useState`)
- You need lifecycle effects (`useEffect`)
- You need event handlers (`onClick`, `onSubmit`)
- You use browser APIs (`localStorage`, `geolocation`)
- You need third-party libraries that rely on `window`

## Important Rules

1. **Server Component cannot be `async`?** No – they can be `async` and use `await`. Client components cannot be `async`.
2. **A file with `'use client'` becomes a Client Component** – everything inside it (including imports) becomes client code.
3. **You can mix them** – Server Component can import and render a Client Component.
4. **Props from Server to Client are serializable** (no functions, symbols, etc.)

## The “Parent Server / Child Client” Pattern

```js
// Parent: Server Component (fetches data)
export default async function Page() {
  const data = await db.query();
  return <ClientWidget data={data} />;
}

// Child: Client Component (interactive)
'use client';
export default function ClientWidget({ data }) {
  const [state, setState] = useState(data);
  return <button onClick={() => setState(...)}>Click</button>;
}
```
-----

## Why this matters?
1. **Server Components reduce JavaScript sent to the client → faster page loads.**
2. **Better SEO because search engines see the complete HTML.**
3. **You still get full interactivity where you need it.**

-----

## Code Examples in this Repo

See `/day-2-server-client` inside `main-project/src/app/`:

- `server-demo/` – pure server component with fetch
- `client-demo/` – counter and input using `'use client'`
- `mixed-demo/` – server fetches initial value, client adds buttons

-----
