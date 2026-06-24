
## 📄 `day-07-not-found/questions.md` (English)

```markdown
# Day 7 – Questions & Answers

## Q1: What is the purpose of `not-found.js` in Next.js?

**Answer:**  
It allows you to create a custom UI for 404 errors (page not found) instead of the default Next.js 404 page.

## Q2: How is `not-found.js` different from `error.js`?

**Answer:**  
- `not-found.js` handles **routing errors** (page not found).  
- `error.js` handles **runtime errors** (API failure, component crash).

## Q3: Can you have multiple `not-found.js` files in one project?

**Answer:**  
Yes. You can have nested `not-found.js` files. Each folder can have its own custom 404 page.

## Q4: How does a nested 404 work?

**Answer:**  
If `app/day-7/blog/not-found.js` exists, then any unmatched route under `/blog` (e.g., `/blog/something`) will show that specific 404 page instead of the parent 404.

## Q5: How do you manually trigger a 404 page in a Server Component?

**Answer:**  
Import `notFound` from `next/navigation` and call it:

```javascript
import { notFound } from 'next/navigation';
if (!data) notFound();
```

## Q6: What is the difference between not-found.js and not-found page in app/ root?

**Answer:**
- `app/not-found.js` is the global fallback for the entire app.
- `app/folder/not-found.js` is a scoped fallback for that specific folder and its sub-routes.

## Q7: Can not-found.js be a Client Component?

**Answer:**
Yes, but it’s generally better as a Server Component because it doesn’t need client-side interactivity, and Server Components are better for SEO.

## Q8: Why did we add import Link from 'next/link' in the blog page?

**Answer:**
Because Link is a Next.js component that enables client-side navigation. It must be imported before use.

## Q9: What happens if you don't create not-found.js?

**Answer:**
Next.js shows its default built-in 404 page.

