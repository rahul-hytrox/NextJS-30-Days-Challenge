
---

## 📄 `day-02-server-client/questions.md`

```markdown
# Day 2 – Questions & Answers

## Q1: By default, is a Next.js component a Server or Client component?

**Answer:** Server Component. You do not need to write anything; it’s the default.

---

## Q2: What directive must you write at the top of a file to make it a Client Component?

**Answer:** `'use client'` (on the very first line, before any imports).

---

## Q3: Can a Client Component be `async`? Why or why not?

**Answer:** No. Client Components are synchronous because they run in the browser and cannot `await` during render. Server Components can be `async`.

---

## Q4: You need to display a list of products fetched from a database. Should you use Server or Client Component? Why?

**Answer:** Server Component. It can directly `await` the database query and sends pre‑rendered HTML to the client, which is better for performance and SEO.

---

## Q5: You need a button that changes color when clicked. Which component type is required?

**Answer:** Client Component, because it needs `useState` and `onClick` event handler.

---

## Q6: Explain the “Parent Server, Child Client” pattern.

**Answer:** A Server Component fetches data (using `async/await`) and passes it as props to a Client Component. The Client Component then uses that data with interactivity (`useState`, event handlers). This gives SEO + fast initial load (server) + interactivity (client).

---

## Q7: What happens if you write `'use client'` in a Server Component file?

**Answer:** The whole file becomes a Client Component. You cannot have both in the same file. Split into two files if you need both behaviours.

---

## Q8: Why do Server Components improve performance?

**Answer:** They send zero JavaScript to the client for that component. Only the rendered HTML is sent, making the page lighter and faster.

---

## Q9: Can you use `useEffect` inside a Server Component?

**Answer:** No. `useEffect` is a React hook that only works in Client Components. Use `'use client'` if you need effects.

---

## Q10: What is the main limitation when passing data from a Server Component to a Client Component via props?

**Answer:** The data must be serializable (e.g., plain objects, arrays, strings, numbers). You cannot pass functions, symbols, or non‑serializable values.